import React, { useState, useContext } from 'react';
import ls from 'local-storage';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('');
    const defaultUserImage = 'https://images.generated.photos/4J6p5QAjLZwO8tjLiAfsHfHXlHHU3hPjqHqnmuK7tSk/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MDM5ODg3LmpwZw.jpg'
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
