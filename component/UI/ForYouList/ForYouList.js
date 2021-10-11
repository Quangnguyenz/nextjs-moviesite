const ForYouList = (props) => {
    const loopComp = (comp, digit) => {
        let thumbnails = [];
        for (let index = 0; index < digit; index++) {
            thumbnails.push(comp)
        }
        return thumbnails;
    }
    return (
        <div className="foryou-list">
            <h3 className="foryou-list__title">For You</h3>
            <div className="foryou-list__thumbnails">
                {loopComp(<div className="foryou-list__thumbnail">
                    <img src="https://cdn.vox-cdn.com/thumbor/SqsU_EmUY0QR_Dpl-IM3eFGFOBE=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/61905501/Teen_titans.0.png" />
                    <div className="foryou-list__top-layer">
                        <i className="fas fa-play" />
                    </div>
                </div>, 10)}
            </div>
        </div>
    )
}

export default ForYouList;