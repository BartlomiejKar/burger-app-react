import React, { Component } from "react";
import Burger from "../Burger";

class BurgerBuilder extends Component {
  state = {
    ingriedents: {
      salad: 1,
      meat: 1,
      bacon: 2,
      cheese: 2,
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
