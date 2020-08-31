import React from "react";
import "./OrderList.css";

const OrderList = (props) => {
  const orderIngriedents = Object.keys(props.order).map((el) => {
    return (
      <li key={el} style={{ textTransform: "uppercase", listStyle: "none" }}>
        {el} : {props.order[el]}
      </li>
    );
  });
  return (
    <div className="Modal">
      <h3>Order Ingriedents:</h3>
      <ul>{orderIngriedents}</ul>
    </div>
  );
};

export default OrderList;
