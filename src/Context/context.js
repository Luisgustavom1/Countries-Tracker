import { createContext } from "react";

const AppContext = createContext({
    DarkMode: false,
    setToDarkMode: () => {},
    Search: null,
    setToSearch: () => {},
})
export default AppContext