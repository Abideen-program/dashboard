import { FaFilter } from "react-icons/fa";
import classes from "./FuelChart.module.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const FuelChart = () => {
  const labels = ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  const data = {
    labels,
    datasets: [
      {
        label: "Liters of fuel",
        data: [45, 35, 45, 60, 53, 50, 55],
        backgroundColor: [
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
          "rgb(224, 161, 46)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    legend: {
      labels: {
        fontSize: 26,
      },
    },
  };

  return (
    <div className={classes.container}>
      <div className={classes.bar}>
        <div className={classes.time}>
          <button>Daily</button>
          <button>Monthly</button>
          <button>Yearly</button>
        </div>
        <div className={classes.label}>
          <h3>
            524.52 <span>L</span>
          </h3>
          <div className={classes.filter}>
            <FaFilter />
            <p>Filter Data</p>
          </div>
        </div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default FuelChart;
