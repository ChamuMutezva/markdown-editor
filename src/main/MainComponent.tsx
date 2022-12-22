import React, { useContext, useState, useEffect } from 'react'
import MarkdownView from 'react-showdown'
import { ContentContext } from '../context/ContentContext'

import ShowPreview from '../assets/icon-show-preview.svg'
import HidePreview from '../assets/icon-hide-preview.svg'
import { DataTypes } from '../context/Types'

function MainComponent(props: { data: DataTypes[] }) {

    const { ID, markdownContent, setMarkdownContent } = useContext(ContentContext)
    //  console.log(props.data)
    const targetData = props.data && props.data.find((item: { name: string }) => item.name === ID)

    // const [content, setContent] = useState(props.data[1].content)
    // const [content, setContent] = useState(targetData!.content) : causing error
    const [markdownPreview, setMarkdownPreview] = useState(false)
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    useEffect(() => {
        setMarkdownContent?.(props.data[1].content)
    }, [])

    function handleChange(evt: { target: any }) {
        // setContent(evt.target.value)
        setMarkdownContent?.(evt.target.value)
    }

    function toggleMarkDown() {
        setMarkdownPreview(!markdownPreview)
        setSelectedTab(selectedTab === 'write' ? 'preview' : 'write')
    }

    useEffect(() => {
        if (targetData?.content !== undefined) {
            // setContent(targetData?.content)
            setMarkdownContent?.(targetData?.content)
        }
    }, [ID])

    return (
        <main className="main editor-container">
            <div className="preview-toggle">

                <p className={`markdown-toggle-heading ${markdownPreview ? "hide-markdown-heading hide-markdown-preview" : ""}`}>
                    Markdown
                </p>
                <p className={`markdown-toggle-heading ${markdownPreview ? "" : "hide-markdown-heading"}`}>
                    Preview
                </p>

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
                            value={markdownContent}
                            onChange={handleChange}>
                        </textarea>
                    </form>
                </div>
                <div className={`result ${markdownPreview ? "result-container" : ""}`}>
                    <MarkdownView
                        markdown={markdownContent!}
                        options={{ tables: true, emoji: true }}
                    />
                </div>
            </div>
        </main>
    )
}

export default MainComponent