import { FC } from "react";
import styles from "./Prices.module.scss";

const plans = [
  {
    title: "Лайт",
    deal: "Базовый учёт для уверенного старта",
    price: "2 500₽",
    features:
      "Минимальный набор услуг для старта бизнеса. Включает учёт операций, налоги, отчётность и консультации. Отлично подходит тем, кто хочет сэкономить и не переплачивать за лишнее.",
  },
  {
    title: "Базовый",
    deal: "Всё под контролем",
    price: "7 000₽",
    features:
      "Оптимальное решение для предпринимателей и компаний. Мы берём на себя бухгалтерию, отчётность и сопровождение, чтобы вы сосредоточились на развитии бизнеса.",
  },
  {
    title: "Максимальный",
    deal: "Максимум заботы о вашем бизнесе",
    price: "15 000₽",
    features:
      "Расширенный пакет для активного бизнеса. Подходит тем, кому нужен полный бухгалтерский сервис и постоянное сопровождение без ограничений.",
  },
];

export const Prices: FC = () => {
  return (
    <section className={styles.prices}>
      <div className={styles.gridLines}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}
      </div>
      <div className={styles.priceContent}>
        <div className={styles.priceTitle}>
          <div className={styles.priceSubtitle}>Начните с удобного пакета</div>
          <h2>Выгодные тарифы для вашего бизнеса</h2>
        </div>

        <div className={styles.pricesCards}>
          {plans.map((plan, index) => (
            <div key={index} className={styles.priceCard}>
              <span className={styles.deal}>{plan.deal}</span>
              <h3>{plan.title}</h3>
              <div className={styles.amount}>
                <span>от</span>
                {plan.price}
              </div>
              <p className={styles.features}>{plan.features}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
