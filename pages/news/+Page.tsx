import React from "react";
import { Button } from "@/shared/ui";
import { Card } from "@/shared/ui";
import styles from "./+Page.module.scss";

const news = [
  {
    id: 1,
    title: "Новые тренды в стратегическом планировании на 2024 год",
    excerpt:
      "Анализируем основные изменения в подходах к стратегическому планированию и их влияние на бизнес-процессы.",
    date: "15 января 2024",
    category: "Стратегия",
    image: "📊",
    readTime: "5 мин",
  },
  {
    id: 2,
    title: "Как оптимизировать финансовые процессы в условиях кризиса",
    excerpt:
      "Практические рекомендации по повышению эффективности финансового управления в нестабильных экономических условиях.",
    date: "10 января 2024",
    category: "Финансы",
    image: "💰",
    readTime: "7 мин",
  },
  {
    id: 3,
    title: "Цифровая трансформация: ключевые этапы внедрения",
    excerpt:
      "Пошаговое руководство по успешной цифровой трансформации компании с минимальными рисками.",
    date: "5 января 2024",
    category: "Инновации",
    image: "🚀",
    readTime: "8 мин",
  },
  {
    id: 4,
    title: "Управление изменениями: как преодолеть сопротивление команды",
    excerpt:
      "Эффективные методы управления изменениями и преодоления сопротивления персонала при внедрении новых процессов.",
    date: "30 декабря 2023",
    category: "Управление",
    image: "👥",
    readTime: "6 мин",
  },
  {
    id: 5,
    title: "Анализ эффективности: метрики, которые действительно важны",
    excerpt:
      "Обзор ключевых показателей эффективности, которые помогают принимать обоснованные управленческие решения.",
    date: "25 декабря 2023",
    category: "Аналитика",
    image: "📈",
    readTime: "9 мин",
  },
  {
    id: 6,
    title: "Клиентоориентированность: от стратегии к практике",
    excerpt:
      "Как внедрить клиентоориентированный подход во все аспекты бизнеса и повысить удовлетворенность клиентов.",
    date: "20 декабря 2023",
    category: "Маркетинг",
    image: "🎯",
    readTime: "6 мин",
  },
];

const categories = [
  "Все",
  "Стратегия",
  "Финансы",
  "Инновации",
  "Управление",
  "Аналитика",
  "Маркетинг",
];

export default function NewsPage() {
  return (
    <>
      <div className={styles.newsPage}>
        <h2> А тут будут новости</h2>
        {/* Hero Section */}
        {/* <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>Новости и статьи</h1>
              <p className={styles.heroSubtitle}>
                Актуальные материалы от наших экспертов о трендах в консалтинге и управлении бизнесом
              </p>
            </div>
          </div>
        </section> */}

        {/* Categories Filter */}
        {/* <section className={styles.categoriesSection}>
          <div className="container">
            <div className={styles.categoriesFilter}>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`${styles.categoryButton} ${category === 'Все' ? styles.active : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section> */}

        {/* News Grid */}
        {/* <section className={`section ${styles.newsSection}`}>
          <div className="container">
            <div className={styles.newsGrid}>
              {news.map((article) => (
                <Card key={article.id} className={styles.newsCard}>
                  <div className={styles.articleImage}>{article.image}</div>
                  <div className={styles.articleContent}>
                    <div className={styles.articleMeta}>
                      <span className={styles.articleCategory}>{article.category}</span>
                      <span className={styles.articleDate}>{article.date}</span>
                      <span className={styles.articleReadTime}>{article.readTime}</span>
                    </div>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                    <Button variant="outline" size="small" className={styles.readMoreButton}>
                      Читать далее
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section> */}

        {/* Newsletter Section */}
        {/* <section className={`section ${styles.newsletterSection}`}>
          <div className="container">
            <div className={styles.newsletterContent}>
              <h2 className={styles.newsletterTitle}>Подпишитесь на наши новости</h2>
              <p className={styles.newsletterDescription}>
                Получайте актуальные материалы и экспертные мнения прямо на вашу почту
              </p>
              <div className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className={styles.newsletterInput}
                />
                <Button size="large" className={styles.newsletterButton}>
                  Подписаться
                </Button>
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
}
