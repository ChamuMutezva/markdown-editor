/* eslint-disable react/destructuring-assignment */
import React, { useContext } from 'react'
import { ContentContext } from '../context/ContentContext'
import IconClose from '../assets/icon-close.svg'

function ConfirmDelete(props: {
    exitWithoutDeleting: React.MouseEventHandler<HTMLButtonElement>;
    deleteModal: boolean;
    confirmDelete: React.MouseEventHandler<HTMLButtonElement>
}) {
    const { title} = useContext(ContentContext)
    return (
        <div className={`modal-wrapper ${props.deleteModal ? "show-modal" : ""} `}>
            <div className='delete-confirmation'>
                <button type='button' className='delete-close' onClick={props.exitWithoutDeleting}>
                    <img src={IconClose} alt="Close without deleting page" />
                </button>

                <h4 className="modal-heading">Delete this document?</h4>
                <p className="modal-text">
                    Are you sure you want to delete the <span className="modal-text-ID">{title}</span> document
                    and its contents? This action cannot be reversed.
                </p>
                <button  type='button' className="btn-confirm-delete"
                    onClick={props.confirmDelete}>
                    Confirm & Delete
                </button>
            </div>
        </div>
    )
}

export default ConfirmDelete