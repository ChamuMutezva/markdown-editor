/* eslint-disable react/destructuring-assignment */
import React, { useContext } from "react";
import { ToggleMenuContext } from "../context/ToggleMenuContext";
import IconClose from "../assets/icon-close.svg";
import MenuIcon from "../assets/icon-menu.svg";

// open and close the menu button to toggle the available list of files/documents
function Button() {
  const { toggleMenu, setToggleMenu } = useContext(ToggleMenuContext);
  
  return (
    <button
      type="button"
      id="menu-button"
      onClick={() => setToggleMenu(!toggleMenu)}
      className="btn navbar-toggler menu-btn-js}"
      disabled={!!toggleMenu}
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded={toggleMenu}
      aria-haspopup="menu"
      aria-label="Toggle menu navigation"
    >
      <img
        className={`menu-image ${toggleMenu ? "hide-icon-js" : ""}`}
        src={MenuIcon}
        aria-hidden
        width={18}
        height={12}
        alt=""
      />
      <img
        className={`close ${toggleMenu ? "" : "hide-icon-js"}`}
        src={IconClose}
        aria-hidden
        width={24}
        height={24}
        alt=""
      />
    </button>
  );
}

export default Button;
