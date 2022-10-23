import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'

function ConfirmDelete(props: {
    deleteModal: boolean;
    confirmDelete: React.MouseEventHandler<HTMLButtonElement>
}) {
    const { ID } = useContext(ContentContext)
    return (
        <div className={`modal-wrapper ${props.deleteModal ? "show-modal" : ""} `}>
            <div className='delete-confirmation'>
                <h4 className="modal-heading">Delete this document?</h4>
                <p className="modal-text">
                    Are you sure you want to delete the <span className="modal-text-ID">{ID}</span> document
                    and its contents? This action cannot be reversed.
                </p>
                <button className="btn-confirm-delete"
                    onClick={props.confirmDelete}>
                    Confirm & Delete
                </button>
            </div>
        </div>
    )
}

export default ConfirmDelete