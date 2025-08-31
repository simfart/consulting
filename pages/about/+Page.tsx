import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui";
import styles from "./+Page.module.scss";

const team = [
  {
    name: "Анна Петрова",
    position: "Генеральный директор",
    experience: "15 лет опыта в консалтинге",
    avatar: "👩‍💼",
  },
  {
    name: "Михаил Сидоров",
    position: "Руководитель отдела стратегии",
    experience: "12 лет в стратегическом планировании",
    avatar: "👨‍💼",
  },
  {
    name: "Елена Козлова",
    position: "Финансовый консультант",
    experience: "10 лет в финансовом консалтинге",

    avatar: "👩‍💻",
  },
  {
    name: "Дмитрий Волков",
    position: "Консультант по оптимизации",
    experience: "8 лет в управленческом консалтинге",
    avatar: "👨‍💻",
  },
];

const values = [
  {
    title: "Профессионализм",
    description: "Высокие стандарты качества и глубокие знания в своей области",
    icon: "🎯",
  },
  {
    title: "Индивидуальный подход",
    description:
      "Каждый клиент уникален, и мы разрабатываем решения под конкретные задачи",
    icon: "🤝",
  },
  {
    title: "Результативность",
    description:
      "Фокусируемся на достижении измеримых результатов для наших клиентов",
    icon: "📈",
  },
  {
    title: "Инновации",
    description:
      "Используем современные методики и технологии для решения задач",
    icon: "💡",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className={styles.aboutPage}>
        <h2>тут будут цены</h2>
        {/* Hero Section */}
        {/* <section className={styles.hero}>
          <div className='container'>
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>О компании КонсалтПро</h1>
              <p className={styles.heroSubtitle}>
                Мы - команда профессионалов, которая помогает бизнесу расти и
                развиваться
              </p>
            </div>
          </div>
        </section> */}

        {/* Mission Section */}
        {/* <section className={`section ${styles.missionSection}`}>
          <div className='container'>
            <div className={styles.missionContent}>
              <div className={styles.missionText}>
                <h2 className='sectionTitle'>Наша миссия</h2>
                <p className={styles.missionDescription}>
                  Мы стремимся быть надежным партнером для компаний, которые
                  хотят развиваться и достигать новых высот. Наша миссия -
                  предоставлять экспертные консультации, которые приводят к
                  реальным, измеримым результатам.
                </p>
                <p className={styles.missionDescription}>
                  За 10 лет работы мы помогли более 150 компаниям различных
                  отраслей оптимизировать процессы, увеличить прибыль и
                  выстроить эффективные стратегии развития.
                </p>
              </div>
              <div className={styles.missionStats}>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>10+</div>
                  <div className={styles.statLabel}>Лет опыта</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>150+</div>
                  <div className={styles.statLabel}>Проектов</div>
                </div>
                <div className={styles.stat}>
                  <div className={styles.statNumber}>95%</div>
                  <div className={styles.statLabel}>Успешных проектов</div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Values Section */}
        {/* <section className={`section ${styles.valuesSection}`}>
          <div className='container'>
            <h2 className='sectionTitle'>Наши ценности</h2>
            <p className='sectionSubtitle'>
              Принципы, которые лежат в основе нашей работы
            </p>

            <div className={styles.valuesGrid}>
              {values.map((value, index) => (
                <Card key={index} className={styles.valueCard}>
                  <div className={styles.valueIcon}>{value.icon}</div>
                  <h3 className={styles.valueTitle}>{value.title}</h3>
                  <p className={styles.valueDescription}>{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Team Section */}
        {/* <section className={`section ${styles.teamSection}`}>
          <div className='container'>
            <h2 className='sectionTitle'>Наша команда</h2>
            <p className='sectionSubtitle'>
              Опытные профессионалы с глубокими знаниями в своих областях
            </p>

            <div className={styles.teamGrid}>
              {team.map((member, index) => (
                <Card key={index} className={styles.teamCard}>
                  <div className={styles.memberAvatar}>{member.avatar}</div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberPosition}>{member.position}</p>
                  <p className={styles.memberExperience}>{member.experience}</p>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* CTA Section */}
        {/* <section className={`section ${styles.ctaSection}`}>
          <div className='container'>
            <div className={styles.ctaContent}>
              <h2 className={styles.ctaTitle}>Готовы начать работу с нами?</h2>
              <p className={styles.ctaDescription}>
                Свяжитесь с нами для получения персональной консультации
              </p>
              <Button size='large' className={styles.ctaButton}>
                Связаться с нами
              </Button>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
