import React from "react";
import "./ToolbarMobile.css";

const Backdrop = (props) => {
  return props.show ? (
    <div className="BackgroundColor" onClick={props.clicked}>
      {props.children}
    </div>
  ) : null;
};

export default Backdrop;
