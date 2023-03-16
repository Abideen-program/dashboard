import classes from "./Navigation.module.css";
import logo from "../../../assets/logo.png";

const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <div className={classes['logo-container']}>
          <img src={logo} alt="logo of the company" />
        </div>
        
      </div>
    </>
  );
};

export default Navigation;
