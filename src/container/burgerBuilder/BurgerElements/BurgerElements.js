import React from "react";
import burgerElements from "./burgerElements.css";
const burgerElements = (props) => {
  let elementsOfBurger = null;

  switch (props.type) {
    case "burger-bottom":
      elementsOfBurger = <div className={"BreadBottom"}></div>;
      break;
    case "burger-top":
      elementsOfBurger = (
        <div className={"BreadTop"}>
          <div className={"Seeds1"}></div>
          <div className={"Seeds2"}></div>
          <div className={"Salad"}></div>
        </div>
      );
      break;
    case "meat":
      elementsOfBurger = <div className={"Meat"}></div>;
      break;
    case "Bacon":
      elementsOfBurger = <div className={"Bacon"}></div>;
      break;
    case "Cheese":
      elementsOfBurger = <div className={"Cheese"}></div>;
      break;
  }
};

export default burgerElements;
