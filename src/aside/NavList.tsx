import React from 'react'
import NavListItem from './NavListItem'
import ThemeControl from './ThemeControl'
import { DataTypes } from '../context/Types';

function NavList(props: { data: DataTypes[]; expand: boolean; handleAdd: any }) {
    /*
    function handleBtnAddDoc(evt: React.MouseEvent<HTMLElement>) {
        console.log(evt)
        const docObject: DataTypes = {
            name: "document12",
            content: "# new document",
            createdAt: "15-10-2022"
        }
    }
*/
    const dataList = props.data.map(item => <NavListItem
        key={item.name}
        name={item.name}
        date={item.createdAt}
        content={item.content}
        _id={item._id!}
        datum={props.data} />)

    return (
        <aside className={`navbar-collapse ${props.expand ? "collapse" : ""}`}
            hidden={!props.expand}
            id="navbarSupportedContent"
            role="menu">
            <h2 className="aside-main-title">Markdown</h2>
            <h3 className="aside-secondary-title">My Documents</h3>
            <button className="btn btn-add-document"
                onClick={props.handleAdd}>
                + New Document
            </button>
            <ul className="navbar-nav flex">
                {dataList}
            </ul>
            <ThemeControl />
        </aside>
    )
}

export default NavList