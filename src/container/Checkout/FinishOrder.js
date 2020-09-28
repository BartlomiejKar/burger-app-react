import React from "react";
import "./Checkout.css";

const FinishOrder = (props) => {
  const ingriedents = [];
  for (let element in props.ingriedents) {
    ingriedents.push({
      name: element,
      value: props.ingriedents[element],
    });
  }

  const outputIngriedents = ingriedents.map((el) => {
    return (
      <span
        key={el.name}
        style={{
          textTransform: "capitalize",
          margin: "0 10px",
          border: "1px solid black",
          padding: "5px",
        }}
      >
        {el.name} : {el.value}
      </span>
    );
  });
  return (
    <div className="FinishOrder">
      <p>Ingriedents: {outputIngriedents}</p>
      <p>Price:{props.totalPrice}</p>
    </div>
  );
};

export default FinishOrder;
