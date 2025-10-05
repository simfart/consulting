import { FC } from "react";
import styles from "./TariffAddOns.module.scss";

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
      {/* <div className={styles.tariffAddOnsList}>
        <div className={styles.tariffAddOnsItem}>
          <h3>Услуга 1</h3>
          <p>Описание услуги 1</p>
        </div>
      </div> */}
    </section>
  );
};
