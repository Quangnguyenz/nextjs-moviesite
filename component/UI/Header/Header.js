import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from "../../HBOProvider";
import Link from 'next/link'

const Header = (props) => {
    const globalState = useStateContext();
    return (
        <header className={`top-header ${(globalState.accountModalOpen || globalState.sideNavOpen) ? "top-header__menu-open" : ""}`}>
            <div className="top-header__left-side">
                <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="top-header__search-btn" onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}>
                    <i className="fas fa-search"></i>
                </div>
            </div>
            <Link href="/">
                <a><div className="top-header__logo"></div></a>
            </Link>
            <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
                <img src="https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="top-header__user-img" />
                <div className="top-header__username">Lance</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header;