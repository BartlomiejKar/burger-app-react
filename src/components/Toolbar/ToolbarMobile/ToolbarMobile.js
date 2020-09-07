import React from "react";
import NavigationItems from "../../Navigation/navigationItems";
import Logo from "../Logo";
import "./ToolbarMobile.css";
const ToolbarMobile = () => {
  return (
    <div className="ToolbarMobile">
      <Logo />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default ToolbarMobile;
