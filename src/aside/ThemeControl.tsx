import React, { useContext, useState } from 'react'
import LightMode from "../assets/icon-light-mode.svg"
import DarkMode from "../assets/icon-dark-mode.svg"
import { ThemeContext } from '../context/ThemeContext'
function ThemeControl() {

    const { theme, onChangeTheme } = useContext(ThemeContext)

    const onChange = () => {
        onChangeTheme?.(theme)
    }

    return (
        <button className='btn btn-theme-control' aria-pressed={theme} onClick={onChange}>
            <span className='sr-only'>{"light theme"}</span>
            <img className={`light-theme-img ${theme ? "hide-theme-img" : ""}`} src={DarkMode} alt="" />
            <img className={`dark-theme-img ${theme ? "" : "hide-theme-img"}`} src={LightMode} alt="" />
        </button>
    )
}

export default ThemeControl