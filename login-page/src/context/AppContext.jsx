import React from "react";
import { createContext, useState} from "react";


export const AppContext = createContext();

export const AppProvider = props => {
    const [userDetails, setUserDetails] = useState({});
    
    return (
        <AppProvider.Provider
        value={[userDetails, setUserDetails]}
        >
            {props.children}
        </AppProvider.Provider>
    )
}