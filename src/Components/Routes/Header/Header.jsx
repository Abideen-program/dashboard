import classes from "./Header.module.css";
import avatar from "../../../assets/avatar.jpeg";
import { FaBell, FaAngleDown } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className={classes.overall}>
        <h3>Overall</h3>
        <div className={classes.admin}>
          <FaBell />
          <div className={classes["image-container"]}>
            <img src={avatar} alt="" />
          </div>
          <FaAngleDown />
        </div>
      </div>
    </>
  );
};

export default Header;
