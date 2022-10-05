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
                <NavListItem link="untitled-document.md" date="1 April 2022" />
                <NavListItem link="welcome.md" date="1 April 2022"/>
                <NavListItem link="readme.md" date="2 April 2022" />
            </ul>
        </aside>
    )
}

export default NavList