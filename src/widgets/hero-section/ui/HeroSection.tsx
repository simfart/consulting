import { FC, useEffect } from "react";
import { heroImage1, heroImage2, heroImageMain } from "@/shared/images/figma";
import { ArrowRight, SocialIcons, ScreenReaderOnly } from "@/shared/ui";
import styles from "./HeroSection.module.scss";

export const HeroSection: FC = () => {
  useEffect(() => {
    const heroBg = document.querySelector<HTMLElement>(`.${styles.heroBg}`);
    if (!heroBg) return;

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = heroBg.parentElement!.getBoundingClientRect();
          const offset = Math.min(
            (window.scrollY - rect.top) * 0.2,
            rect.height * 0.3
          );
          heroBg.style.transform = `translateY(${offset}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={styles.heroSection}
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Основная сетка изображений */}
      <div className={styles.heroRectangles}>
        <div className={styles.topLeftSection}></div>
        <div className={styles.bottomLeftSection}>
          <img
            src={heroImage1}
            alt="Деловая встреча с клиентом по бухгалтерским услугам"
            loading="lazy"
            width="300"
            height="200"
          />
        </div>
        <div className={styles.middleLeftSection}></div>
        <div className={styles.bottomRightSection}>
          <img
            src={heroImage2}
            alt="Анализ финансовой отчетности и ведение учета"
            loading="lazy"
            width="300"
            height="200"
          />
        </div>
        <div className={styles.middleSection}>
          <img
            src={heroImageMain}
            alt="Бухгалтер за работой с документами и компьютером"
            loading="lazy"
            width="400"
            height="300"
          />
        </div>
        <div className={styles.socialSection}>
          <SocialIcons />
        </div>
      </div>

      {/* Центральный контент с фоном */}
      <div className={styles.heroContent}>
        <div
          className={styles.heroBg}
          style={{ backgroundImage: `url(${heroImageMain})` }}
          aria-hidden="true"
        ></div>

        <header>
          <h1 className={styles.heroTitle} itemProp="name">
            Бухгалтерские услуги
            <br />
            для ИП, ООО и самозанятых
          </h1>
        </header>

        <ScreenReaderOnly>
          <div itemProp="description">
            Профессиональные бухгалтерские услуги в Краснодаре для
            индивидуальных предпринимателей, обществ с ограниченной
            ответственностью и самозанятых граждан. Полное ведение учета, сдача
            отчетности, консультации по налогообложению.
          </div>
        </ScreenReaderOnly>

        <button
          className={styles.heroButton}
          onClick={() =>
            document
              .getElementById("conceptsSection")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          aria-label="Перейти к подробной информации об услугах"
        >
          <span>Подробнее</span>
          <ArrowRight />
        </button>
      </div>
    </section>
  );
};
