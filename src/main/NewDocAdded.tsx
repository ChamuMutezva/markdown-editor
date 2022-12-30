/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from 'react'
import FocusTrap from "focus-trap-react";

function NewDocAdded(props: { createDoc: boolean; documentCreatedMethod: React.MouseEventHandler<HTMLButtonElement> }) {
    const btnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (props.createDoc) {
          btnRef.current?.focus();
        }
      }, [props.createDoc]);

    return (
        <div className={`modal-wrapper ${props.createDoc ? "show-modal" : ""} `}>
              <FocusTrap active={props.createDoc}>
            <div className='delete-confirmation'>
                <h4 className="modal-heading">New document created</h4>
                <p className="modal-text">
                    New document has been created and added to the database
                </p>
                <button type='button' ref={btnRef} className="btn btn-confirm-exit"
                    onClick={props.documentCreatedMethod}>
                    Exit page
                </button>
            </div>
            </FocusTrap>
        </div>
    )
}

export default NewDocAdded