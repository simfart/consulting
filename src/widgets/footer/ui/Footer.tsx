import React from "react";
import styles from "./Footer.module.scss";
import { logoImg } from "@/shared/images";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.footerContent}>
          <div className={styles.footerCompany}>
            <div className={styles.footerTitle}>
              <img src={logoImg} alt="logo" />
              <h3>Консалт</h3> <span>Центр</span>
            </div>
            <p className={styles.footerDescription}>
              Профессиональные консалтинговые услуги для вашего бизнеса
            </p>
          </div>
          <div className={styles.footerContainer}>
            <div className={styles.footerSections}>
              <div className={styles.footerSection}>
                <h4>Разделы</h4>
                <ul className={styles.footerList}>
                  <li>
                    <a href="/">Главная</a>
                  </li>
                  <li>
                    <a href="/services">Услуги и тарифы</a>
                  </li>
                </ul>
              </div>

              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Контакты</h4>
                <ul className={styles.footerList}>
                  <li>
                    <a href="tel:+79991234567">+7 (915) 939-18-13</a>
                  </li>
                  <li>
                    <a href="mailto:info.consultcenter@yandex.ru">
                      info.consultcenter@ya.ru
                    </a>
                  </li>

                  <li>Краснодар, ул.Карасунская, 60</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.vline}></div>
      </div>

      <div className={styles.footerBottom}>
        <p>&copy; 2024 КонсалтЦентр. Все права защищены.</p>
        <div className={styles.vline}></div>
      </div>
    </footer>
  );
}
