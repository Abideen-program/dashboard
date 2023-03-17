import { NavLink, Link } from "react-router-dom";
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

import { FiLogOut } from "react-icons/fi";
import classes from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <div className={classes.navigation}>
        <Link to="/" className={classes["logo-container"]}>
          <img src={logo} alt="logo of the company" />
        </Link>

        <nav>
          <ul>
            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="dashboard"
              >
                <FaHome />
                <p>Dashboard</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                to="wallet"
                className={({ isActive }) => (isActive ? classes.isactive : "")}
              >
                <FaWallet />
                <p>Wallet</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="Energy"
              >
                <FaBolt />
                <p>Prepaid Energy</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="water"
              >
                <FaTint />
                <p>Prepaid Water</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="fuel"
              >
                <FaTint />
                <p>Fuel Monitoring</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="chat"
              >
                <FaEllipsisH />
                <p>Chat</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="request"
              >
                <FaQuestionCircle />
                <p>Request</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="settings"
              >
                <FaCog />
                <p>Settings</p>
              </NavLink>
            </li>

            <li className={classes.list}>
              <NavLink
                className={({ isActive }) => (isActive ? classes.isactive : "")}
                to="/"
              >
                <FiLogOut />
                <p>Logout</p>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
