import React, { useState, useContext, useEffect } from 'react'
import { ContentContext } from '../context/ContentContext'
import { DataTypes } from '../context/Types'
import DeleteRecord from '../assets/icon-delete.svg'
import SaveNotes from '../assets/icon-save.svg'
import Document from "../assets/icon-document.svg"
import Button from './Button'

function Header(props: {
    handleClickMenuToggle: React.MouseEventHandler<HTMLButtonElement>; toggle: boolean; data: DataTypes[],
    deleteDocument: React.MouseEventHandler<HTMLButtonElement>
}) {
    const { ID, selectContent } = useContext(ContentContext)

    function handleChangeTitle(evt: { target: any }) {
        console.log(props.data)
        selectContent?.(evt.target.value)
    }
    /*
        function handleDeleteDocument() {       
            console.log(ID)
            console.log(props.data)
            const targetItem = props.data.find(item => {
                console.log(`name - ${item.name} id - ${ID}`)
            })
            console.log(targetItem)
        }
    */
    function saveNotesChanges() {
        console.log(ID)
        props.data.map(item => {
            if (item.name === ID) {
                return {
                    ...item,
                    name: ID
                }

            }
            return item
        })
        // TODO: Get id value from input field and save it in CONST changeTitle
        // TODO: Find the current data that has been edited or with title to be changed
        // TODO: Use destructuring to update data
    }

    useEffect(() => {
        selectContent?.(ID)
    }, [ID])

    return (
        <header className="header">
            <div className="top-menu">
                <nav className="nav">
                    <Button click={props.handleClickMenuToggle} expand={props.toggle} />
                </nav>

                <div className="current-file">
                    <div className="file">
                        <img src={Document} alt="current document" />
                        <label className="document-title-wrapper">
                            <span className="sr-only show-doc-title">Document title</span>
                            <input type="text"
                                name="document-title"
                                id="document-title"
                                onChange={handleChangeTitle}
                                value={ID}
                                placeholder="Document title"
                                className="document-title" />
                        </label>
                    </div>
                    <div className="maintenance">
                        <button className="btn btn-delete"
                            onClick={props.deleteDocument}>
                            <img src={DeleteRecord} alt="" />
                            <span className="sr-only">Delete a record</span>
                        </button>
                        <button className="btn btn-save"
                            onClick={saveNotesChanges}>
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