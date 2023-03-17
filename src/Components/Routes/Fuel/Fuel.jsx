import FuelDescription from "./FuelDescription/FuelDescription";
import FuelChart from "./FuelChart/FuelChart";
import FuelLine from "./FuelLine/FuelLine";
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
          <FuelLine />
        </div>
      </div>
    </>
  );
};

export default Fuel;
