import React from "react";
import "./Navigation.css";

const ItemLink = (props) => {
  return (
    <li className="NavigationItem">
      <a className={props.active ? "active" : null} href={props.link}>
        {props.children}
      </a>
    </li>
  );
};

export default ItemLink;
