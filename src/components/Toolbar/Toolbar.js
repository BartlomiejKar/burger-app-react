import React from "react";
import "../Toolbar/ToolbarMobile/ToolbarMobile.css";
import "./Toolbar.css";
import Logo from "./Logo";
import NavigationItems from "../Navigation/NavigationItems";

const Toolbar = (props) => {
  return (
    <header className="Toolbar">
      <div onClick={props.close}>MENU</div>
      <Logo />
      <nav className="DesktopOnly">
        <NavigationItems />
      </nav>
    </header>
  );
};

export default Toolbar;
