import { createContext } from "react";

const AppContext = createContext({
    data: null,
    setToData: () => {},
})
export default AppContext