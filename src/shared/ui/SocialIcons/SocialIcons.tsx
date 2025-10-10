import { WhatsApp, VK, Telegram } from "@/shared/ui";
import styles from "./SocialIcons.module.scss";

interface SocialIconsProps {
  showText?: boolean;
  variant?: "default" | "header";
}

export function SocialIcons({
  showText = true,
  variant = "default",
}: SocialIconsProps) {
  const iconSize = variant === "header" ? 28 : 28;

  return (
    <div className={styles.socialIconsContainer}>
      <div className={styles.socialIcons}>
        <a
          href="https://t.me/buhcentr24"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти в Telegram канал"
          className={`${styles.socialIcon} ${
            variant === "header" ? styles.socialIconHeader : ""
          }`}
        >
          <Telegram width={iconSize} height={iconSize} />
        </a>
        <a
          href="https://wa.me/79159391813"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className={`${styles.socialIcon} ${
            variant === "header" ? styles.socialIconHeader : ""
          }`}
        >
          <WhatsApp width={iconSize} height={iconSize} />
        </a>
        <a
          href="https://vk.com/consultnews"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Перейти в группу ВКонтакте"
          className={`${styles.socialIcon} ${
            variant === "header" ? styles.socialIconHeader : ""
          }`}
        >
          <VK width={iconSize} height={iconSize} />
        </a>
      </div>
      {showText && <p className={styles.followText}>ОСТАВАЙТЕСЬ НА СВЯЗИ</p>}
    </div>
  );
}
