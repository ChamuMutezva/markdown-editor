import React from 'react'
import DeleteRecord from '../assets/icon-delete.svg'
import SaveNotes from '../assets/icon-save.svg'
import Document from "../assets/icon-document.svg"
import Button from './Button'
// import NavList from '../aside/NavList'
function Header(props: { click: React.MouseEventHandler<HTMLButtonElement>; toggle: boolean }) {
   

    return (
        <header className="header">
            <div className="top-menu">
                <nav className="nav">
                    {/*  <NavList expand={toggleMenu} /> */}
                    <Button click={props.click} expand={props.toggle} />
                </nav>

                <div className="current-file">
                    <div className="file">
                        <img src={Document} alt="current document" />
                        <span>Welcome.md</span>
                    </div>
                    <div className="maintenance">
                        <button className="btn btn-delete">
                            <img src={DeleteRecord} alt="" />
                            <span className="sr-only">Delete a record</span>
                        </button>
                        <button className="btn btn-save">
                            <img src={SaveNotes} alt="" />
                            <span className="sr-only">Save changes</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header