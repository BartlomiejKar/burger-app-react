import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./container/burgerBuilder/BurgerBuilder";
import Checkout from "../src/container/Checkout/Checkout";
import Orders from "./components/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </Layout>
      </div>
    );
  }
}
export default App;
