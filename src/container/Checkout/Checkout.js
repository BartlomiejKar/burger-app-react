import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";
import OrderForm from "./OrderForm";

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
    this.props.history.push("/checkout/form-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          cancelCheckout={this.cancelCheckoutHandler}
          continueCheckout={this.continueCheckoutHandler}
          ingriedents={this.state.ingriedents}
        />
        <Route
          path={this.props.match.path + `/form-data`}
          component={OrderForm}
        />
      </div>
    );
  }
}

export default Checkout;
