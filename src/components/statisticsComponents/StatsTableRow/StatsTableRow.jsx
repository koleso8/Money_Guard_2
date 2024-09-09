import s from "../StatisticsTable/StatisticsTable.module.css";
import { formatNumber } from "../numbersFormatting";

export const StatsTableRow = ({ category, amount }) => {
  return (
    <li className={s.tableRowWrapper}>
      <div className={s.tableRow}>
        <div className={s.categoryAndLabel}>
          <div
            className={`${s.colorBar} ${s[category.replace(" ", "_")]}`}
          ></div>
          <p className={s.categoryName}>{category}</p>
        </div>
        <p className={s.amount}>{formatNumber(amount)}</p>
      </div>
    </li>
  );
};
