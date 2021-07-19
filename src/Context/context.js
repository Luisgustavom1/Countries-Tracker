import { createContext } from "react";

const AppContext = createContext({
    darkMode: true,
    setToDarkMode: () => {},
    data: [],
    setToData: () => {},
})
export default AppContext