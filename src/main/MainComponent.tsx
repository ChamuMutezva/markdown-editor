import React, { useState } from 'react'
import MarkdownView from 'react-showdown'
import ShowPreview from '../assets/icon-show-preview.svg'
import HidePreview from '../assets/icon-hide-preview.svg'
import data from '../assets/data.json'


function MainComponent() {
    const [content, setContent] = useState(data[1].content)
    const [markdownPreview, setMarkdownPreview] = useState(false)
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    function handleChange(evt: { target: { value: React.SetStateAction<string> } }) {
        setContent(evt.target.value)
    }
    function toggleMarkDown() {
        setMarkdownPreview(!markdownPreview)
        setSelectedTab(selectedTab === 'write' ? 'preview' : 'write')
    }
    return (
        <main className="main editor-container">
            <div className="preview-toggle">
                <div className="markdown-selector">
                    <p className="markdown-toggle-heading">
                        {markdownPreview ? "Preview" : "Markdown"}
                    </p>
                </div>
                <button className="btn btn-preview" onClick={toggleMarkDown}>
                    <img className={`${markdownPreview ? "" : "hide-markdown"}`}
                        src={markdownPreview ? ShowPreview : HidePreview}
                        alt="Show preview"
                    />
                </button>
            </div>
            <div className="container">
                <div className="editor">
                    <form>
                        <textarea name="markdown"
                            id="markdown-content"
                            className="markdown-content"
                            value={content}
                            onChange={handleChange}>
                        </textarea>
                    </form>
                </div>
                <div className="result">
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