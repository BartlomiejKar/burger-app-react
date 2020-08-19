import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "../src/container/burgerBuilder/burgerBuilder";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Burger app</p>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
        </Layout>
      </div>
    );
  }
}
export default App;
