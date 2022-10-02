import React from 'react'
import NavListItem from './NavListItem'

function NavList(props: { expand: boolean }) {
    return (
        <aside className={`navbar-collapse ${props.expand ? "collapse" : ""}`}
            id="navbarSupportedContent">
            <ul className="navbar-nav flex">
                <NavListItem link="home" />
                <NavListItem link="Destination" />
                <NavListItem link="Crew" />
            </ul>
        </aside>
    )
}

export default NavList