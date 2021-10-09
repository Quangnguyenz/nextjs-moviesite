const FeaturedMedia = (props) => {
    return (
        <div className="featured-media">
            <iframe className="featured-media__video"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/NYH2sLid0Zc?autoplay=1&mute=1&loop=1&start=16"
                frameborder='0'
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
            />
        </div>
    )
}

export default FeaturedMedia;