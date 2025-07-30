import React from 'react'
import styles from './Footer.module.scss'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3 className={styles.footerTitle}>КонсалтПро</h3>
            <p className={styles.footerDescription}>
              Профессиональные консалтинговые услуги для вашего бизнеса
            </p>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Услуги</h4>
            <ul className={styles.footerList}>
              <li>Стратегическое планирование</li>
              <li>Оптимизация процессов</li>
              <li>Финансовый консалтинг</li>
              <li>Управленческий консалтинг</li>
            </ul>
          </div>
          
          <div className={styles.footerSection}>
            <h4 className={styles.footerSubtitle}>Контакты</h4>
            <ul className={styles.footerList}>
              <li>+7 (999) 123-45-67</li>
              <li>info@consultpro.ru</li>
              <li>Москва, ул. Примерная, 123</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; 2024 КонсалтПро. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
} 