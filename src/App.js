import React, { Component } from "react";
import "./App.css";
import Layout from "./components/Layout";

class App extends React.Component {
  render() {
    return (
      <div>
        <p>Burger app</p>
        <Layout>
          <p>teest</p>
        </Layout>
      </div>
    );
  }
}
export default App;
