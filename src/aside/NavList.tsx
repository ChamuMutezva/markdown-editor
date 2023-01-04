/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useRef } from "react";
import FocusTrap from "focus-trap-react";
import NavListItem from "./NavListItem";
import ThemeControl from "./ThemeControl";
import { DataTypes } from "../context/Types";

function NavList(props: {
  data: DataTypes[];
  expand: boolean;
  handleAdd: any;
  setExpand: any;
}) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const dataList = props.data.map((item) => (
    <NavListItem
      key={item.name}
      name={item.name}
      date={item.createdAt}
      _id={item._id!}
      datum={props.data}
      setExpand={props.setExpand()}
    />
  ));

  useEffect(() => {
    if (props.expand) {
      btnRef.current?.focus();
    }
  }, [props.expand]);

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <FocusTrap active={props.expand}>
      <aside
        className={`navbar-collapse ${props.expand ? "collapse" : ""}`}
        hidden={!props.expand}
      >
        
        <h2 className="aside-main-title">Markdown</h2>
        <h3 id="menu-list-title" className="aside-secondary-title">My Documents</h3>

        <button
          ref={btnRef}
          type="button"
          className="btn btn-add-document"
          onClick={props.handleAdd}
        >
          + New Document
        </button>
        <ul
          className="navbar-nav flex"
          id="navbarSupportedContent"
          aria-labelledby="menu-button"
          role="menu"
        >
          {dataList}
        </ul>

        <ThemeControl />
        
        <button type="button"
        className="btn btn-close-theme"
        onClick={props.setExpand()}
        >
          Close menu
        </button>
      </aside>
    </FocusTrap>
  );
}

export default NavList;
