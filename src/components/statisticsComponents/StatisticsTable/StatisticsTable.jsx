// import { lazy } from "react";

// const {StatsTableRow} = lazy(() => import("../StatsTableRow/StatsTableRow"));
// const {StatisticsDashboard} = lazy(() => import("../StatisticsDashboard/StatisticsDashboard"));

import { StatsTableRow } from "../StatsTableRow/StatsTableRow";
import s from "./StatisticsTable.module.css";

// import data from '../devData.json';
import { selectPeriodTransactions } from "../../../redux/transactions/selector";
import { useSelector } from "react-redux";
import { formatNumber } from "../numbersFormatting";

export const StatisticsTable = () => {
  const data = useSelector(selectPeriodTransactions);

  if (!data.categoriesSummary || !data.categoriesSummary.length)
    return <p>No data for this period</p>;

  return (
    <div className={s.wrapper}>
      <div className={s.table}>
        <div className={s.tableHead}>
          <p className={s.tableHeading}>Category</p>
          <p className={s.tableHeading}>Sum</p>
        </div>
        <div className={s.scrollable}>
          <ul className={s.tableBody}>
            {data.categoriesSummary.map((e) => {
              if (e.total < 0)
                return (
                  <StatsTableRow
                    category={e.name}
                    amount={(e.total * -1).toFixed(2)}
                    key={data.categoriesSummary.indexOf(e)}
                  />
                );
            })}
          </ul>
          <div className={s.summary}>
            <div className={s.summaryRow}>
              <p className={s.summaryText}>Expenses:</p>
              <p className={s.expenseAmount}>
                {formatNumber(data.expenseSummary)}
              </p>
            </div>
            <div className={s.summaryRow}>
              <p className={s.summaryText}>Income:</p>
              <p className={s.incomeAmount}>
                {formatNumber(data.incomeSummary)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
