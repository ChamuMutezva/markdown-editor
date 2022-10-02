import React, { createContext, useState, useEffect } from 'react'
export const DataContext = createContext({})

export const DataProvider = (props: { children: string | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal }) => {
    const [toggleMenu, setToggleMenu] = useState(false)
    function clickMenu(evt: React.MouseEvent<HTMLElement>) {
        console.log(evt.target)
        setToggleMenu(!toggleMenu)
    }

    return (
        <DataContext.Provider value={{ toggleMenu, setToggleMenu , clickMenu}}>
            {props.children}
        </DataContext.Provider>
    )
}