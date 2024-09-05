// import { lazy } from "react";

// const Chart = lazy(() => import("../../components/statisticsComponents/Chart/Chart"));
// const StatisticsDashboard = lazy(() => import( "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard"  ));
// const StatisticsTable = lazy(() =>  import(    "../../components/statisticsComponents/StatisticsTable/StatisticsTable"  ));
// const  = lazy(() => import());

import { Chart } from "../../components/statisticsComponents/Chart/Chart";
import { StatisticsDashboard } from "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard";
import { StatisticsTable } from "../../components/statisticsComponents/StatisticsTable/StatisticsTable";

const StatisticsTab = () => {
  return (
    <div>
      <Chart />
      <div>
        <StatisticsDashboard />
        <StatisticsTable />
      </div>
    </div>
  );
};
export default StatisticsTab;
