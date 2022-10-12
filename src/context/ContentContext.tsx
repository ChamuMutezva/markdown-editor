import React, { createContext, useState } from 'react'
import { ContentTypes } from './Types'

const defaultState = {
    ID: 'readme.md',
}

export const ContentContext = createContext<ContentTypes>(defaultState)

export const ContentProvider = (props: { children: any }) => {
    const [ID, setNewID] = useState(defaultState.ID)
    
    function selectContent(id: React.SetStateAction<string>) {
        setNewID(id)
    }

    return (
        <ContentContext.Provider value={{ ID, selectContent }}>
            {props.children}
        </ContentContext.Provider>
    )
}