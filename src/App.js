import { createGlobalStyle } from 'styled-components'
import colors from './styles/colors'

import HeaderComponent from './components/header'
import Cards from './components/cards'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageDescription from './components/PageDescription'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Nunito Sans', sans-serif;
  }
  button, input, textarea{
    outline: none;
    border: none;
  }
  input{
    background-color: ${props => props.Dark == true ? colors.DarkModeElements : colors.white};
    color: ${props => props.Dark == true ? colors.white : colors.LightModeText};                
    ::-webkit-input-placeholder{
      color: ${props => props.Dark == true ? colors.white : colors.LightModeInput};                
    }
  }
  a, li, ul, ol{
    text-decoration: none;
  }
  main{
    background-color: ${props => props.Dark == true ? colors.DarkModeBackground : colors.LightModeBackground};
    min-height: 100vh;
  }
`

function App() {
  const Dark = true 
  return (
    <>
      <GlobalStyle Dark={Dark}/>
      <HeaderComponent></HeaderComponent>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Cards} exact/>
            <Route path='/country' component={PageDescription} />
          </Switch>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
