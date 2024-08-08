import React from "react";

//internal import
import Style from "./Button.module.css";
const Button = ({ icon, btnName, handleClick, classStyle }) => {
  return (
    <div className={Style.box}>
      <button
        className={`${Style.button} ${classStyle}`}
        onClick={() => handleClick()}
      >
        {icon}
        {btnName}
      </button>
    </div>
  );
};

export default Button;
