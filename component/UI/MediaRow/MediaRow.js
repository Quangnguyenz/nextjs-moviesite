import { useState, useEffect } from 'react';
import axios from 'axios';

const MediaRow = (props) => {
    const [loadingData, setLoadingData] = useState(true)

    useEffect(() => {
        axios
            .get('/user?ID=12345')

            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }, [])

    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }

    const showThumbnails = () => {
        setTimeout(() => setLoadingData(false), 3000);
        return loadingData
            ? loopComp(<Skeleton />, 10)
            : loopComp(<Thumbnail />, 10)
    }

    return (
        <div className={`media-row ${props.type}`}>
            <h3 className="media-row__title">{props.title}</h3>
            <div className="media-row__thumbnails">
                {showThumbnails()}

            </div>
        </div>
    )
}

const Thumbnail = () => {
    return (<div className="media-row__thumbnail">
        <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Justiceleaguetimmartpromo.jpg" />
        <div className="media-row__top-layer">
            <i className="fas fa-play" />
        </div>
    </div>)
}

const Skeleton = () => {
    return (
        <div className="media-row__thumbnail-skeleton">
            <div className="media-row__thumbnail-skeleton-img" />
        </div>)
}

export default MediaRow;