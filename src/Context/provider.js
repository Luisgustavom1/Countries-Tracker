import { useState } from "react";
import AppContext from "./context";

export default function AppProvider({children}){
    const [darkMode, setDarkMode] = useState(true)
    const [data, setData] = useState([])
    function setToDarkMode(value){
        setDarkMode(value)
    }
    function setToData(value){
        setData(value)
    }
    return(
        <AppContext.Provider value={{darkMode, setToDarkMode, data, setToData}}>
            {children}
        </AppContext.Provider>
    )
}