import React from "react";
import classes from "./Backdrop.module.css";

const Backdrop = (props) => (
  <div className={classes.backdrop} onClick={props.onClick} />
);

export default Backdrop;
