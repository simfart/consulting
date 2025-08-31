import { FC } from "react";
import styles from "./AdvantageSection.module.scss";
import { advantageImg } from "@/shared/images/figma";
import { Button } from "@/shared/ui";

export const AdvantageSection: FC = () => {
  return (
    <section className={styles.advantageSection}>
      {/* Колоночная сетка*/}
      <div className={styles.gridLines}>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>
        <div className={styles.col}></div>

        <div className={styles.advantageImg}>
          <img src={advantageImg} alt="advantage" />
        </div>

        <div className={styles.darkBlock1}></div>
        <div className={styles.darkBlock2}></div>
        <div className={styles.darkBlock3}></div>

        <div className={styles.textContent}>
          <div className={styles.category}>
            Бухгалтерия без лишних затрат и привязки к офису
          </div>
          <h2 className={styles.headline}>
            Профессиональные бухгалтерские услуги для ИП и ООО
          </h2>
          <p className={styles.description}>
            Оказываем полный спектр бухгалтерских услуг для бизнеса: ведение
            учёта, подготовка и сдача отчётности, налоговое планирование и
            консультации. Наши специалисты следят за сроками, нормативами и
            изменениями в законодательстве, чтобы вы могли спокойно заниматься
            бизнесом. Прозрачно, точно и без лишних затрат — мы берём
            бухгалтерию на себя.
          </p>
          <Button variant="hero">Оставить заявку</Button>
        </div>
      </div>
      <div className={styles.accentBlock}></div>
      <div className={`${styles.col} ${styles.colLast}`}></div>
    </section>
  );
};
