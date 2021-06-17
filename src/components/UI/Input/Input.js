import React from "react";
import classes from "./Input.module.css";

function isInvalid({ valid, touched, shouldValidate }) {
  return !valid && shouldValidate && touched;
}

const Input = (props) => {
  const inputType = props.type || "text";
  const inputClasses = [classes.input];
  const htmlFor = `${inputType}-${Math.random()}`;

  if (isInvalid(props)) {
    inputClasses.push(classes.invalid);
  }

  return (
    <div className={inputClasses.join(" ")}>
      <label htmlFor={htmlFor}>{props.label}</label>
      <input
        type={inputType}
        id={htmlFor}
        value={props.value}
        onChange={props.onChange}
      />

      {isInvalid(props) ? (
        <span>{props.errorMessage || "Введите корректное значение"}</span>
      ) : null}
    </div>
  );
};

export default Input;
