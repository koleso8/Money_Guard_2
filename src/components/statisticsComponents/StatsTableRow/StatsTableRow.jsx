export const StatsTableRow = ({ categoryName, sum }) => {
  return (
    <div>
      <tr>
        <td>
          <div className={`${s.colorBar} ${s[`${categoryName}`]}`}></div>
        </td>
        <td className={s.category}>{categoryName}</td>
        <td className={s.sum}>{sum}</td>
      </tr>
    </div>
  );
};
