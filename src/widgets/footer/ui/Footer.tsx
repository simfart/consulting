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
                  <li>Главная</li>
                  <li>Стоимость услуг</li>
                </ul>
              </div>

              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Контакты</h4>
                <ul className={styles.footerList}>
                  <li>+7 (999) 123-45-67</li>
                  <li>info@consultpro.ru</li>
                  <li>Краснодар, ул. Примерная, 123</li>
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
