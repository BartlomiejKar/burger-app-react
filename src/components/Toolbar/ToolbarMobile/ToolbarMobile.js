import React from "react";
import NavigationItems from "../../Navigation/NavigationItems";
import Logo from "../Logo";
import "./ToolbarMobile.css";

const ToolbarMobile = (props) => {
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
