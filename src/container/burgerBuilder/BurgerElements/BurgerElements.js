import React, { Component } from "react";
import PropTypes from "prop-types";
import "./BurgerElements.css";

class BurgerElements extends Component {
  render() {
    let elementsOfBurger = null;

    switch (this.props.type) {
      case "burger-bottom":
        elementsOfBurger = <div className="BreadBottom"></div>;
        break;
      case "burger-top":
        elementsOfBurger = (
          <div className="BreadTop">
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;
      case "meat":
        elementsOfBurger = <div className="Meat"></div>;
        break;
      case "bacon":
        elementsOfBurger = <div className="Bacon"></div>;
        break;
      case "cheese":
        elementsOfBurger = <div className="Cheese"></div>;
        break;
      case "salad":
        elementsOfBurger = <div className="Salad"></div>;
        break;
      default:
    }
    return elementsOfBurger;
  }
}

BurgerElements.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerElements;
