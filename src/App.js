import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/burgerBuilder/BurgerBuilder";
import Checkout from "../src/container/Checkout/Checkout";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder></BurgerBuilder>
          <Checkout />
        </Layout>
      </div>
    );
  }
}
export default App;
