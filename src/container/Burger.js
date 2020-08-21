import React from "react";
import "./Burger.css";
import BurgerElements from "../container/burgerBuilder/BurgerElements/BurgerElements";
const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerElements type="burger-top" />
      <BurgerElements type="Cheese" />
      <BurgerElements type="Bacon" />
      <BurgerElements type="burger-bottom" />
    </div>
  );
};

export default burger;
