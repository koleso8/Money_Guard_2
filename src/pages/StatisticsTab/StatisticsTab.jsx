// import { lazy } from "react";

// const ChartSection = lazy(() => import("../../components/statisticsComponents/Chart/Chart"));
// const StatisticsDashboard = lazy(() => import( "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard"  ));
// const StatisticsTable = lazy(() =>  import(    "../../components/statisticsComponents/StatisticsTable/StatisticsTable"  ));
// const  = lazy(() => import());

import { ChartSection } from "../../components/statisticsComponents/Chart/Chart";
import { StatisticsDashboard } from "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard";
import { StatisticsTable } from "../../components/statisticsComponents/StatisticsTable/StatisticsTable";
import s from "./StatisticsTab.module.css";

const StatisticsTab = () => {
  return (
    <div className={s.statsTabWrapper}>
      <p className={s.statsTabHeading}>Statistics</p>
      <div className={s.statsTab}>
        <ChartSection />
        <div className={s.tableSection}>
          <StatisticsDashboard />
          <StatisticsTable />
        </div>
      </div>
    </div>
  );
};
export default StatisticsTab;
