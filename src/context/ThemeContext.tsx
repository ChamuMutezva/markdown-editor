import  { createContext, useState, useEffect } from 'react'
import { ThemeTypes } from './Types'

const  defaultState = {
    theme: true,
}

export const ThemeContext = createContext<ThemeTypes>(defaultState)

export const ThemeProvider = (props: { children: any }) => {   
    const [theme, setTheme] = useState(defaultState.theme)
   
    function onChangeTheme() {
         setTheme(!theme)
    }

    return (
        <ThemeContext.Provider value={{ theme, onChangeTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}