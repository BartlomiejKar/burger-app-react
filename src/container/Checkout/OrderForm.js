import React, { Component } from "react";
import axios from "../../axios";
import Button from "../OrderList/Button";
import Spinner from "../OrderList/Spinner";
import "./Checkout.css";

class OrderForm extends Component {
  state = {
    name: "",
    email: "",
    adress: {
      street: "",
      PostalCode: "",
    },
    isLoading: false,
  };
  orderHandler = (e) => {
    e.preventDefault();
    // console.log(this.props.ingriedents);
    this.setState({
      isLoading: true,
    });
    const order = {
      ingriedents: this.props.ingriedents,
      totalPrice: this.props.price,
      client: {
        name: "Bolek",
        adress: "test",
        delivery: "fast",
      },
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        // console.log(response);
        this.props.history.push(`/`);
        this.setState({
          isLoading: false,
        });
      })
      .catch((error) => {
        // console.log(error);
        this.setState({
          isLoading: false,
        });
      });
  };
  render() {
    let form = (
      <form className="FormData">
        <input type="text" name="name" placeholder="name" />
        <input type="email" name="email" placeholder="email" />
        <input type="text" name="adress" placeholder="adress" />
        <input type="text" name="postalCode" placeholder="post-code" />
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.isLoading) {
      form = <Spinner />;
    }
    return (
      <div className="BoxData">
        <h4>Please enter your contact data</h4>
        {form}
      </div>
    );
  }
}

export default OrderForm;
