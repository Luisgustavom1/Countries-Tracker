import { useContext } from 'react'
import AppContext from '../Context/context'
import Header from '../styles/header'
export default function HeaderComponent(){
    const {darkMode, setToDarkMode} = useContext(AppContext)
    async function changeTheme(){
        await setToDarkMode(!darkMode)
        console.log(darkMode)
    }
    return(
        <Header darkMode={darkMode}>
            <div class="container">
                <p>Where in the world?</p>
                <div onClick={() => changeTheme()}>
                    <i class="fas fa-moon"></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </Header>
    )
}