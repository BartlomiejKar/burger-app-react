import React, { useState } from "react";
import "./App.css";
import UserInput from "./userInput/userInput";
import UserOutput from "./userOutput/userOutput";

const app = () => {
  const [names, changeNames] = useState({
    persons: [{ name1: "bolek" }, { name2: "lolek" }, { name2: "Atomek" }],
  });

  const changeNameHandler = (event) => {
    changeNames({
      persons: [
        { name1: event.target.value },
        { name2: "lolek" },
        { name2: "Atomek" },
      ],
    });
  };
  return (
    <div>
      <h1>Ćwiczenie useState</h1>
      <UserInput
        currentName={names.persons[0].name1}
        change={changeNameHandler}
      />
      <UserOutput name={names.persons[0].name1} />
      <UserOutput name={names.persons[1].name2} />
      <UserOutput name={names.persons[2].name2} />
    </div>
  );
};
export default app;
