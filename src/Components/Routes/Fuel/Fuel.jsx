import FuelChart from "./FuelChart/FuelChart";
import FuelDescription from "./FuelDescription/FuelDescription";
import classes from "./Fuel.module.css";

const Fuel = () => {
  return (
    <>
      <FuelDescription />
      <h2>Fuel Monitoring</h2>
      <div className={classes["fuel-chart"]}>
        <div className={classes.one}>
          <FuelChart />
        </div>
        <div className={classes.one}>
          <FuelChart />
        </div>
      </div>
    </>
  );
};

export default Fuel;
