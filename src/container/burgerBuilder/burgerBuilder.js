import React, { Component } from "react";
import Burger from "../Burger";

class BurgerBuilder extends Component {
  state = {
    ingriedents: {
      salad: 0,
      meat: 3,
      bacon: 3,
      Cheese: 3,
    },
  };
  render() {
    return (
      <div>
        <Burger ingriedents={this.state.ingriedents} />
        <div>Burger buttons</div>
      </div>
    );
  }
}

export default BurgerBuilder;
