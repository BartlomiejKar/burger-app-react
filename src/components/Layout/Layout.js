import React from "react";
import "./Layout.css";
import Child from "../hoc/child";

const layout = (props) => {
  return (
    <Child>
      <div>Toolbar, Configurator</div>
      <main className="Content">{props.children}</main>
    </Child>
  );
};

export default layout;
