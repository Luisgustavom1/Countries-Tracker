import { useState } from "react";
import AppContext from "./context";

export default function AppProvider({children}){
    const [data, setData] = useState([])
    function setToData(value){
        setData(value)
    }
    return(
        <AppContext.Provider value={{data, setToData}}>
            {children}
        </AppContext.Provider>
    )
}