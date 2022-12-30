/* eslint-disable react/destructuring-assignment */
import React from "react";
import IconClose from "../assets/icon-close.svg";
import MenuIcon from "../assets/icon-menu.svg";

// open and close the menu button to toggle the available list of files/documents
function Button(props: {
  click: React.MouseEventHandler<HTMLButtonElement>;
  expand: boolean;
}) {
  return (
    <button
      type="button"
      id="menu-button"
      onClick={props.click}
      className="btn navbar-toggler menu-btn-js"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded={props.expand}
      aria-haspopup="menu"
      aria-label="Toggle menu navigation"
    >
      <img
        className={`menu-image ${props.expand ? "hide-icon-js" : ""}`}
        src={MenuIcon}
        width={18}
        height={12}
        alt=""
      />
      <img
        className={`close ${props.expand ? "" : "hide-icon-js"}`}
        src={IconClose}
        alt=""
      />
    </button>
  );
}

export default Button;
