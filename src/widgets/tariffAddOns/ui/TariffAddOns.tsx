import { FC } from "react";
import styles from "./TariffAddOns.module.scss";
import { serviceCategories } from "./ServicesList";
import { Button } from "@/shared/ui";
import { phoneIconPrimary } from "@/shared/images";

export const TariffAddOns: FC = () => {
  return (
    <section className={styles.tariffAddOns}>
      <div className={styles.tariffsHeading}>
        <div className={styles.tariffsHeadingText}>
          Дополнения к основному тарифу
        </div>
        <h2>Выбирайте услуги по вашим задачам</h2>
        <p>
          Подключайте дополнительные услуги к вашему тарифу, чтобы решить
          конкретные бухгалтерские и юридические задачи.
        </p>
      </div>
      <div className={styles.tariffAddOnsList}>
        <div className={styles.services}>
          {serviceCategories.map((category, index) => (
            <div key={index} className={styles.category}>
              <div className={styles.categoryTitle}>
                <img src={category.image} alt="triangle" />
                <div className={styles.categoryDescription}>
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
              </div>

              <div className={styles.table}>
                {category.services.map((service, i) => (
                  <div key={i} className={styles.row}>
                    <div className={styles.name}>{service.name}</div>
                    <div className={styles.price}>{service.price}</div>
                  </div>
                ))}
              </div>

              <div className={styles.buttons}>
                <Button
                  variant="hero"
                  onClick={() => {
                    window.location.href = "/#feedbackSection";
                  }}
                >
                  Заказать услугу
                </Button>
                <Button
                  variant="light"
                  onClick={() => {
                    window.location.href = "tel:+79159391813";
                  }}
                >
                  <img
                    className={styles.orderIcon}
                    src={phoneIconPrimary}
                    alt="order"
                  />
                  Позвонить
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
