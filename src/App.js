import React, { Component } from "react";
import "./App.css";
import UserInput from "./userInput/userInput";
import Validation from "./validation/validation";
import Char from "./char/char";

class App extends React.Component {
  state = {
    input: "",
  };

  eventHandlerChange = (event) => {
    const value = event.target.value;
    this.setState({
      input: value,
    });
  };

  deleteChar = (index) => {
    const arrayInput = this.state.input.split("");
    arrayInput.splice(index, 1);
    const newArray = arrayInput.join("");
    this.setState({
      input: newArray,
    });
  };
  render() {
    const charlist = this.state.input.split("");
    const char = charlist.map((el, index) => {
      return (
        <Char char={el} key={index} onClick={() => this.deleteChar(index)} />
      );
    });
    return (
      <div>
        <UserInput
          onChange={this.eventHandlerChange}
          input={this.state.input}
        />
        {char}
        <Validation input={this.state.input} />
      </div>
    );
  }
}
export default App;
