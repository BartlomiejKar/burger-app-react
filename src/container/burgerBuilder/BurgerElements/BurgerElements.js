import React, { Component } from "react";
import PropTypes from "prop-types";
import BurgerElements from "./burgerElements.css";

class BurgerElements extends Component {
  render() {
    let elementsOfBurger = null;

    switch (this.props.type) {
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
    return elementsOfBurger;
  }
}

BurgerElements.PropTypes = {
  type = PropTypes.string.isRequired
}


export default BurgerElements;
