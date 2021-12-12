import React, { useState, useContext } from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('');
    const defaultUserImage = 'https://static-media-prod-cdn.itsre-sumo.mozilla.net/static/sumo/img/default-FFA-avatar.png'
    const createUserAction = (e) => {
        setUser(e.target.value)
    }

    // open side nav state
    const [sideNavOpen, setSideNavOpenAction] = useState(false);
    const [accountModalOpen, setAccountModalOpenAction] = useState(false);
    const [searchOpen, setSearchOpenAction] = useState(false);
    const [watchList, setWatchList] = useState(ls.get('myList'))

    const addToList = (video) => {
        let myList;
        if (ls('myList') !== null) {
            myList = ls.get('myList')
            myList.push(video)
            ls.set('myList', myList)
            setWatchList(myList);
        } else {
            ls.set('myList', [video])
        }
    }

    const removeFromList = (videoId) => {
        let myList = ls('myList');
        myList = myList.filter((item) => item.mediaId != videoId)
        ls.set('myList', myList)
        setWatchList(myList)
    }

    const thumbTypes = ['large-v', 'small-v', 'large-h', 'small-h']

    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImage,
                sideNavOpen,
                setSideNavOpenAction,
                accountModalOpen,
                setAccountModalOpenAction,
                searchOpen,
                setSearchOpenAction,
                thumbTypes,
                removeFromList,
                addToList,
                watchList
            }}>
            {children}
        </StateContext.Provider>
    )
}
