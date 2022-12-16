import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'
import IconClose from '../assets/icon-close.svg'

function SaveNewChangesComponent(props: {
    exitWithoutSaving: React.MouseEventHandler<HTMLButtonElement>,
    confirmSaveNewChanges: React.MouseEventHandler<HTMLButtonElement>,
    saveEdits: boolean
}) {
    const { ID, title } = useContext(ContentContext)
    return (
        <div className={`modal-wrapper ${props.saveEdits ? "show-modal" : ""} `}>
            <div className='delete-confirmation'>
                <button className='delete-close' onClick={props.exitWithoutSaving} >
                    <img src={IconClose} alt="Close without saving page" />
                </button>

                <h4 className="modal-heading">This document has been edited</h4>
                <p className="modal-text">
                    Are you sure you want to save the edited <span className="modal-text-ID">{title}</span> document
                    and its contents? This action cannot be reversed.
                </p>
                <button className="btn-confirm-delete"
                    onClick={props.confirmSaveNewChanges}>
                    Save Edits
                </button>
            </div>
        </div>
    )
}

export default SaveNewChangesComponent