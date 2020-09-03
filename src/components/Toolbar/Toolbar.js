import React from "react";
import "./Toolbar.css";
import Logo from "./Logo";
import NavigationItems from "../Navigation/navigationItems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div>MENU</div>
      <Logo />
      <NavigationItems />
    </header>
  );
};

export default Toolbar;
