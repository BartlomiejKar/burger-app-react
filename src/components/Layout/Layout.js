import React from "react";
import Child from "../hoc/child";
import classes from "./Layout.css";

const layout = (props) => {
  return (
    <Child>
      <div>Toolbar, Configurator</div>
      <main className="content">{props.children}</main>
    </Child>
  );
};

export default layout;
