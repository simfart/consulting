import { FC } from "react";
import styles from "./Geography.module.scss";
import { geographyImg } from "@/shared/images";

export const Geography: FC = () => {
  return (
    <section className={styles.geography}>
      <div className={styles.gridLines}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}
        <div className={styles.geographyImgWrapper}>
          <img
            className={styles.geographyImg}
            src={geographyImg}
            alt="geography"
          />
        </div>
        <div className={styles.textBlock}>
          <h2>Заголовок</h2>
          <p>Текст поверх сетки и изображения</p>
        </div>
      </div>
    </section>
  );
};
