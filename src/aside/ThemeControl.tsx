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
        <fieldset className="radio-switch">

            <legend> Settings </legend>

            <input type="radio"
                name="themes"
                id="dark"
                onChange={onChange}
            />
            <label htmlFor="dark">
                <span className="sr-only">Dark mode</span>
                <img className="theme__img" src={DarkMode} alt="" />
            </label>

            <input type="radio"
                name="themes"
                id="light"
                onChange={onChange}
            />
            <label htmlFor="light">
                <span className="sr-only">Light mode</span>
                <img className="theme__img" src={LightMode} alt="" />
            </label>
        </fieldset>
    )
}

export default ThemeControl