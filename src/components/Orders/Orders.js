import React, { Component } from "react";
import axios from "../../axios";
import FinishOrders from "../../container/Checkout/FinishOrder";

class Orders extends Component {
  state = {
    loading: false,
    orders: [],
  };

  componentDidMount() {
    const orders = [];
    axios
      .get(`/orders.json`)
      .then((res) => {
        for (let id in res.data) {
          orders.push({
            ...res.data[id],
            id: id,
          });
        }
        this.setState({
          loading: true,
          orders: orders,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.orders.map((el) => (
          <FinishOrders
            key={el.id}
            ingriedents={el.ingriedents}
            totalPrice={el.totalPrice}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
