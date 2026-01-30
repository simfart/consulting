import styles from "./+Page.module.scss";

export default function Page404() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Упс! Что-то пошло не так.</p>
      <a href="/" className={styles.button}>
        <i className={styles.iconHome}></i> Вернуться на главную
      </a>
    </section>
  );
}
