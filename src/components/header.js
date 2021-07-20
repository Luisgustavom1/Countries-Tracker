import { useContext } from 'react'
import AppContext from '../Context/context'
import Header from '../styles/header'

export default function HeaderComponent(){
    const {theme, setTheme} = useContext(AppContext)
    const changeTheme = () => {
        setTheme(!theme.title)
    }

    return(
        <Header>
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