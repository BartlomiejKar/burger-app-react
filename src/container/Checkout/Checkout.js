import React, { Component } from "react";
import CheckoutSummary from "./CheckoutSummary";

class Checkout extends Component {
  state = {
    ingriedents: {
      salad: 1,
      bacon: 1,
      cheese: 1,
    },
  };
  render() {
    return <CheckoutSummary ingriedents={this.state.ingriedents} />;
  }
}

export default Checkout;
