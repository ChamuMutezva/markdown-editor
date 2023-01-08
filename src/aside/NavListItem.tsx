/* eslint-disable react/destructuring-assignment */
import { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { ToggleMenuContext } from "../context/ToggleMenuContext";
import { DataTypes } from "../context/Types";

function NavListItem(props: {
  name: string;
  date: string;
  _id: string;
  datum: DataTypes[]; 
}) {
  const { ID, changeContent, setTitle, setMarkdownContent } =
    useContext(ContentContext);
const {toggleMenu, setToggleMenu} = useContext(ToggleMenuContext)
  function handleBtnClick(id: string) {
    if (id !== ID) {
      // when passed id is not equal to the current ID , get this particular item and reset the current item to be in view
      // reset the ID and `name` to be viewed  in the heading and the content for the markdown
      const targetItem = props.datum.find((data) => data._id === id);
      changeContent?.(id);
      setTitle?.(targetItem?.name!);
      setMarkdownContent?.(targetItem?.content!);
      setToggleMenu(toggleMenu);
    }
  }
  // console.log(`The value of expand is ${props.expand}`)

  return (
    <li className="nav-item uppercase">
      <button
        type="button"
        role="menuitem"
        className="btn nav-link ff-barlow text-white letter-spacing-2 fs-14"
        data-name={props.name}
        onClick={() => handleBtnClick(props._id)}       
      >
        <span className="doc-nav-title">
          <span className="sr-only">Title of file</span>
          {props.name}
        </span>
        <span className="date-created">
          <span className="sr-only">Date created</span>
          <time dateTime={props.date}>{props.date}</time>         
        </span>
      </button>
    </li>
  );
}

export default NavListItem;
