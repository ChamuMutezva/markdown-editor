// import Document from "../assets/icon-document.svg"

function NavListItem(props: { link: string; date: string }) {
    return (
        <li className="nav-item uppercase">
            <a className="nav-link ff-barlow text-white letter-spacing-2 fs-14"
                href="./"
                aria-current="page" >
                <span className="doc-nav-title">
                    {props.link}
                </span>
                <span className="date-created">
                    {props.date}
                </span>
            </a>
        </li>
    )
}

export default NavListItem