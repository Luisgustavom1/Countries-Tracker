import Header from '../styles/header'

export default function HeaderComponent(props){
    return(
        <Header>
            <div class="container">
                <p>Where in the world?</p>
                <div onClick={() => props.changeTheme()}>
                    <i class="fas fa-moon"></i>
                    <p>Dark Mode</p>
                </div>
            </div>
        </Header>
    )
}