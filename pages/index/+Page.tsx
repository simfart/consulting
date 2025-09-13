import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui";
import styles from "./+Page.module.scss";
import { HeroSection } from "@/widgets/hero-section";
import { AdvantageSection } from "@/widgets/advantage";
import { Feedback } from "@/widgets/feedback";
import { Concepts } from "@/widgets/concepts";
import { Prices } from "@/widgets/prices";
import { Footer } from "@/widgets/footer";

export default function HomePage() {
  return (
    <>
      <div className={styles.homePage}>
        <HeroSection />
        <AdvantageSection />

        <Concepts />
        <Prices />
        <Feedback />
        <Footer />
      </div>
    </>
  );
}
