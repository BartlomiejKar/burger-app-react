import React from "react";
import "./Layout.css";
import Child from "../hoc/child";
import Toolbar from "../Toolbar/Toolbar";

const layout = (props) => {
  return (
    <Child>
      <Toolbar />
      <main className="Content">{props.children}</main>
    </Child>
  );
};

export default layout;
