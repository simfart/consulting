import styles from "./+Page.module.scss";
import { HeroSection } from "@/widgets/hero-section";
import { AdvantageSection } from "@/widgets/advantage";
import { Feedback } from "@/widgets/feedback";
import { Concepts } from "@/widgets/concepts";
import { Prices } from "@/widgets/prices";
import { StructuredData } from "@/shared/components/StructuredData";

export default function HomePage() {
  return (
    <>
      <StructuredData type="organization" data={{}} />
      <StructuredData type="localBusiness" data={{}} />
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
