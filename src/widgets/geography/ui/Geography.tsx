import { FC } from "react";
import styles from "./Geography.module.scss";
import { geographyImg } from "@/shared/images";

const geographyVariants = [
  { text: "Республика Крым (Симферополь, Севастополь, Ялта и др.)" },
  { text: "Донецкая Народная Республика" },
  { text: "Луганская Народная Республика" },
  { text: "Запорожская область" },
  { text: "Херсонская область" },
  { text: "Обслуживание клиентов по всей территории РФ" },
];

export const Geography: FC = () => {
  return (
    <section className={styles.geography}>
      <div className={styles.geographyImgWrapper}>
        <img
          className={styles.geographyImg}
          src={geographyImg}
          alt="geography"
        />
      </div>
      <div className={styles.gridLines}>
        {Array.from({ length: 22 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}

        <div className={styles.geographyTextBlock}>
          <div className={styles.geographyContent}>
            <p>География обслуживания</p>
            <h2>Работаем с бизнесом в Крыму и новых регионах РФ</h2>
          </div>
        </div>

        {geographyVariants.map((variant, index) => (
          <div
            key={index}
            className={`${styles.geographyVariant} ${
              styles["geographyVariant" + index]
            }`}
          >
            <p className={styles.geographyText}>{variant.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
