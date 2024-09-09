import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../StatisticsTable/StatisticsTable.module.css";
// import data from "../devData.json";
import { selectPeriodTransactions } from "../../../redux/transactions/selector";
import { useSelector } from "react-redux";
import { selectBalance } from "../../../redux/auth/selectors";
import { formatNumber } from "../numbersFormatting";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartSection = () => {
  const balance = useSelector(selectBalance);

  const data = useSelector(selectPeriodTransactions);

  if (!data.categoriesSummary || !data.categoriesSummary.length) return;

  const arrOfExpenses = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  const expenseTypes = [
    "Main expenses",
    "Products",
    "Car",
    "Self care",
    "Child care",
    "Household products",
    "Education",
    "Leisure",
    "Other expenses",
    "Entertainment",
  ];

  data.categoriesSummary.map((e) => {
    if (e.type !== "INCOME")
      arrOfExpenses[expenseTypes.indexOf(e.name)] = e.total;
  });

  const settings = {
    labels: expenseTypes,
    datasets: [
      {
        label: "₴",
        data: arrOfExpenses,
        backgroundColor: [
          "#fed057",
          "#ffd8d0",
          "#fd9498",
          "#c5baff",
          "#6e78e8",
          "#4a56e2",
          "#81e1ff",
          "#24cca7",
          "#00ad84",
          "#56b9dc",
        ],
        borderWidth: 1,
        borderColor: [
          "#fed057",
          "#ffd8d0",
          "#fd9498",
          "#c5baff",
          "#6e78e8",
          "#4a56e2",
          "#81e1ff",
          "#24cca7",
          "#00ad84",
          "#56b9dc",
        ],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      annotation: {
        annotations: {
          a: {
            backgroundShadowColor: "#fff",
            shadowBlur: "10px",
          },
        },
      },
    },
    cutout: "70%",
  };

  return (
    <div className={s.chart}>
      <div className={s.doughnutCont}>
        <Doughnut options={options} data={settings} className={s.doughnut} />
        <div className={s.balanceCont}>
          <p className={s.balance}>₴ {formatNumber(balance)}</p>
        </div>
      </div>
    </div>
  );
};
