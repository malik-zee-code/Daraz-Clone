import logo from "../../Asset/logo.png";
import download from "../../Asset/download.png";
import classes from "./HomeHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const HomeHeader = () => {
  return (
    <React.Fragment>
      <div className={classes.home__header}>
        <img src={logo} className={classes.logo} alt="logo" />
        <input type="text" placeholder="Search in Daraz" />
        <button className={classes.search}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <a href="/" className={classes.shopping_cart}>
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
        <a href="/">
          <img src={download} className={classes.download} alt="" />
        </a>
      </div>
    </React.Fragment>
  );
};

export default HomeHeader;
