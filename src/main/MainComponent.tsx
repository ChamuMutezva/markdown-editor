import React, { useContext, useState, useEffect } from 'react'
import MarkdownView from 'react-showdown'
import { ContentContext } from '../context/ContentContext'

import ShowPreview from '../assets/icon-show-preview.svg'
import HidePreview from '../assets/icon-hide-preview.svg'
import { DataTypes } from '../context/Types'
//import data from '../assets/data.json'


function MainComponent(props: { data: DataTypes[] }) {

    const { ID } = useContext(ContentContext)
    const targetData = props.data.find((item: { name: string }) => item.name === ID)
    // console.log(targetData)
    const [content, setContent] = useState(props.data[1].content)
    const [markdownPreview, setMarkdownPreview] = useState(false)
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");


    function handleChange(evt: { target: { value: React.SetStateAction<string> } }) {
        setContent(evt.target.value)
    }

    function toggleMarkDown() {
        setMarkdownPreview(!markdownPreview)
        setSelectedTab(selectedTab === 'write' ? 'preview' : 'write')
    }

    useEffect(() => {
        if (targetData?.content !== undefined) {
            setContent(targetData?.content)
        }
    }, [ID])

    return (
        <main className="main editor-container">
            <div className="preview-toggle">
                <div className="markdown-selector">
                    <p className="markdown-toggle-heading">
                        {markdownPreview ? "Preview" : "Markdown"}
                    </p>
                </div>
                <button
                    className="btn btn-preview"
                    onClick={toggleMarkDown}
                    aria-pressed={markdownPreview ? "true" : "false"}>
                    <img className={`${markdownPreview ? "" : "hide-markdown"}`}
                        src={markdownPreview ? HidePreview : ShowPreview}
                        alt="Show preview"
                    />
                </button>
            </div>
            <div className={`container ${markdownPreview ? "markdown-preview" : "markdown-write"}`}>
                <div className={`editor ${markdownPreview ? "editor-form-container" : ""}`}>
                    <form>
                        <textarea name="markdown"
                            id="markdown-content"
                            className="markdown-content"
                            value={content}
                            onChange={handleChange}>
                        </textarea>
                    </form>
                </div>
                <div className={`result ${markdownPreview ? "result-container" : ""}`}>
                    <MarkdownView
                        markdown={content}
                        options={{ tables: true, emoji: true }}
                    />
                </div>
            </div>
        </main>
    )
}

export default MainComponent