import React from "react";
import "./Burger.css";
import BurgerElements from "../container/burgerBuilder/BurgerElements/BurgerElements";
const burger = (props) => {
  const transformIngriedents = Object.keys(props.ingriedents).map((el) => {
    return [...Array(props.ingriedents[el])].map((_, i) => {
      return <BurgerElements key={el + i} type={el} />;
    });
  });

  console.log(transformIngriedents);

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
