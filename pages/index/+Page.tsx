import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui";
import styles from "./+Page.module.scss";
import { HeroSection } from "@/widgets/hero-section";
import { AdvantageSection } from "@/widgets/advantage";
import { Feedback } from "@/widgets/feedback";

const services = [
  {
    title: "Стратегическое планирование",
    description: "Разрабатываем долгосрочные стратегии развития вашего бизнеса",
    icon: "📊",
  },
  {
    title: "Оптимизация процессов",
    description: "Повышаем эффективность бизнес-процессов и снижаем затраты",
    icon: "⚡",
  },
  {
    title: "Финансовый консалтинг",
    description: "Помогаем оптимизировать финансовую структуру компании",
    icon: "💰",
  },
  {
    title: "Управленческий консалтинг",
    description: "Улучшаем систему управления и повышаем производительность",
    icon: "🎯",
  },
];

export default function HomePage() {
  return (
    <>
      <div className={styles.homePage}>
        <HeroSection />
        <AdvantageSection />
        <Feedback />

        {/* Hero Section */}
        {/* <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Профессиональные консалтинговые услуги
              </h1>
              <p className={styles.heroSubtitle}>
                Помогаем бизнесу расти и развиваться с помощью экспертных
                решений и проверенных стратегий
              </p>
              <div className={styles.heroButtons}>
                <Button size="large" className={styles.primaryButton}>
                  Получить консультацию
                </Button>
                <Button
                  variant="outline"
                  size="large"
                  className={styles.secondaryButton}
                >
                  Узнать больше
                </Button>
              </div>
            </div>
          </div>
        </section> */}

        {/* Services Section */}
        {/* <section className={`section ${styles.servicesSection}`}>
          <div className="container">
            <h2 className="sectionTitle">Наши услуги</h2>
            <p className="sectionSubtitle">
              Предлагаем комплексные решения для развития вашего бизнеса
            </p>

            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <Card key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{service.icon}</div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>
                    {service.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* About Section */}
        {/* <section className={`section ${styles.aboutSection}`}>
          <div className="container">
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2 className="sectionTitle">О компании</h2>
                <p className={styles.aboutDescription}>
                  КонсалтПро - это команда опытных профессионалов,
                  специализирующихся на стратегическом консалтинге и оптимизации
                  бизнес-процессов. Мы помогаем компаниям любого размера
                  достигать новых высот и преодолевать вызовы современного
                  рынка.
                </p>
                <Button size="large" className={styles.aboutButton}>
                  Узнать больше о нас
                </Button>
              </div>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Довольных клиентов</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Лет опыта</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Успешных проектов</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
