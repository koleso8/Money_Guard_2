import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectStatisticsPeriod } from "../../redux/transactions/selector";

import { fetchPeriodTrnThunk } from "../../redux/transactions/operations";

import { ChartSection } from "../../components/statisticsComponents/Chart/Chart";
import { StatisticsDashboard } from "../../components/statisticsComponents/StatisticsDashboard/StatisticsDashboard";
import { StatisticsTable } from "../../components/statisticsComponents/StatisticsTable/StatisticsTable";

import s from "./StatisticsTab.module.css";

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
