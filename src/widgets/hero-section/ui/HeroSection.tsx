import styles from "./HeroSection.module.scss";
import { heroImage1, heroImage2, heroImageMain } from "@/shared/images/figma";
import { ArrowRight, SocialIcons } from "@/shared/ui";

export function HeroSection() {
  return (
    <section className={styles.heroSection}>
      {/* Пустой блок слева */}
      <div className={styles.leftSection}></div>

      {/* Основная сетка изображений */}
      <div className={styles.heroRectangles}>
        {/* Rectangle 56 - нижний левый */}
        <div className={styles.rectangle56}>
          <img src={heroImage1} alt="Business meeting" />
        </div>

        {/* Rectangle 58 - верхний средне-левый (коричневый блок) */}
        <div className={styles.rectangle58}></div>

        {/* Rectangle 59 - нижний правый */}
        <div className={styles.rectangle59}>
          <img src={heroImage2} alt="Marketing analytics" />
        </div>

        {/* Rectangle 57 - центральное большое изображение */}
        <div className={styles.rectangle57}>
          <img src={heroImageMain} alt="Marketing consultant working" />
        </div>
      </div>

      {/* Социальные иконки справа */}
      <div className={styles.socialSection}>
        <SocialIcons />
      </div>

      {/* Центральный контент */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Бухгалтерские услуги
          <br />
          для ИП, ООО и самозанятых
        </h1>
        <button className={styles.heroButton}>
          <span>Подробнее</span>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
