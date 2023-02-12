import React from "react";

import { Fragment } from "react";
import "./header.css";
import mealsImage from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {

  return (
    <Fragment>
      <header className="header">
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="A table full of meals" />
      </div>
    </Fragment>
  );
};

export default Header;
