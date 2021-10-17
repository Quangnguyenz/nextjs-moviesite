const FeaturedMedia = (props) => {
    const clickPlay = () => {
        console.log('send user to media page')
    }
    return (
        <div className="featured-media">
            <iframe className="featured-media__video"
                width="100%"
                height="100%"
                src={props.videoUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
            <div className="featured-media__bg">
                <div className="featured-media__container">
                    <div className="featured-media__title" onClick={clickPlay}>{props.title}</div>
                    <div className="featured-media__playing">NOW PLAYING</div>
                    <div className="featured-media__location">{props.location}</div>
                    <div className="featured-media__buttons">
                        <div className="featured-media__play-btn" onClick={clickPlay}>
                            <i className="fas fa-play" />
                        </div>
                        <div className="featured-media__info-btn" onClick={clickPlay}>MORE INFO</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedMedia;