import { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import Data from '../assets/data.json'

function NavListItem(props: { link: string; date: string }) {
    const { ID, selectContent } = useContext(ContentContext)

    function handleBtnClick(id: string) {       
       
        if (id !== ID) {
            selectContent?.(id)
            console.log(ID)
        }
       // const target = Data.find(item => item.name === id)
       // console.log(target?.content)
    }

    return (
        <li className="nav-item uppercase">
            <button className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                data-name={props.link}
                onClick={() => handleBtnClick(props.link)}
                aria-current="page" >
                <span className="doc-nav-title">
                    {props.link}
                </span>
                <span className="date-created">
                    {props.date}
                </span>
            </button>
        </li>
    )
}

export default NavListItem