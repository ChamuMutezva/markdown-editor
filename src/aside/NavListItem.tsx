import { useContext, useEffect } from "react";
import { ContentContext } from "../context/ContentContext";
import { DataTypes } from "../context/Types"

function NavListItem(props: { name: string; date: string; content: string; _id: string; datum: DataTypes[] }) {
    const { ID, selectContent } = useContext(ContentContext)

    function handleBtnClick(id: string) {
        if (id !== ID) {
            selectContent?.(id)
           // console.log(ID)
            //props.datum.map(item => console.log(item._id))
        }
    }

   // useEffect(() => {
       // const targetData = props.datum.find(target => ID === target.name)
       // console.log(targetData)
   // }, [ID])

    return (
        <li className="nav-item uppercase">
            <button className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                data-name={props.name}
                onClick={() => handleBtnClick(props.name)}
                aria-current="page" >
                <span className="doc-nav-title">
                    {props.name}
                </span>
                <span className="date-created">
                    {props.date}
                </span>
            </button>
        </li>
    )
}

export default NavListItem