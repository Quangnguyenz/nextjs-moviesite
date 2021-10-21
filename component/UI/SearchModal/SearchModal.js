import { useStateContext } from "../../HBOProvider";

const SearchModal = (props) => {
    const globalState = useStateContext();
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className={`search-modal ${globalState.searchOpen ? "search-modal--active" : ""}`}>
            <div className="search-modal__input-group">
                <input type="text" className="search-modal__input" placeholder="Search for a title" />
                <div className="search-modal__close-btn" onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}>
                    <i className="fas fa-times"></i>
                </div>
            </div>
            <h3 className="search-modal__title">
                Popular Searches
            </h3>
            <div className="search-modal__thumbnails">
                <div className="search-modal__thumbnail">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Justiceleaguetimmartpromo.jpg" />
                    <div className="search-modal__top-layer">
                        <i className="fas fa-play" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchModal;