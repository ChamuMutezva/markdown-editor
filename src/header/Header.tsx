import React from 'react'
import { useState } from 'react'
import IconClose from '../assets/icon-close.svg'
import MenuIcon from '../assets/icon-menu.svg'
function Header() {
    const [toggleMenu, setToggleMenu] = useState(false)
    function clickMenu(evt: React.MouseEvent<HTMLElement>) {
        console.log(evt.target)
        setToggleMenu(!toggleMenu)
    }

    return (
        <nav>
            <button
                type="button"
                onClick={clickMenu}
                className="navbar-toggler menu-btn-js"
                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={toggleMenu}
                aria-label="Toggle menu navigation">
                <img className="menu-image" src={MenuIcon} alt="" />
                <img className="close hide-icon-js" src={IconClose} alt="" />
            </button>
            <div className="collapse navbar-collapse"
                id="navbarSupportedContent">
                <ul className="navbar-nav flex">
                    <li className="nav-item uppercase">
                        <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                            aria-current="page" href="./">
                            Home
                        </a>
                    </li>
                    <li className="nav-item uppercase">
                        <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                            href="./">
                            Destination
                        </a>
                    </li>
                    <li className="nav-item uppercase">
                        <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                            href="./">
                            Crew
                        </a>
                    </li>
                    <li className="nav-item uppercase">
                        <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                            href="./">
                            Technology
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header