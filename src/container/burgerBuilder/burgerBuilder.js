import React, { Component } from "react";
import Burger from "../Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <div>Burger buttons</div>
      </div>
    );
  }
}

export default BurgerBuilder;
