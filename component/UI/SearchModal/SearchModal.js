import { useStateContext } from "../../HBOProvider";
import { useEffect, useState } from 'react';
import axios from 'axios';

const SearchModal = (props) => {
    const globalState = useStateContext();
    const [popData, setPopData] = useState([])
    const [searchData, setSearchData] = useState([])
    const [showResults, setShowResults] = useState(false)
    const [text, setText] = useState('')

    useEffect(async () => {
        try {
            let popData = await axios.get('https://api.themoviedb.org/3/discover/movie?primary_release_year=2021&api_key=1f3708ab08ebaadf0ef295924a2b4ac3');

            setPopData(popData.data.results.filter((item, i) => i < 14))

            setShowResults(false)
            console.log('popdata', popData.data.results)

        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        if (globalState.searchOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [globalState.searchOpen])

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