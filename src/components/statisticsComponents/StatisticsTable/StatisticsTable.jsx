import React from "react";

const StatisticsTable = () => {
  return (
    <div>
      <table>
        <th></th>
        <tr>
          <StatsTableRow />
        </tr>
      </table>
      <div className={s.summary}>
        <p>Expenses: </p>
        <p>Income:</p>
      </div>
    </div>
  );
};

export default StatisticsTable;
