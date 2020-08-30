import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/burgerBuilder/BurgerBuilder";

class App extends Component {
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
