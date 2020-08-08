import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input type="text" onChange={props.onChange} value={props.input} />
    </div>
  );
};

export default userInput;
