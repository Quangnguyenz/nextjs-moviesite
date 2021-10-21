import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";

const Account = (props) => {
    const globalState = useStateContext();
    // const loopComp = (comp, digit) => {
    //     let thumbnails = [];
    //     for (let index = 0; index < digit; index++) {
    //         thumbnails.push(comp)
    //     }
    //     return thumbnails;
    // }

    useEffect(() => {
        if (globalState.accountModalOpen) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }
    }, [globalState.accountModalOpen])


    return (
        <div className={`account ${globalState.accountModalOpen ? "account--active" : ""}`}>
            <div className="account__details">
                <div className="account__title">My List</div>
                <div className="account__watch-list">
                    <div className="account__watch-video">
                        <img src="https://cdn.vox-cdn.com/thumbor/SqsU_EmUY0QR_Dpl-IM3eFGFOBE=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/61905501/Teen_titans.0.png" />
                        <div className="account__watch-overlay">
                            <div className="account__watch-buttons">
                                <div className="account__watch-circle">
                                    <i className="fas fa-play" />
                                </div>
                                <div className="account__watch-circle">
                                    <i className="fas fa-times" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account__menu">
                <ul className="account__main">
                    <li>
                        <a href="/" className="active">My List</a>
                    </li>
                </ul>
                <div className="side-nav__divider" />
                <ul className="account__main">
                    <li>
                        <a href="/">Account</a>
                    </li>
                    <li>
                        <a href="/">Sign Out</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Account;