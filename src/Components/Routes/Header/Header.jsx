import {Outlet} from 'react-router-dom'
import classes from "./Header.module.css";
import avatar from "../../../assets/avatar.jpeg";
import { FaBell, FaSortDown } from "react-icons/fa";
import Navigation from "../Navigations/Navigation";
const Header = () => {
  return (
    <div className={classes.contaner}>
      <div className={classes.overall}>
        <h3>Overall</h3>
        <div className={classes.admin}>
          <FaBell />
          <div className={classes["image-container"]}>
            <img src={avatar} alt="the admin" />
          </div>
          <FaSortDown />
        </div>
        <Navigation />
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
