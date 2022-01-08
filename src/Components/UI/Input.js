/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from "react";
import classes from "./Input.Module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
