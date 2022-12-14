import React, { createContext, useState } from 'react'
import { ContentTypes } from './Types'
import Data from '../assets/data.json'

const defaultState = {
    // ID: Data[0].name,   // todo: data is being obtained from json file 
    // todo: data is now being fetched from  the json file
    ID: '634a235f414b8ab9c0b700e3'
}

export const ContentContext = createContext<ContentTypes>(defaultState)

export const ContentProvider = (props: { children: any }) => {
    const [ID, setNewID] = useState(defaultState.ID)

    function selectContent(id: React.SetStateAction<string>) {
        setNewID(id)
       // console.log(ID)
    }

    return (
        <ContentContext.Provider value={{ ID, selectContent }}>
            {props.children}
        </ContentContext.Provider>
    )
}