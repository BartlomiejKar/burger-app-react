import React from "react";
import "./Toolbar.css";
import Logo from "./Logo";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo />
      <div>...</div>
    </header>
  );
};

export default Toolbar;
