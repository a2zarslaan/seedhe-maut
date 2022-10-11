import { createContext, useReducer, useEffect } from "react";

import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

import {createAction} from'../utils/reducer/reducer.utils'

//actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',
}

const INITIAL_STATE = {
    currentUser: null,
}

const userReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state, 
                currentUser: payload,
            };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
}

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE);
    console.log(currentUser)
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    }
    
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        
        //clean up fn
        return unsubscribe;
    },[]);

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}