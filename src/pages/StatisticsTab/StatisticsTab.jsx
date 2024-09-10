// import { lazy } from "react";

// const ChartSection = lazy(() => import("../../components/statisticsComponents/Chart/Chart"));
// const StatisticsDashboard = lazy(() => import( "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard"  ));
// const StatisticsTable = lazy(() =>  import(    "../../components/statisticsComponents/StatisticsTable/StatisticsTable"  ));
// const  = lazy(() => import());

import { ChartSection } from "../../components/statisticsComponents/Chart/Chart";
import { StatisticsDashboard } from "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard";
import { StatisticsTable } from "../../components/statisticsComponents/StatisticsTable/StatisticsTable";
import s from "./StatisticsTab.module.css";

import { selectStatisticsPeriod } from "../../redux/transactions/selector";
import { fetchPeriodTrnThunk } from "../../redux/transactions/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const StatisticsTab = () => {
  const period = useSelector(selectStatisticsPeriod);
  // const period = { month: 8, year: 2024 };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPeriodTrnThunk(period));
  }, [period, dispatch]);

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
