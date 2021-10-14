import Account from "../Account/Account"
import SearchModal from "../SearchModal/SearchModal";
import { useStateContext } from "../../HBOProvider";

const Header = (props) => {
    const globalState = useStateContext();
    return (
        <header className="top-header">
            <div className="top-header__left-side">
                <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className="top-header__search-btn" >
                    <i className="fas fa-search"></i>
                </div>

            </div>
            <div className="top-header__logo"></div>
            <div className="top-header__account">
                <img src="https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg" className="top-header__user-img" />
                <div className="top-header__username">Lance</div>
            </div>
            <Account />
            <SearchModal />
        </header>
    )
}

export default Header;