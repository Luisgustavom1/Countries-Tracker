import moon from '../image/moon.png'
import Header from '../styles/header'
export default function HeaderComponent(){
    const Darks = true
    return(
        <Header Darks = {Darks}>
            <div class="container">
                <p>Where in the world?</p>
                <div>
                    <i class="fas fa-moon"></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </Header>
    )
}