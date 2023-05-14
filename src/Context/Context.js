import { createContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";

//when user is login these value will be updated
const INITIAL_STATE = {
    // if user is exist in localStorage take this user otherwise null
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
};

// pass initial state 
export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);

    // store user in local storage
    // whenever state.user is changes fire this useEffect
    useEffect(() => {
        // setItem("item_key", "item_value")
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user]);

    return (
        <Context.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </Context.Provider>
    )
}