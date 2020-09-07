import React from "react";

import Backdrop from "./Backdrop";

import NavigationItems from "../../Navigation/NavigationItems";
import Child from "../../hoc/child";
import Logo from "../Logo";
import "./ToolbarMobile.css";

const ToolbarMobile = (props) => {
  let animationOpenClose = ["ToolbarMobile", "Close"].join(" ");

  if (props.state) {
    animationOpenClose = ["ToolbarMobile", "Open"].join(" ");
  }

  return (
    <Child>
      <Backdrop show={props.state} clicked={props.close} />
      <div className={animationOpenClose}>
        <div className="MobileLogo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Child>
  );
};

export default ToolbarMobile;
