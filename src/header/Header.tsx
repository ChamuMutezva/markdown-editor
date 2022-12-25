import React, { useState, useContext, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";
import { DataTypes } from "../context/Types";
import DeleteRecord from "../assets/icon-delete.svg";
import SaveNotes from "../assets/icon-save.svg";
import Document from "../assets/icon-document.svg";
import Logo from "../assets/logo.svg";
import Button from "./Button";

function Header(props: {
  saveNewChanges: React.MouseEventHandler<HTMLButtonElement>;
  handleClickMenuToggle: React.MouseEventHandler<HTMLButtonElement>;
  toggle: boolean;
  data: DataTypes[];
  deleteDocument: React.MouseEventHandler<HTMLButtonElement>;
}) {
  const { ID, changeContent, title, setTitle } = useContext(ContentContext);

  function handleChangeTitle(evt: { target: any }) {
    setTitle?.(evt.target.value);
  }

  useEffect(() => {
    changeContent?.(ID);
  }, [ID]);

  return (
    <header className="header">
      <div className="top-menu">
        <nav className="nav">
          <Button click={props.handleClickMenuToggle} expand={props.toggle} />
        </nav>

        <div className="current-file">
          <div className="file">
            <img
              className="logo-img"
              src={Logo}
              alt=""
              width={130}
              height={12}
            />

            <img
              src={Document}
              className="document-img"
              alt="current document"
              width={14}
              height={16}
            />
            <label className="document-title-wrapper">
              <span className="sr-only show-doc-title">Document title</span>
              <input
                type="text"
                name="document-title"
                id="document-title"
                onChange={handleChangeTitle}
                value={title}
                placeholder="Document title"
                className="document-title"
              />
            </label>
          </div>
          <div className="maintenance">
            <button className="btn btn-save" onClick={props.saveNewChanges}>
              <img
                src={SaveNotes}
                className="notes-img"
                alt=""
                width={17}
                height={17}
              />
              <span className="sr-only show-btn-text">Save changes</span>
            </button>
            <button className="btn btn-delete" onClick={props.deleteDocument}>
              <img src={DeleteRecord} width={18} height={20} alt="" />
              <span className="sr-only">Delete a record</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
