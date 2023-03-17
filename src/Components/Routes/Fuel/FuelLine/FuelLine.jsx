import { FaFilter } from "react-icons/fa";
import classes from "./FuelLine.module.css";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  Tooltip,
  CategoryScale,
  LinearScale,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  Tooltip,
  CategoryScale,
  LinearScale
);

const FuelLine = () => {
  const labels = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];
  const data = {
    labels,
    datasets: [
      {
        label: "Liters of fuel",
        data: [0, 0, 5, 7, 7, 15, 20, 26],
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
          <p>12-10-22</p>
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
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default FuelLine;
