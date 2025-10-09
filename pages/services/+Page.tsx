import { TariffAddOns } from "@/widgets/tariffAddOns";
import styles from "./+Page.module.scss";
import { Tariffs } from "@/widgets/tariffs";
import { useScrollToAnchor } from "@/shared/hooks/useScrollToAnchor";

export default function ServicesPage() {
  useScrollToAnchor();
  return (
    <>
      <div className={styles.aboutPage}>
        <div className={styles.gridLines}>
          <div className={styles.vlineNoBorder}></div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className={styles.vline} />
          ))}
        </div>
        <Tariffs />
        <TariffAddOns />
      </div>
    </>
  );
}
