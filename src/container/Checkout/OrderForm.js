import React, { Component } from "react";
import Button from "../OrderList/Button";
import "./Checkout.css";

class OrderForm extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      PostalCode: "",
    },
  };

  render() {
    return (
      <div className="BoxData">
        <h4>Please enter your contact data</h4>
        <form className="FormData">
          <input type="text" name="name" placeholder="name" />
          <input type="email" name="email" placeholder="email" />
          <input type="text" name="adress" placeholder="adress" />
          <input type="text" name="postalCode" placeholder="post-code" />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default OrderForm;
