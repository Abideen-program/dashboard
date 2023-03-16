import { FaUser, FaGasPump, FaWallet, FaTint } from "react-icons/fa";
import classes from "./DescriptionBox.module.css";
const DescriptionBox = (props) => {
  const { iconOne, iconTwo, iconThree, title, number } = props;

  let logo = <FaUser />;

  if (iconTwo) {
    logo = (
      <div className={classes.level}>
        <div className={classes.one}>
          <FaTint />
        </div>
        <div className={classes.two}>
          <FaWallet />
        </div>
      </div>
    );
  }

  if (iconThree) {
    logo = <FaGasPump />;
  }

  return (
    <div className={`${classes.box} ${iconOne ? classes.first : ""}`}>
      <div className={classes.logo}>{logo}</div>
      <div>
        <p className={classes.title}>{title}</p>
        <p className={iconOne ? classes.number : ""}>{number}</p>
      </div>
    </div>
  );
};

export default DescriptionBox;
