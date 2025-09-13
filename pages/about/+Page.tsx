import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui";
import styles from "./+Page.module.scss";
import { Tariffs } from "@/widgets/tariffs";

export default function AboutPage() {
  return (
    <>
      <div className={styles.aboutPage}>
       <Tariffs />
      </div>
    </>
  );
}
