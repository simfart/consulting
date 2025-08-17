import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

type CaptchaProps = {
  onVerify: (token: string | null) => void;
};

const Captcha: React.FC<CaptchaProps> = ({ onVerify }) => {
  const [needsV2, setNeedsV2] = useState(false);

  useEffect(() => {
    // ⚡ v3 проверка (работает в фоне)
    const loadV3 = async () => {
      try {
        // @ts-ignore (grecaptcha подгружается скриптом Google)
        const token = await window.grecaptcha.execute(
          "6LcGV6krAAAAAFWhAPmP1uk7oNblekjquNUi2Uk9", // замените на ваш ключ v3
          { action: "submit" }
        );

        // Отправляем токен на сервер для проверки
        const response = await fetch("/api/verify-v3", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        const data = await response.json();

        if (data.score >= 0.5) {
          // хороший пользователь
          onVerify(token);
        } else {
          // подозрительный — включаем v2
          setNeedsV2(true);
        }
      } catch (err) {
        console.error("Ошибка reCAPTCHA v3:", err);
        setNeedsV2(true);
      }
    };

    // загружаем Google reCAPTCHA v3 скрипт
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=ВАШ_SITE_KEY_V3`;
    script.async = true;
    script.onload = loadV3;
    document.body.appendChild(script);
  }, [onVerify]);

  return (
    <div>
      {needsV2 && (
        <ReCAPTCHA
          sitekey="ВАШ_SITE_KEY_V2" // замените на ваш ключ v2
          onChange={(token: string | null) => onVerify(token)}
        />
      )}
    </div>
  );
};

export default Captcha;
