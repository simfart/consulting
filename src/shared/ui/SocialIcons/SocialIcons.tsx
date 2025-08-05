import { WhatsApp, VK, Telegram } from "@/shared/ui";
import styles from "./SocialIcons.module.scss";

export function SocialIcons() {
  return (
    <div className={styles.socialIconsContainer}>
      <div className={styles.socialIcons}>
        <div className={styles.socialIcon}>
          <Telegram />
        </div>
        <div className={styles.socialIcon}>
          <WhatsApp />
        </div>
        <div className={styles.socialIcon}>
          <VK />
        </div>
      </div>
      <p className={styles.followText}>ОСТАВАЙТЕСЬ НА СВЯЗИ</p>
    </div>
  );
}
