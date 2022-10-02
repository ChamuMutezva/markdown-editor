import React, { useState } from 'react'
import ShowPreview from '../assets/icon-show-preview.svg'
import HidePreview from '../assets/icon-hide-preview.svg'
function MainComponent() {
    const [markdown, setMarkdown] = useState(false)
    function toggleMarkDown() {
        setMarkdown(!markdown)
    }
    return (
        <main className="main">
            <div className="preview">
                <div className="markdown-selector">
                    <p className="markdown-content">
                        {markdown ? "Markdown" : "Preview"}
                    </p>
                </div>
                <button className="btn btn-preview" onClick={toggleMarkDown}>
                    <img className={`${markdown ? "" : "hide-markdown"}`}
                        src={ShowPreview}
                        alt=""
                    />
                    <img className={`${markdown ? "hide-markdown" : ""}`}
                        src={HidePreview}
                        alt=""
                    />
                </button>
            </div>
        </main>
    )
}

export default MainComponent