import React, { createContext, useEffect, useState } from 'react'
import { ContentTypes } from './Types'
// import { useLoadData } from '../component/LoadData'

const defaultState = {
    // ID: Data[0].name, 
    ID: '634a235f414b8ab9c0b700e3'
}

export const ContentContext = createContext<ContentTypes>(defaultState)

export const ContentProvider = (props: { children: any }) => {
    
    const [ID, setNewID] = useState(defaultState.ID)
    const [title, setTitle] = useState('Welcome.md')
    const [markdownContent, setMarkdownContent] = useState('')
   
    function changeContent(id: React.SetStateAction<string>) {
        // id is used to control the items to be viewed , 
        // when the id has changed so as the heading and content should change
        setNewID(id)
    }
    
    useEffect(() => {
        setNewID(ID)       
    }, [ID])
    
    return (
        <ContentContext.Provider value={{ ID, changeContent, title, setTitle, markdownContent, setMarkdownContent }}>
            {props.children}
        </ContentContext.Provider>
    )
}