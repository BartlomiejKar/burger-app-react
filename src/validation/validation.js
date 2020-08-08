import React from "react";

const validation = (props) => {
  const input = props.input.length;
  let validation = "nieprawidłowa ilośc znaków, wprowadź od 5-8 znaków";

  if (input >= 5 && input <= 8) {
    validation = "odpowiednia ilośc znaków";
  }
  return (
    <div>
      <p>{validation}</p>
    </div>
  );
};

export default validation;
