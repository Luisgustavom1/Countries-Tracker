import { createContext } from "react";

const AppContext = createContext({
    darkMode: false,
    setToDarkMode: () => {},
    data: [],
    setToData: () => {},
})
export default AppContext