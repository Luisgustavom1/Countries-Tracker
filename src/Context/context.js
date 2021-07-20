import { createContext } from "react";

const AppContext = createContext({
    darkMode: true,
    setToDarkMode: () => {},
    data: [],
    setToData: () => {},
    theme: {},
    setTheme: () => {},
})
export default AppContext