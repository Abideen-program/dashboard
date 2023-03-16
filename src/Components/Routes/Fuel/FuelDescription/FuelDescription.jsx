import { FaAngleLeft, FaCaretDown } from "react-icons/fa";
import DescriptionBox from "./DescriptionBox";
import classes from "./FuelDescription.module.css";

const FuelDescription = () => {
  return (
    <>
      <div className={classes.back}>
        <FaAngleLeft />
        <p>Back</p>
      </div>

      <div className={classes.bank}>
        <p>Guaranty Trust Bank</p>
        <FaCaretDown />
      </div>

      <div className={classes["description-box"]}>
        <DescriptionBox
          iconOne={"iconOne"}
          number={"04"}
          title={"Total Users"}
        />
        <DescriptionBox
          iconTwo={"iconTwo"}
          number={"93277 L"}
          title={"Fuel Level"}
        />
        <DescriptionBox
          iconThree={"iconThree"}
          number={"88024 L"}
          title={"Fuel Consumption"}
        />
      </div>
    </>
  );
};

export default FuelDescription;
