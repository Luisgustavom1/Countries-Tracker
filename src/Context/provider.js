import { useState } from "react";
import AppContext from "./context";
import dark from '../styles/Theme/dark'

export default function AppProvider({children}){
    const [darkMode, setDarkMode] = useState(true)
    const [data, setData] = useState([])
    const [theme, setTheme] = useState({dark})
    function setToDarkMode(value){
        setDarkMode(value)
    }
    function setToData(value){
        setData(value)
    }
    return(
        <AppContext.Provider value={{darkMode, setToDarkMode, data, setToData, theme, setTheme}}>
            {children}
        </AppContext.Provider>
    )
}