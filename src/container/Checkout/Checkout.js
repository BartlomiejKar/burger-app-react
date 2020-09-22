import React, { Component } from "react";
import { Route } from "react-router-dom";
import CheckoutSummary from "./CheckoutSummary";
import OrderForm from "./OrderForm";

class Checkout extends Component {
  state = {
    ingriedents: null,
    totalPrice: 0,
  };
  UNSAFE_componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingriedents = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] === `price`) {
        price = param[1];
      } else {
        ingriedents[param[0]] = +param[1];
      }
    }
    this.setState({
      ingriedents: ingriedents,
      totalPrice: price,
    });
  }
  cancelCheckoutHandler = () => {
    this.props.history.goBack();
    // console.log(this.props);
  };
  continueCheckoutHandler = () => {
    this.props.history.push("/checkout/form-data");
  };

  handlerSendForm = (e) => {
    e.preventDefault();
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
          render={(props) => (
            <OrderForm
              ingriedents={this.state.ingriedents}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
