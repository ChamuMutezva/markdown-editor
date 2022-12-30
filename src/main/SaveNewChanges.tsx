/* eslint-disable react/destructuring-assignment */
import React, { useContext, useEffect, useRef } from 'react'
import FocusTrap from 'focus-trap-react'
import { ContentContext } from '../context/ContentContext'
import IconClose from '../assets/icon-close.svg'

function SaveNewChangesComponent(props: {
    exitWithoutSaving: React.MouseEventHandler<HTMLButtonElement>,
    confirmSaveNewChanges: React.MouseEventHandler<HTMLButtonElement>,
    saveEdits: boolean
}) {
    const { title } = useContext(ContentContext)
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (props.saveEdits) {
          btnRef.current?.focus();
        }
      }, [props.saveEdits]);
    return (
        <div className={`modal-wrapper ${props.saveEdits ? "show-modal" : ""} `}>
            <FocusTrap active={props.saveEdits}>
            <div className='delete-confirmation'>
                <button type='button' ref={btnRef} className='btn delete-close' onClick={props.exitWithoutSaving} >
                    <img src={IconClose} alt="Close without saving page" />
                </button>

                <h4 className="modal-heading">This document has been edited</h4>
                <p className="modal-text">
                    Are you sure you want to save the edited <span className="modal-text-ID">{title}</span> document
                    and its contents? This action cannot be reversed.
                </p>
                <button type='button'  className="btn btn-confirm-save-changes"
                    onClick={props.confirmSaveNewChanges}>
                    Save Edits
                </button>
            </div>
            </FocusTrap>
        </div>
    )
}

export default SaveNewChangesComponent