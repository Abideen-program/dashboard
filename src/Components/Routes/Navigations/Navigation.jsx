import {NavLink, Link} from 'react-router-dom'
import logo from "../../../assets/logo.png";
import {
  FaHome,
  FaWallet,
  FaBolt,
  FaTint,
  FaEllipsisH,
  FaCog,
  FaQuestionCircle,
} from "react-icons/fa";

import {FiLogOut} from 'react-icons/fi'
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <Link to='/' className={classes["logo-container"]}>
          <img src={logo} alt="logo of the company" />
        </Link>

        <nav>
          <ul>
            <li className={classes.list}>
              <FaHome />
              <NavLink to="dashboard">Dashboard</NavLink>
            </li>
            <li className={classes.list}>
              <FaWallet />
              <a href="face.com">Wallet</a>
            </li>
            <li className={classes.list}>
              <FaBolt />
              <a href="face.com">Prepaid Energy</a>
            </li>
            <li className={classes.list}>
              <FaTint />
              <a href="face.com">Prepaid Water</a>
            </li>
            <li className={classes.list}>
              <FaTint />
              <a href="face.com">Fuel Monitoring</a>
            </li>
            <li className={classes.list}>
              <FaEllipsisH />
              <a href="face.com">Chat</a>
            </li>
            <li className={classes.list}>
              <FaQuestionCircle />
              <a href="face.com">Request</a>
            </li>
            <li className={classes.list}>
              <FaCog />
              <a href="face.com">Settings</a>
            </li>
            <li className={classes.list}>
              <FiLogOut />
              <a href="face.com">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
