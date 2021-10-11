import React, { useState, useContext } from 'react';

export const StateContext = React.createContext();

export function useStateContext() {
    return useContext(StateContext);
}

export function HBOProvider({ children }) {
    const [user, setUser] = useState('');
    const defaultUserImage = 'https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg'
    const createUserAction = (e) => {
        setUser(e.target.value)
    }
    return (
        <StateContext.Provider
            value={{
                user,
                createUserAction,
                defaultUserImage,
            }}>
            {children}
        </StateContext.Provider>
    )
}
