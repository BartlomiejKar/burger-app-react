import React from "react";
import "./Layout.css";
import Child from "../hoc/child";
import Toolbar from "../Toolbar/Toolbar";
import ToolbarMobile from "../Toolbar/ToolbarMobile/ToolbarMobile";

const layout = (props) => {
  return (
    <Child>
      <Toolbar />
      <ToolbarMobile />
      <main className="Content">{props.children}</main>
    </Child>
  );
};

export default layout;
