import { createContext } from "react";

const AppContext = createContext({
    data: [],
    setToData: () => {},
})
export default AppContext