import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import s from "../StatisticsTable/StatisticsTable.module.css";
import data from "../devData.json";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ChartSection = () => {
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
        label: "$",
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
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    cutout: "70%",
  };

  return (
    <div className={s.doughnutCont}>
      <Doughnut options={options} data={settings} className={s.doughnut} />
    </div>
  );
};
