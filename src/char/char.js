import React from "react";

const char = (props) => {
  const style = {
    display: "inline-block",
    margin: "10px",
    border: "1px solid black",
    padding: "10px",
    borderRadius: "50%",
  };

  return (
    <div style={style} onClick={props.onClick}>
      <p>{props.char}</p>
    </div>
  );
};

export default char;
