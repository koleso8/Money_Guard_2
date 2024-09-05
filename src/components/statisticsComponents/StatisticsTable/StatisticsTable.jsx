// import { lazy } from "react";

// const {StatsTableRow} = lazy(() => import("../StatsTableRow/StatsTableRow"));
import { StatsTableRow } from "../StatsTableRow/StatsTableRow";

import dataJson from "../devData.json";

export const StatisticsTable = () => {
  const data = JSON.parse(dataJson);

  console.log(data);

  return (
    <div>
      <table>
        <tr>
          <th>Category</th>
          <th>Sum</th>
        </tr>

        <StatsTableRow />
      </table>
      <div className={s.summary}>
        <p>Expenses: </p>
        <p>Income:</p>
      </div>
    </div>
  );
};
