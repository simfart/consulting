import styles from "./+Page.module.scss";
import { HeroSection } from "@/widgets/hero-section";
import { AdvantageSection } from "@/widgets/advantage";
import { Feedback } from "@/widgets/feedback";
import { Concepts } from "@/widgets/concepts";
import { Prices } from "@/widgets/prices";

export default function HomePage() {
  return (
    <>
      <div className={styles.homePage}>
        <HeroSection />
        <AdvantageSection />
        <Concepts />
        <Prices />
        <Feedback />
      </div>
    </>
  );
}
