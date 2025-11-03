import { FC, useRef, useState } from "react";
import styles from "./Feedback.module.scss";
import emailjs from "@emailjs/browser";
import { ArrowRight, Button } from "@/shared/ui";
import { PhoneInput } from "@/shared/ui/PhoneInput";

export const Feedback: FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(true);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!consent) {
      setShowError(true);
      return;
    }

    setShowError(false);
    setLoading(true);

    emailjs
      .sendForm(
        "yandex_smtp",
        "template_7ka51mr",
        formRef.current,
        "IwHjGjYhONdb0XfWN"
      )
      .then(() => {
        alert("Ваша заявка отправлена!");
        formRef.current?.reset();
        setConsent(true);
      })
      .catch((err) => {
        console.error(err);
        alert("Ошибка при отправке. Попробуйте позже.");
      })
      .finally(() => setLoading(false));
  };
  return (
    <section id="feedbackSection" className={styles.feedback}>
      <div className={styles.gridLines}>
        <div className={styles.vlineNoBorder}></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}
      </div>

      <div className={styles.container}>
        <h2 className={styles.title}>Заказать консультацию</h2>
        <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Имя / Компания"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <PhoneInput value={phone} onChange={setPhone} />
          <select name="client_type" required>
            <option value="">Тип клиента</option>
            <option value="Физлицо">Физлицо</option>
            <option value="ИП">ИП</option>
            <option value="ООО">ООО</option>
          </select>

          <input type="text" name="industry" placeholder="Сфера деятельности" />

          <select name="transactions_count" required>
            <option value="">Кол-во операций в месяц</option>
            <option value="До 10">До 10</option>
            <option value="10-50">10-50</option>
            <option value="50-200">50-200</option>
            <option value="200+">200+</option>
          </select>

          <textarea
            className={styles.inputMessage}
            name="message"
            placeholder="Комментарий"
            rows={1}
          />
          <div className={styles.feedbackButton}>
            <div className={styles.checkboxWrapper}>
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={() => setConsent(!consent)}
                  className={styles.checkboxInput}
                />
                <span className={styles.customCheckbox}></span>
                <span>
                  Подтверждаю согласие на обработку персональных данных.
                  Подробнее в{" "}
                  <a href="/privacy" className={styles.privacyLink}>
                    Политике конфиденциальности.
                  </a>
                </span>
              </label>
              {!consent && showError && (
                <span className={styles.errorMessage}>
                  Подтвердите согласие на обработку персональных данных!
                </span>
              )}
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? "Отправка..." : "Отправить заявку"}
              <ArrowRight />
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
