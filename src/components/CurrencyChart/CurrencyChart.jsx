import { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as LineChart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from 'chart.js';

import { useScreenWidth } from '../../hooks/useScreenWidth';
import s from './CurrencyChart.module.css';

LineChart.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const getMaxValue = data => Math.max(...data);

const CurrencyChart = ({ labels, dataSet }) => {
  const { isSmallScreen, isMediumScreen } = useScreenWidth();
  const chartRef = useRef(null);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Dataset',
        data: dataSet,
        fill: true,
        borderColor: '#FF868D',
        borderWidth: 1,
        pointBackgroundColor: '#563EAF',
        pointBorderColor: '#FF868D',
        pointBorderWidth: 1,
        tension: 0.4,
        pointRadius: ctx => {
          const allPoints = ctx.chart.data.labels;
          const pointsArr = [];
          for (let i = 0; i <= allPoints.length; i++) {
            if (typeof allPoints[i] === 'string') {
              pointsArr.push(4);
            } else {
              pointsArr.push(0);
            }
          }
          return pointsArr;
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: false,
      tooltip: {
        enabled: true,
        backgroundColor: 'transparent',
        titleColor: '#FF868D',
        titleAlign: 'center',
        bodyColor: 'rgba(0, 0, 0, 0)',
        displayColors: false,
        xAlign: 'center',
        yAlign: 'bottom',
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
        beginAtZero: true,
        suggestedMin: 30,
        suggestedMax: 55,
        max: getMaxValue(dataSet) * 1.25,
      },
    },
  };

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 170);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.5)');
      gradient.addColorStop(1, 'rgba(33, 150, 243, 0)');

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  }, []);

  return (
    <div className={s.wrapper}>
      <Line
        ref={chartRef}
        data={data}
        options={options}
        style={{
          width: '110%',
          height: isSmallScreen ? '150px' : isMediumScreen ? '120px' : '200px',
          marginLeft: isSmallScreen ? '-2%' : '-5%',
        }}
      />
    </div>
  );
};

export default CurrencyChart;
