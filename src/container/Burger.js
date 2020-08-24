import React from "react";
import "./Burger.css";
import BurgerElements from "../container/burgerBuilder/BurgerElements/BurgerElements";
const burger = (props) => {
  let transformIngriedents = Object.keys(props.ingriedents)
    .map((el) => {
      return [...Array(props.ingriedents[el])].map((_, i) => {
        return <BurgerElements key={el + i} type={el} />;
      });
    })
    .reduce((prevArr, el) => {
      return prevArr.concat(el);
    }, []);

  if (transformIngriedents.length === 0) {
    transformIngriedents = <p>Please add some ingriedents! :)</p>;
  }

  return (
    <div className="Burger">
      <BurgerElements type="burger-top" />
      {transformIngriedents}
      <BurgerElements type="burger-bottom" />
    </div>
  );
};

export default burger;
