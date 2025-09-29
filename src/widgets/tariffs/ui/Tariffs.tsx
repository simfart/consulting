import { FC } from "react";
import styles from "./Tariffs.module.scss";

export const Tariffs: FC = () => {
  return (
    <section className={styles.tariffs}>
      <div className={styles.gridLines}>
        <div className={styles.vlineNoBorder}></div>
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className={styles.vline} />
        ))}
      </div>
      {/* Тариф Лайт */}
      <div className={styles.card}>
        <h2 className={styles.title}>Тариф Лайт</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.stickyCol} rowSpan={2}>
                Какие услуги включены в тариф
              </th>
              <th colSpan={3}>ИП</th>
              <th colSpan={3}>ООО</th>
            </tr>
            <tr>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.stickyCol}>Анализ предоставленной базы</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>Актуализация базы 1С</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>
                Загрузка и обработка выписок из банка
              </td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>
                Начисление ЗП директору (только оклад)
              </td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>Расчет налогов во все фонды</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>
                Подготовка и отправка отчетности
              </td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>Подготовка КУДиР</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
            </tr>
            <tr>
              <td className={styles.stickyCol}>Консультирование</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr className={styles.priceRow}>
              <td className={styles.stickyCol}>СТОИМОСТЬ ТАРИФА В МЕСЯЦ</td>
              <td>2 500</td>
              <td>4 000</td>
              <td>6 000</td>
              <td>4 000</td>
              <td>6 000</td>
              <td>8 000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Тариф Базовый */}
      <div className={styles.card}>
        <h2 className={styles.title}>Тариф Базовый</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th rowSpan={2}>Какие услуги включены в тариф</th>
              <th colSpan={3}>ИП</th>
              <th colSpan={3}>ООО</th>
            </tr>
            <tr>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Анализ предоставленной базы</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Актуализация базы 1С</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Загрузка и обработка выписок из банка</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Начисление ЗП до 3-х человек</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Расчет налогов во все фонды</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Подготовка и отправка отчетности</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Подготовка КУДиР</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Подготовка документов до 10 шт</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Оплата до 10 платежей</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Консультирование</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr className={styles.priceRow}>
              <td>СТОИМОСТЬ ТАРИФА В МЕСЯЦ</td>
              <td>7 000</td>
              <td>9 000</td>
              <td>11 000</td>
              <td>9 000</td>
              <td>14 000</td>
              <td>18 000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Тариф Максимальный */}
      <div className={styles.card}>
        <h2 className={styles.title}>Тариф Максимальный</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <th rowSpan={2}>Какие услуги включены в тариф</th>
              <th colSpan={3}>ИП</th>
              <th colSpan={3}>ООО</th>
            </tr>
            <tr>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
              <th>УСН доходы</th>
              <th>УСН дох-расх</th>
              <th>ОСНО</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Анализ предоставленной базы</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Актуализация базы 1С</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Загрузка и обработка выписок из банка</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Начисление ЗП до 5-ти человек</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Расчет налогов во все фонды</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Подготовка и отправка отчетности</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Подготовка КУДиР</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
              <td>+</td>
              <td>+</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Подготовка документов до 20 шт</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Оплата до 20 платежей</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr>
              <td>Консультирование</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
              <td>+</td>
            </tr>
            <tr className={styles.priceRow}>
              <td>СТОИМОСТЬ ТАРИФА В МЕСЯЦ</td>
              <td>15 000</td>
              <td>18 000</td>
              <td>25 000</td>
              <td>15 000</td>
              <td>20 000</td>
              <td>30 000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
