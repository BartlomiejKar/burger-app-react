import React from "react";
import "./BurgerButtons/BurgerButtons.css";
import "./BurgerButtons/buttonOrderNow.css";
import BurgerButtons from "./BurgerButtons/BurgerButtons";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BurgerControls = (props) => {
  return (
    <div className="BurgerControl">
      <p>
        Current price <strong>{props.price.toFixed(2)} $</strong>
      </p>
      {controls.map((el) => {
        return (
          <BurgerButtons
            added={() => props.addIngriedents(el.type)}
            key={el.label}
            label={el.label}
            remove={() => props.removeIngriedents(el.type)}
            disabled={props.disabledButton[el.type]}
          />
        );
      })}
      <button disabled={!props.purchase} className="OrderButton">
        ORDER NOW!
      </button>
    </div>
  );
};

export default BurgerControls;
