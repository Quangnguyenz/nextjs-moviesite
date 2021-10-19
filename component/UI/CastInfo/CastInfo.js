import { useState, useEffect } from "react";
import axios from "axios";


const CastInfo = (props) => {
    const [loadingData, setLoadingData] = useState(true);
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${props.mediaId}/credits?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

            .then(function (response) {
                setCredits(response.data.results)
                setLoadingData(false)
                console.log(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log("error for cast and crew section")
                console.log(error);

            })
    }, [])

    const showCast = () => {
        return (credits.cast.map(() => {
            return (
                <ul className="cast-info__crew">
                    <li>
                        John
                    </li>
                    <li>
                        Cameron Lin
                    </li>
                </ul>)
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
                <ul className="cast-info__crew">
                    <li>
                        John
                    </li>
                    <li>
                        Cameron Lin
                    </li>
                </ul>
            </div>
        </div>
    )
}


export default CastInfo;

//     const MediaRow = (props) => {
//         const [loadingData, setLoadingData] = useState(true)
//         const [movies, setMoviesData] = useState([])

//         useEffect(() => {
//             axios
//                 .get(`https://api.themoviedb.org/3/movie/${props.mediaId}/credits?&api_key=1f3708ab08ebaadf0ef295924a2b4ac3&language=en-US`)

//                 .then(function (response) {
//                     setMoviesData(shuffleArray(response.data.results))
//                     setLoadingData(false)
//                     console.log(response)
//                 })
//                 .catch(function (error) {
//                     // handle error
//                     console.log(error);
//                 })
//         }, [])

//         const loopComp = (comp, digit) => {
//             let thumbnails = [];
//             for (let index = 0; index < digit; index++) {
//                 thumbnails.push(comp)
//             }
//             return thumbnails;
//         }

//         const showThumbnails = (type) => {
//             return loadingData
//                 ? loopComp(<Skeleton />, 10)
//                 : movies.map((movie) => {
//                     console
//                     return <Thumbnail movieData={movie} type={type} />
//                 })
//         }


//         return (
//             <div className={`media-row ${props.type}`}>
//                 <h3 className="media-row__title">{props.title}</h3>
//                 <div className="media-row__thumbnails">
//                     {showThumbnails(props.type)}

//                 </div>
//             </div>
//         )
//     }

//     const Thumbnail = (props) => {

//         const thumbSize = (type) => {
//             if (type === 'large-v') {
//                 return '400';
//             }
//             if (type === 'small-v') {
//                 return '185';
//             }
//             if (type === 'large-h') {
//                 return '500';
//             }
//             if (type === 'small-h') {
//                 return '342';
//             }
//         }
//         return (
//             <Link href={`/movie/${props.movieData.id}`}>
//                 <a> <div className="media-row__thumbnail">

//                     <img src={`https://image.tmdb.org/t/p/w${thumbSize(props.type)}/${props.movieData.poster_path}`} />
//                     <div className="media-row__top-layer">
//                         <i className="fas fa-play" />
//                     </div>
//                 </div></a>
//             </Link>
//         )
//     }

//     const Skeleton = () => {
//         return (
//             <div className="media-row__thumbnail-skeleton">
//                 <div className="media-row__thumbnail-skeleton-img" />
//             </div>)
//     }
// }