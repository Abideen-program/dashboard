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
              <NavLink to="wallet">Wallet</NavLink>
            </li>
            <li className={classes.list}>
              <FaBolt />
              <NavLink to="Energy">Prepaid Energy</NavLink>
            </li>
            <li className={classes.list}>
              <FaTint />
              <NavLink to="water">Prepaid Water</NavLink>
            </li>
            <li className={classes.list}>
              <FaTint />
              <NavLink to="fuel">Fuel Monitoring</NavLink>
            </li>
            <li className={classes.list}>
              <FaEllipsisH />
              <NavLink to="chat">Chat</NavLink>
            </li>
            <li className={classes.list}>
              <FaQuestionCircle />
              <NavLink to="request">Request</NavLink>
            </li>
            <li className={classes.list}>
              <FaCog />
              <NavLink to="settings">Settings</NavLink>
            </li>
            <li className={classes.list}>
              <FiLogOut />
              <NavLink to="/">Logout</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
