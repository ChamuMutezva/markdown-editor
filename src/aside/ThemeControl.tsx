import React, { useContext } from "react";
import LightMode from "../assets/icon-light-mode.svg";
import DarkMode from "../assets/icon-dark-mode.svg";
import { ThemeContext } from "../context/ThemeContext";

function ThemeControl() {
  const { theme, setTheme } = useContext(ThemeContext);

  const onChange = () => {
    setTheme(!theme);    
  };

  return (
    <button
      type="button"
      role="switch"
      className="btn btn-theme-control"
      aria-checked={theme}
      aria-label="toggle dark mode"
      onClick={onChange}
    >
      <span className="check">
        <span className="theme-icons">
          <img
            className={`light-theme-img ${theme ? "hide-theme-img" : ""}`}
            src={DarkMode}
            aria-hidden
            alt=""
          />
          <img
            className={`dark-theme-img ${theme ? "" : "hide-theme-img"}`}
            src={LightMode}
            aria-hidden
            alt=""
          />
        </span>
      </span>
    </button>
  );
}

export default ThemeControl;
