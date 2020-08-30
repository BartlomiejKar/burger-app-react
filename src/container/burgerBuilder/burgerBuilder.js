import React, { Component } from "react";
import Burger from "../Burger";
import BurgerControls from "./BurgerControls/BurgerControls";

const INGRIEDIENTS_PRICE = {
  salad: 0.4,
  meat: 1.3,
  bacon: 0.8,
  cheese: 0.5,
};

class BurgerBuilder extends Component {
  state = {
    ingriedents: {
      salad: 0,
      meat: 0,
      bacon: 0,
      cheese: 0,
    },
    totalPrice: 5,
  };

  addIngriedents = (type) => {
    const oldCount = this.state.ingriedents[type];
    const updateCount = oldCount + 1;
    const updatedIngriedents = {
      ...this.state.ingriedents,
    };
    updatedIngriedents[type] = updateCount;
    const oldPrice = this.state.totalPrice;
    const ingriedentsPrice = INGRIEDIENTS_PRICE[type];
    const newPrice = oldPrice + ingriedentsPrice;
    this.setState({
      totalPrice: newPrice,
      ingriedents: updatedIngriedents,
    });
  };

  removeIngriedents = (type) => {
    const oldCount = this.state.ingriedents[type];
    if (oldCount <= 0) {
      return;
    }
    const updateCount = oldCount - 1;
    const updatedIngriedents = {
      ...this.state.ingriedents,
    };
    updatedIngriedents[type] = updateCount;
    const oldPrice = this.state.totalPrice;
    const ingriedentsPrice = INGRIEDIENTS_PRICE[type];
    const newPrice = oldPrice - ingriedentsPrice;
    this.setState({
      ingriedents: updatedIngriedents,
      totalPrice: newPrice,
    });
  };

  render() {
    const disabledButton = {
      ...this.state.ingriedents,
    };

    for (let key in disabledButton) {
      disabledButton[key] = disabledButton[key] <= 0;
    }
    return (
      <div>
        <Burger ingriedents={this.state.ingriedents} />
        <BurgerControls
          addIngriedents={this.addIngriedents}
          removeIngriedents={this.removeIngriedents}
          disabledButton={disabledButton}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
