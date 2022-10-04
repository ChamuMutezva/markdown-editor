import React from 'react'
import NavListItem from './NavListItem'

function NavList(props: { expand: boolean }) {
    return (
        <aside className={`navbar-collapse ${props.expand ? "collapse" : ""}`}
            id="navbarSupportedContent">
            <h2>Markdown</h2>
            <h3>My Documents</h3>
            <button>
                New Document
            </button>
            <ul className="navbar-nav flex">
                <NavListItem link="untitled-document.md" />
                <NavListItem link="welcome.md" />
                <NavListItem link="readme.md" />
            </ul>
        </aside>
    )
}

export default NavList