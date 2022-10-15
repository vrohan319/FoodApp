import { Fragment } from "react";
import classes from "./Header.module.css";

import mealsImg from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Meals</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="khaane ki photo" />
      </div>
    </Fragment>
  );
};

export default Header;
