import React, { Component } from "react";
import "./Layout.css";
import Child from "../hoc/child";
import Toolbar from "../Toolbar/Toolbar";
import ToolbarMobile from "../Toolbar/ToolbarMobile/ToolbarMobile";

class Layout extends Component {
  state = {
    toggleMenuMobile: true,
  };

  closerMenuMobile = () => {
    this.setState({
      toggleMenuMobile: false,
    });
  };

  render() {
    return (
      <Child>
        <Toolbar />
        <ToolbarMobile
          state={this.state.toggleMenuMobile}
          close={this.closerMenuMobile}
        />
        <main className="Content">{this.props.children}</main>
      </Child>
    );
  }
}

export default Layout;
