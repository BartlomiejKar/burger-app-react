import React, { Component } from "react";
import Burger from "../Burger";
import BurgerControls from "./BurgerControls/BurgerControls";
import OrderBurger from "../OrderList/OrderList";

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
    purchaseState: false,
    abra: 0,
  };

  updatePurchaseState = (updatedIngriedents) => {
    const sum = Object.keys(updatedIngriedents)
      .map((el) => {
        return updatedIngriedents[el];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({
      purchaseState: sum,
    });
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
    this.updatePurchaseState(updatedIngriedents);
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
    this.updatePurchaseState(updatedIngriedents);
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
        <OrderBurger order={this.state.ingriedents} />
        <BurgerControls
          addIngriedents={this.addIngriedents}
          removeIngriedents={this.removeIngriedents}
          disabledButton={disabledButton}
          price={this.state.totalPrice}
          purchase={this.state.purchaseState}
        />
      </div>
    );
  }
}

export default BurgerBuilder;
