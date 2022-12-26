/* eslint-disable react/destructuring-assignment */
import React from 'react'

function NewDocAdded(props: { createDoc: boolean; documentCreatedMethod: React.MouseEventHandler<HTMLButtonElement> }) {
    return (
        <div className={`modal-wrapper ${props.createDoc ? "show-modal" : ""} `}>
            <div className='delete-confirmation'>
                <h4 className="modal-heading">New document created</h4>
                <p className="modal-text">
                    New document has been created and added to the database
                </p>
                <button type='button' className="btn-confirm-delete"
                    onClick={props.documentCreatedMethod}>
                    Exit page
                </button>
            </div>
        </div>
    )
}

export default NewDocAdded