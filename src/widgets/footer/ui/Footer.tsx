import styles from "./Footer.module.scss";
import { logoImg } from "@/shared/images";
import { PhoneLink } from "@/shared/ui/Phone";
import { SocialIcons } from "@/shared/ui/SocialIcons";

export function Footer() {
  return (
    <footer
      className={styles.footer}
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className={styles.footerTop}>
        <div className={styles.footerContent}>
          <div className={styles.footerCompany}>
            <div className={styles.footerTitle}>
              <img
                src={logoImg}
                alt="Логотип КонсалтЦентр - бухгалтерские услуги"
                width="40"
                height="40"
                loading="lazy"
              />
              <h3 itemProp="name">Консалт</h3> <span>Центр</span>
            </div>
            <p className={styles.footerDescription} itemProp="description">
              Профессиональные консалтинговые услуги для вашего бизнеса
            </p>
          </div>
          <div className={styles.footerContainer}>
            <nav
              className={styles.footerSections}
              aria-label="Навигация по сайту"
            >
              <div className={styles.footerSection}>
                <h4>Разделы</h4>
                <ul className={styles.footerList}>
                  <li>
                    <a href="/" aria-label="Перейти на главную страницу">
                      Главная
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      aria-label="Перейти к услугам и тарифам"
                    >
                      Услуги и тарифы
                    </a>
                  </li>
                </ul>
              </div>

              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Контакты</h4>
                <address
                  className={styles.footerList}
                  itemProp="address"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <li>
                    <PhoneLink />
                  </li>
                  <li>
                    <a
                      href="mailto:info.consultcenter@yandex.ru"
                      itemProp="email"
                      aria-label="Написать на электронную почту"
                    >
                      info.consultcenter@ya.ru
                    </a>
                  </li>
                  <li itemProp="streetAddress">
                    Краснодар, ул.Карасунская, 60
                  </li>
                </address>
              </div>
            </nav>
          </div>
        </div>

        <div className={styles.vline}></div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          &copy; 2024 <span itemProp="name">КонсалтЦентр</span>. Все права
          защищены.
        </p>
        <div className={styles.vline}></div>
      </div>
    </footer>
  );
}
