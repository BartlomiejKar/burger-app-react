import React from "react";
import "./BurgerButtons/BurgerButtons.css";
import BurgerButtons from "./BurgerButtons/BurgerButtons";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BurgerControls = (props) => {
  return (
    <div className="BuildControl">
      {controls.map((el) => {
        return <BurgerButtons key={el.label} type={el.type} label={el.label} />;
      })}
    </div>
  );
};

export default BurgerControls;
