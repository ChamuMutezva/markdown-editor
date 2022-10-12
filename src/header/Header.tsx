import React, { useState, useContext, useEffect } from 'react'
import { ContentContext } from '../context/ContentContext'
import DeleteRecord from '../assets/icon-delete.svg'
import SaveNotes from '../assets/icon-save.svg'
import Document from "../assets/icon-document.svg"
import Button from './Button'

function Header(props: { click: React.MouseEventHandler<HTMLButtonElement>; toggle: boolean }) {
    const { ID } = useContext(ContentContext)
    const [changeTitle, setChangeTitle] = useState(ID)
    function handleChange(evt: { target: any }) {
        console.log(evt.target)
        setChangeTitle(evt.target.value)
    }

    useEffect(() => {
        setChangeTitle(ID)
    }, [ID])

    return (
        <header className="header">
            <div className="top-menu">
                <nav className="nav">
                    <Button click={props.click} expand={props.toggle} />
                </nav>

                <div className="current-file">
                    <div className="file">
                        <img src={Document} alt="current document" />
                        <label className="document-title-wrapper">
                            <span className="sr-only show-doc-title">Document title</span>
                            <input type="text"
                                name="document-title"
                                id="document-title"
                                onChange={handleChange}
                                value={changeTitle}
                                placeholder="Document title"
                                className="document-title" />
                        </label>
                    </div>
                    <div className="maintenance">
                        <button className="btn btn-delete">
                            <img src={DeleteRecord} alt="" />
                            <span className="sr-only">Delete a record</span>
                        </button>
                        <button className="btn btn-save">
                            <img src={SaveNotes} alt="" />
                            <span className="sr-only show-btn-text">Save changes</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header