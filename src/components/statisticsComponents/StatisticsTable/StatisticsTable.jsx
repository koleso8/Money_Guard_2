// import { lazy } from "react";

// const {StatsTableRow} = lazy(() => import("../StatsTableRow/StatsTableRow"));
// const {StatisticsDashboard} = lazy(() => import("../StatisticsDashboard/StatisticsDashboard"));

import { StatsTableRow } from '../StatsTableRow/StatsTableRow';
import s from './StatisticsTable.module.css';

import data from '../devData.json';

export const StatisticsTable = () => {
  function prettifyNumbersInt(number) {
    // Inserts spaces: 4600000 -> 4 600 000
    number = number + '';
    let str = number.slice(-3);
    for (let i = number.length - 3; i > -1; i = i - 3) {
      if (i - 3 > -1) {
        str = number.slice(i - 3, i) + ' ' + str;
      } else {
        str = number.slice(0, i) + ' ' + str;
        break;
      }
    }
    return str;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.table}>
        <div className={s.tableHead}>
          <p className={s.tableHeading}>Category</p>
          <p className={s.tableHeading}>Sum</p>
        </div>
        <ul className={s.tableBody}>
          {data.categoriesSummary.map(e => {
            return (
              <StatsTableRow
                category={e.name}
                amount={e.total.toFixed(2)}
                key={data.categoriesSummary.indexOf(e)}
              />
            );
          })}
        </ul>
      </div>
      <div className={s.summary}>
        <div className={s.summaryRow}>
          <p className={s.summaryText}>Expenses:</p>
          <p className={s.expenseAmount}>
            {prettifyNumbersInt(data.expenseSummary)}
          </p>
        </div>
        <div className={s.summaryRow}>
          <p className={s.summaryText}>Income:</p>
          <p className={s.incomeAmount}>
            {prettifyNumbersInt(data.incomeSummary)}
          </p>
        </div>
      </div>
    </div>
  );
};
