import React from "react";
import "./Button.css";

const NumberButton = props => {
  return (
    <button className={`number-button ${props.bgColor}`}>{props.text}</button> // 'number-button' is added as a class name to style the buttons
    
  );
};

export default NumberButton;
