import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <ul className={classes.nav__lists}>
        <li>
          <Link to={"/"} className={classes.nav_link}>
            save more on app
          </Link>
        </li>
        <li>
          <Link to={"/daraz-affiliate-program"} className={classes.nav_link}>
            Daraz affiliate program
          </Link>
        </li>
        <li>
          <Link to={"sell"} className={classes.nav_link}>
            Sell on daraz
          </Link>
        </li>
        <li>
          <Link to={"/care"} className={classes.nav_link}>
            Customer care
          </Link>
        </li>
        <li>
          <Link to={"/track-order"} className={classes.nav_link}>
            Track my order
          </Link>
        </li>
        <li>
          <Link to={"/login"} className={classes.nav_link}>
            Login
          </Link>
        </li>
        <li>
          <Link to={"/signup"} className={classes.nav_link}>
            Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
