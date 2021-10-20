import { useState, useEffect } from "react";
import axios from "axios";


const CastInfo = (props) => {
    const [loadingData, setLoadingData] = useState(true);
    const [credits, setCredits] = useState([]);

    // https://api.themoviedb.org/3/tv/63174/credits?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/${props.mediaType === 'movie' ? 'movie' : 'tv'}/${props.mediaId}/credits?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

            .then(function (response) {
                setCredits(response.data)
                setLoadingData(false)
                console.log(response)

            })
            .catch(function (error) {
                // handle error
                console.log("error for cast and crew section")
                console.log(error);

            })
    }, [credits])

    console.log(credits.cast)

    const showCast = () => {
        if (loadingData !== true) {
            return credits.cast.map((item) => {
                return (
                    <ul className="cast-info__crew">
                        <li>
                            {item.character}
                        </li>
                        <li>
                            {item.name}
                        </li>
                    </ul>)
            })
        } else {
            <div>loading cast</div>
        }
    }

    const showCrew = () => {
        if (loadingData !== true) {
            return credits.crew.map((item) => {
                return (
                    <ul className="cast-info__crew">
                        <li>
                            {item.job}
                        </li>
                        <li>
                            {item.name}
                        </li>
                    </ul>)
            })
        } else {
            <div>loading cast</div>
        }
    }


    return (
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast
            </div>
            <div className="cast-info__list">
                {showCast()}
            </div>
            <div className="cast-info__group-title">
                Crew
            </div>
            <div className="cast-info__list">
                {showCrew()}
            </div>
        </div>
    )

}


export default CastInfo;
