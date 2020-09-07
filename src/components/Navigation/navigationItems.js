import React from "react";
import ItemLink from "./Item";
import "./Navigation.css";

const NavigationItems = (props) => {
  return (
    <div>
      <ul className="NavigationItem">
        <ItemLink link="/">Burger Builder</ItemLink>
        <ItemLink link="/">Checkout</ItemLink>
      </ul>
    </div>
  );
};

export default NavigationItems;
