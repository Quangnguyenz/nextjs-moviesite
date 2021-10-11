const JustAdded = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="just-added-list">
            <h3 className="just-added-list__title">For You</h3>
            <div className="just-added-list__thumbnails">
                {loopComp(<div className="just-added-list__thumbnail">
                    <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Justiceleaguetimmartpromo.jpg" />
                    <div className="just-added-list__top-layer">
                        <i className="fas fa-play" />
                    </div>
                </div>, 10)}
            </div>
        </div>
    )
}

export default JustAdded;