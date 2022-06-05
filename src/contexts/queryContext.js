import { createContext } from "react";
import { useQuery } from "../hooks/useQuery";

export const queryContext = createContext()
export function QueryProvider({children}){
    const {state, getData} = useQuery()
    return(
        <queryContext.Provider value={{state, getData}} >
            {children}
        </queryContext.Provider>
    )
}
