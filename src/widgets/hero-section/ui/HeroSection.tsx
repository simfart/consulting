import { FC } from "react";
import { heroImage1, heroImage2, heroImageMain } from "@/shared/images/figma";
import { ArrowRight, SocialIcons } from "@/shared/ui";
import styles from "./HeroSection.module.scss";

export const HeroSection: FC = () => {
  return (
    <section className={styles.heroSection}>
      {/* Основная сетка изображений */}
      <div className={styles.heroRectangles}>
        <div className={styles.topLeftSection}></div>
        <div className={styles.bottomLeftSection}>
          <img src={heroImage1} alt="Business meeting" />
        </div>
        <div className={styles.middleLeftSection}></div>

        <div className={styles.bottomRightSection}>
          <img src={heroImage2} alt="Marketing analytics" />
        </div>

        <div className={styles.middleSection}>
          <img src={heroImageMain} alt="Marketing consultant working" />
        </div>

        <div className={styles.socialSection}>
          <SocialIcons />
        </div>
      </div>

      {/* Центральный контент */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Бухгалтерские услуги
          <br />
          для ИП, ООО и самозанятых
        </h1>
        <button
          className={styles.heroButton}
          onClick={() =>
            document
              .getElementById("advantageSection")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <span>Подробнее</span>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};
