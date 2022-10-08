import React, { useState } from 'react'
import Showdown from 'showdown'
import ShowPreview from '../assets/icon-show-preview.svg'
import HidePreview from '../assets/icon-hide-preview.svg'
import ReactMde from 'react-mde'
import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
})

function MainComponent() {
    const [markdownPreview, setMarkdownPreview] = useState(false)

    const text = `# Frontend Mentor - In-browser markdown editor solution\n\nThis is a solution to the 
    [In-browser markdown editor challenge on
         Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9).
          Frontend Mentor challenges help you improve your coding skills by building realistic projects.
           \n\n## Table of contents\n\n- [Overview](#overview)\n  - [The challenge](#the-challenge)\n 
            - [Screenshot](#screenshot)\n  - [Links](#links)\n- [My process](#my-process)\n  
            - [Built with](#built-with)\n  - [What I learned](#what-i-learned)\n 
             - [Continued development](#continued-development)\n  
             - [Useful resources](#useful-resources)\n- 
             [Author](#author)\n\n## Overview\n\n### The challenge\n\nUsers should be able
              to:\n\n- Create, Read, Update, and Delete markdown documents\n-
               Name and save documents to be accessed as needed\n- Edit the markdown of a document 
               and see the formatted preview of the content\n- View a full-page preview of the formatted
                content\n- View the optimal layout for the app depending on their device's screen 
                size\n- See hover states for all interactive elements on the page\n- 
                **Bonus**: If you're building a purely front-end project, use localStorage to save
                 the current state in the browser that persists when the browser is refreshed\n- **Bonus**:
                  Build this project as a full-stack application\n\n### 
                  Screenshot\n\n![screenshot](https://github.com/remyboire/markdowneditor/blob/main/screenshot.jpg?raw=true)\n\n### 
                  Links\n\n- Solution URL: [Github](https://github.com/remyboire/markdowneditor)\n-
                   Live Site URL: [Github Page](https://remyboire.github.io/markdowneditor/)\n\n## My process\n\n###
                    Built with\n\n- [React](https://reactjs.org/) - JS library\n\n\n### 
                    What I learned\n\nI took [Bob's Ziroll](https://twitter.com/bobziroll) 
                    amazing [Learn React Course](https://scrimba.com/learn/learnreact) on scrimba last week
                     and this challenge was perfect for me to practice every notion I learned. 
                     I was the first time I build a React app from scratch and I learned a lot about components,
                      props, states, localstorage, effects, dark mode (even if I didn't spend much time on it) 
                      etc.\nI tried to add a few functionalities like the possibility to download your document 
                      once saved, or delete a doc by clicking the icon on the sidebar (when the sidebar is open,
                         the button in the header was hidden).\n\n\n### Continued development\n\nI didn't care much 
                         about CSS and I feel like my code isn't very great, but it wasn't the purpose of this
                          challenge for me. In the future, when I'll forget about my code, 
                           I'd like to rework on this project to improve it and see if it's clear enough for someone else.
                            I use React-mde package and would like to replace it and code my own solution for the editor.
                             \nSaving with cmd+S would be a nice little feature to add too.\n\n### Useful
                              resources\n\n- [Scrimba - learn react for free](https://scrimba.com/learn/learnreact) -
                               This course is very great and really fits my learning method.\n\n## Author\n\n- 
                               Website - [Rémy Boiré](https://www.remyboirefr)\n- 
                               Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/remyboire)\n\n`;

    const [value, setValue] = useState(text)
    const [selectedTab, setSelectedTab] = React.useState<"write" | "preview">("write");
    function toggleMarkDown() {
        setMarkdownPreview(!markdownPreview)
        setSelectedTab(selectedTab === 'write' ? 'preview' : 'write')
    }
    return (
        <main className="main editor-container">
            <div className="preview-toggle">
                <div className="markdown-selector">
                    <p className="markdown-content">
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
            <div className={'react-mde-wrapper ' + selectedTab}>
                <ReactMde
                    loadingPreview={<div>Loading...</div>}
                    value={value}
                    onChange={setValue}
                    selectedTab={selectedTab}
                    onTabChange={setSelectedTab}
                    generateMarkdownPreview={markdown =>
                        Promise.resolve(converter.makeHtml(markdown))
                    }
                />               
            </div>
        </main>
    )
}

export default MainComponent