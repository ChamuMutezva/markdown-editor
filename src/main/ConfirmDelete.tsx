import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'

function ConfirmDelete(props: { deleteModal: boolean }) {
    const { ID } = useContext(ContentContext)
    return (
        <div className={`modal-wrapper ${props.deleteModal ? "" : "show-modal"}`}>
            <div className='delete-confirmation'>
                <h3 className="modal-heading">Delete this document?</h3>
                <p className="modal-text">
                    Are you sure you want to delete the <span className="modal-text-ID">{ID}</span> document
                    and its contents? This action cannot be reversed.
                </p>
                <button>
                    Confirm & Delete
                </button>
            </div>
        </div>
    )
}

export default ConfirmDelete