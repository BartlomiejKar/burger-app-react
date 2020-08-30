import React, { Component } from "react";
import Burger from "../Burger";
import BurgerControls from "./BurgerControls/BurgerControls";

class BurgerBuilder extends Component {
  state = {
    ingriedents: {
      salad: 0,
      meat: 0,
      bacon: 0,
      Cheese: 0,
    },
  };
  render() {
    return (
      <div>
        <Burger ingriedents={this.state.ingriedents} />
        <BurgerControls />
      </div>
    );
  }
}

export default BurgerBuilder;
