import React from "react";
import { Link } from "react-router-dom";
import classes from "./Channels.module.css";

const Channels: React.FC<{ url: string; alt: string; name: string }> = (
  props
) => {
  return (
    <li className={`column " ${classes.btn__custom__link}`}>
      <Link to={props.name} className={classes.anchor}>
        <img className={classes.btn__icon} src={props.url} alt={props.alt} />
        {props.name}
      </Link>
    </li>
  );
};

export default Channels;
