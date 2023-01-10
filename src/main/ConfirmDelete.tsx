/* eslint-disable react/destructuring-assignment */
import React, { useContext, useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import { ContentContext } from "../context/ContentContext";
import IconClose from "../assets/icon-close.svg";

function ConfirmDelete(props: {
  exitWithoutDeleting: React.MouseEventHandler<HTMLButtonElement>;
  deleteModal: boolean;
  confirmDelete: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { title } = useContext(ContentContext);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (props.deleteModal) {
      btnRef.current?.focus();
    }
  }, [props.deleteModal]);
  return (
    <div className={`modal-wrapper ${props.deleteModal ? "show-modal" : ""} `}>
      <FocusTrap active={props.deleteModal}>
        <div className="delete-confirmation">
          <button
            type="button"
            className="btn delete-close"
            onClick={props.exitWithoutDeleting}
          >
            <img src={IconClose} alt="Close without deleting page" />
          </button>

          <h4 id="modal-heading-delete" className="modal-heading">
            Delete this document?
          </h4>
          <p id="modal-heading-text" className="modal-text">
            Are you sure you want to delete the{" "}
            <span className="modal-text-ID">{title}</span> document and its
            contents? This action cannot be reversed.
          </p>
          <button
            type="button"
            aria-labelledby="modal-heading-text"
            className="btn btn-confirm-delete"
            onClick={props.confirmDelete}
          >
            Confirm & Delete
          </button>
        </div>
      </FocusTrap>
    </div>
  );
}

export default ConfirmDelete;
