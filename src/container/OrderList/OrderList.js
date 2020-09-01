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
    <div
      onClick={props.setPurchaseOnFalse}
      className={props.purchasedState ? "Backdrop" : "hidden"}
    >
      <div className={props.purchasedState ? "Modal" : "hidden"}>
        <h3>Order Ingriedents:</h3>
        <ul>{orderIngriedents}</ul>
      </div>
    </div>
  );
};

export default OrderList;
