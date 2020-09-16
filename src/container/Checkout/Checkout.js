import React, { Component } from "react";
import CheckoutSummary from "./CheckoutSummary";

class Checkout extends Component {
  state = {
    ingriedents: {},
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingriedents = {};
    for (let param of query.entries()) {
      ingriedents[param[0]] = +param[1];
    }
    this.setState({
      ingriedents: ingriedents,
    });
  }
  cancelCheckoutHandler = () => {
    this.props.history.goBack();
    // console.log(this.props);
  };
  continueCheckoutHandler = () => {
    this.props.history.push("/checkout/form");
  };
  render() {
    return (
      <CheckoutSummary
        cancelCheckout={this.cancelCheckoutHandler}
        continueCheckout={this.continueCheckoutHandler}
        ingriedents={this.state.ingriedents}
      />
    );
  }
}

export default Checkout;
