import React from "react";
import "./Button.css";

const  NumberButton = (props) => {
  return (
    <div className="NumberButton">
    <div className='calc-container'>
      <div className="nums">
        <button className='clear-button'>Clear</button>
        <button>/</button>
      </div>
      <div className="nums">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>*</button>
      </div>
      <div className="nums">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
      </div>
      <div className="nums">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
      </div>
      <div className="nums">
        <button className='zero-button'>0</button>
        <button>=</button>
        </div>
      </div>
    </div>
  );
};

export default NumberButton;