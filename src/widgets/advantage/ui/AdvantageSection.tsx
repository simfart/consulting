import { FC } from "react";
import styles from "./AdvantageSection.module.scss";

export const AdvantageSection: FC = () => {
  return (
    <section className={styles.advantageSection}>
      {/* Колоночная сетка (можно убрать потом) */}
      <div className={styles.gridLines}>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>

        {/* Основной контент */}
        <div className={styles.textContent}>
          <div className={styles.category}>OUR PREMISES</div>
          <h2 className={styles.headline}>
            Helping clients achieve a competitive advantage
          </h2>
          <p className={styles.description}>
            Aliquam aliquet duis odio diam malesuada amet vel neque. Malesuada
            mi cum ibendum. Ultrices ultrices orci proin sit mauris diam a dolor
            diam. Nisl a arcu placerat tellus at vitae non turpis. Nisi
            pellentesque felis nulla eros.
          </p>
          <button className={styles.ctaButton}>
            View more <span className={styles.arrow}>→</span>
          </button>
        </div>
      </div>
      <div className={styles.accentBlock}></div>
    </section>
  );
};
