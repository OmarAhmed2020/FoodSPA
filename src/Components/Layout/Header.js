/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import { Fragment } from "react";
import SnoCake from "../../Assets/cookies.jpg";
import classes from "./Header.Module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Sno Gelato</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={SnoCake} alt="GelatoCake" />
      </div>
    </Fragment>
  );
};
export default Header;
