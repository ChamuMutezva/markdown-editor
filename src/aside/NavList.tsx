import React from 'react'
import NavListItem from './NavListItem'
import ThemeControl from './ThemeControl'

function NavList(props: { data: any[]; expand: any }) {
    function handleBtnAddDoc(evt: React.MouseEvent<HTMLElement>) {
        console.log(evt)
    }
    const dataList = props.data.map(item => <NavListItem key={item.name} name={item.name} date={item.createdAt}
        content={item.content} datum={props.data} />)

    return (
        <aside className={`navbar-collapse ${props.expand ? "collapse" : ""}`}
            id="navbarSupportedContent"
            role="menu">
            <h2 className="aside-main-title">Markdown</h2>
            <h3 className="aside-secondary-title">My Documents</h3>
            <button className="btn btn-add-document"
                onClick={handleBtnAddDoc}>
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