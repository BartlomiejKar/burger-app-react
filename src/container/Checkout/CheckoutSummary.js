import React from "react";
import Burger from "../Burger";
import Button from "../OrderList/Button";
import "./Checkout.css";

const CheckoutSummary = (props) => {
  return (
    <div className="CheckoutSummary">
      <h1>We hope it tastes well</h1>
      <div style={{ width: "100%" }}>
        <Burger ingriedents={props.ingriedents} />
      </div>
      <Button btnType={"Danger"} clicked>
        Cancel
      </Button>
      <Button btnType={"Success"} clicked>
        Continue
      </Button>
    </div>
  );
};

export default CheckoutSummary;
