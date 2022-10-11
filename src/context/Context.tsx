import React, { createContext, useState, useEffect } from 'react'
import { ThemeTypes } from './Types'

const  defaultState = {
    theme: false,
}

export const DataContext = createContext<ThemeTypes>(defaultState)

export const DataProvider = (props: { children: any }) => {   
    const [theme, setTheme] = useState(defaultState.theme)
   

    function onChangeTheme() {
         setTheme(!theme)
    }

    return (
        <DataContext.Provider value={{ theme, onChangeTheme }}>
            {props.children}
        </DataContext.Provider>
    )
}