import { useStateContext } from "../../HBOProvider";
import Link from "next/link";
import { useEffect } from "react";

const SideNav = (props) => {
    const globalState = useStateContext();

    useEffect(() => {
        if (globalState.sideNavOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [globalState.sideNavOpen])

    return (
        <div className={`side-nav ${globalState.sideNavOpen ? "side-nav--active" : ""}`}>
            <div className="side-nav__close-btn" onClick={() => globalState.setSideNavOpenAction(false)}>
                <i className="fas fa-times"></i>
            </div>
            <ul className="side-nav__main">
                <Link href="/">
                    <li onClick={() => globalState.setSideNavOpenAction(false)}>
                        <a className="active">
                            Home
                        </a>
                    </li>
                </Link>
                <Link href="/movie">
                    <li onClick={() => globalState.setSideNavOpenAction(false)}>
                        <a href="/movie" className="active">
                            movies
                        </a>
                    </li>
                </Link>
                <Link href="/tv">
                    <li onClick={() => globalState.setSideNavOpenAction(false)}>
                        <a className="active">
                            Series
                        </a>
                    </li>
                </Link>
            </ul>
        </div>
    )
}

export default SideNav;