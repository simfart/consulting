import { FC } from "react";
import styles from "./Concepts.module.scss";
import {
  conceptImg,
  conceptImg2,
  conceptImg3,
  conceptImg4,
  conceptImg5,
  conceptImg6,
  conceptImg7,
  geographyImg,
} from "@/shared/images";

const servicesVariants = [
  {
    title: "Ведение бухгалтерского и налогового учёта",
    text: "Полный учёт всех операций, обработка первичных документов, расчёт налогов и формирование отчётности.",
    icon: conceptImg,
  },
  {
    title: "Подготовка и сдача отчётности",
    text: "Электронная подача деклараций и отчётов в ФНС, ПФР, ФСС и Росстат без рисков штрафов.",
    icon: conceptImg2,
  },
  {
    title: "Налоговое планирование и оптимизация",
    text: "Анализ налоговой нагрузки и законные методы снижения налогов.",
    icon: conceptImg3,
  },
  {
    title: "Бухгалтерские услуги для физических лиц",
    text: "Подготовка декларации 3-НДФЛ, консультации и возврат налоговых вычетов.",
    icon: conceptImg4,
  },
  {
    title: "Регистрация и ликвидация компаний",
    text: "Помощь в открытии и закрытии бизнеса, внесение изменений в учредительные документы, добавление и удаление ОКВЭДов..",
    icon: conceptImg5,
  },
  {
    title: "Кадровый учёт и зарплатные проекты",
    text: "Ведение личных дел сотрудников, расчёт зарплаты и подготовка кадровой документации.",
    icon: conceptImg6,
  },
  {
    title: "Консультации по бухгалтерии и финансам",
    text: "Экспертная поддержка по вопросам учёта, налогообложения и финансового планирования.",
    icon: conceptImg7,
  },
];

export const Concepts: FC = () => {
  return (
    <section className={styles.concepts}>
      <div className={styles.geographyImgWrapper}>
        <img
          className={styles.geographyImg}
          src={geographyImg}
          alt="geography"
        />
      </div>
      <div className={styles.gridLines}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}
        <div className={styles.content}>
          <div className={styles.contentText}>Наши услуги</div>
          <h2>Бухгалтерский консалтинг</h2>
          <p>
            Полный спектр бухгалтерских услуг и консультаций по налогам и
            финансам для бизнеса и частных клиентов. Мы работаем в Республике
            Крым (Симферополь, Севастополь, Ялта и другие города), а также в
            новых регионах РФ — Донецкой и Луганской Народных Республиках,
            Запорожской и Херсонской областях. Клиенты из любых регионов России
            получают профессиональную поддержку без ограничений по месту ведения
            бизнеса.
          </p>
        </div>
        <div className={styles.services}>
          {servicesVariants.map((service, index) => (
            <div
              key={index}
              className={`${styles.service} ${styles["service" + index]}`}
            >
              <div>
                <img src={service.icon} alt={service.title} />
              </div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.vline}></div>
        <div className={styles.vline}></div>
      </div>
    </section>
  );
};
