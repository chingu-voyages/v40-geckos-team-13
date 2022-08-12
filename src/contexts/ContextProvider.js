import { createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    return (
        <StateContext.Provider value={{ /* whatever value is passed here, will be available throughout this whole application */ }}>
        { children }
        </StateContext.Provider>
    )
}

export default StateContext;