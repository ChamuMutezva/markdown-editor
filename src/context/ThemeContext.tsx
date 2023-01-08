/* eslint-disable react/destructuring-assignment */
import  { createContext, useState } from 'react'
import { ThemeTypes } from './Types'

const  defaultState = {
    theme: true,
    setTheme: () => true 
}

export const ThemeContext = createContext<ThemeTypes>(defaultState)

export function ThemeProvider(props: { children: any }) {   
    const [theme, setTheme] = useState(defaultState.theme)  

    return (
        // eslint-disable-next-line react/jsx-no-constructed-context-values, react/jsx-no-comment-textnodes
        <ThemeContext.Provider value={{ theme, setTheme }}>           
            {props.children}
        </ThemeContext.Provider>
    )
}