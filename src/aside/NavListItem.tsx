/* eslint-disable react/destructuring-assignment */
import { useContext } from "react";
import { ContentContext } from "../context/ContentContext";
import { DataTypes } from "../context/Types";

function NavListItem(props: {
  name: string;
  date: string;
  _id: string;
  datum: DataTypes[];  
  setExpand: any;
}) {

  const { ID, changeContent, setTitle, setMarkdownContent } =
    useContext(ContentContext);

  function handleBtnClick(id: string) {
    if (id !== ID) {
      // when passed id is not equal to the current ID , get this particular item and reset the current item to be in view
      // reset the ID and `name` to be viewed  in the heading and the content for the markdown
      const targetItem = props.datum.find((data) => data._id === id);    
      changeContent?.(id);
      setTitle?.(targetItem?.name!);
      setMarkdownContent?.(targetItem?.content!);  
      props.setExpand()    
    }
   
  }
  // console.log(`The value of expand is ${props.expand}`)

  return (
    <li className="nav-item uppercase">
      <button
      type="button"
        className="btn nav-link ff-barlow text-white letter-spacing-2 fs-14"
        data-name={props.name}
        onClick={() => handleBtnClick(props._id)}
        aria-current="page"
      >
        <span className="doc-nav-title">{props.name}</span>
        <span className="date-created">{props.date}</span>
      </button>
    </li>
  );
}

export default NavListItem;
