import React from 'react'

function NavListItem(props: { link: string }) {
    return (
        <li className="nav-item uppercase">
            <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                aria-current="page" href="./">
                {props.link}
            </a>
        </li>
    )
}

export default NavListItem