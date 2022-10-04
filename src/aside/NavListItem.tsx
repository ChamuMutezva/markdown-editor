import Document from "../assets/icon-document.svg"

function NavListItem(props: { link: string }) {
    return (
        <li className="nav-item uppercase">
            <button className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                aria-current="page" >
                <img src={Document} alt="" />
                {props.link}
            </button>
        </li>
    )
}

export default NavListItem