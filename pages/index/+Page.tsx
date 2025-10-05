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

// SEO мета-данные для главной страницы

export const meta = {
  title:
    "Бухгалтерские услуги по всей РФ, в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях – ИП, ООО, самозанятые",
  description:
    "Профессиональные бухгалтерские услуги для ИП, ООО и самозанятых по всей РФ, а также в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях. Полное ведение учета, сдача отчетности, налоговые консультации. Опыт более 10 лет. Звоните: +7 (915) 939-18-13",
  keywords:
    "бухгалтерские услуги РФ, бухгалтерские услуги Крым, бухгалтер Севастополь, ведение учета ИП РФ, бухгалтерские услуги ООО РФ, самозанятые ЛДНР, бухгалтерские услуги Херсон, бухгалтер Запорожье, сдача отчетности РФ, налоговый учет, консалтинг",
  ogTitle:
    "Бухгалтерские услуги по всей РФ, в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях",
  ogDescription:
    "Бухгалтерские услуги для ИП, ООО и самозанятых по всей РФ, а также в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях. Полное ведение учета и сдача отчетности.",
  ogImage: "https://consultcenter.ru/images/og-image.jpg",
  twitterTitle:
    "Бухгалтерские услуги по всей РФ, в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях",
  twitterDescription:
    "Бухгалтерские услуги для ИП, ООО и самозанятых по всей РФ, а также в Крыму, Севастополе, ЛДНР, Херсонской и Запорожской областях. Полное ведение учета и сдача отчетности.",
  twitterImage: "https://consultcenter.ru/images/twitter-image.jpg",
};
