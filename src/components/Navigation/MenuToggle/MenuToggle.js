import React from "react";
import classes from "./MenuToggle.module.css";

const MenuToggle = (props) => {
  const menuClasses = [classes["menu-toggle"], "fa"];
  if (props.isOpen) {
    menuClasses.push("fa-times");
    menuClasses.push(classes.open);
  } else {
    menuClasses.push("fa-bars");
  }
  return <i className={menuClasses.join(" ")} onClick={props.onToggle} />;
};

export default MenuToggle;
