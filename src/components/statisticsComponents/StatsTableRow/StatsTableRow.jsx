import s from "../StatisticsTable/StatisticsTable.module.css";

export const StatsTableRow = ({ category, amount }) => {
  function prettifyNumbersFixed(number) {
    // Inserts spaces: 4600000.50 -> 4 600 000.50
    number = number + "";
    let str = number.slice(-6);
    for (let i = number.length - 6; i > -1; i = i - 3) {
      if (i - 3 > -1) {
        str = number.slice(i - 3, i) + " " + str;
      } else {
        str = number.slice(0, i) + " " + str;
        break;
      }
    }
    return str;
  }

  return (
    <li className={s.tableRow}>
      <div className={s.categoryAndLabel}>
        <div className={`${s.colorBar} ${s[category.replace(" ", "_")]}`}></div>
        <p className={s.categoryName}>{category}</p>
      </div>
      <p className={s.amount}>{prettifyNumbersFixed(amount)}</p>
    </li>
  );
};
