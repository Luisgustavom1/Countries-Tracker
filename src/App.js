import { createGlobalStyle } from 'styled-components'
import colors from './styles/colors'

import HeaderComponent from './components/header'
import Cards from './components/cards'

import {useContext} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageDescription from './components/PageDescription'
import AppProvider from './Context/provider'
import AppContext from './Context/context'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{
    font-family: 'Nunito Sans', sans-serif;
    color: ${props => props.darkMode === true ? colors.white : colors.LightModeInput};                
  }
  button, input, textarea{
    outline: none;
    border: none;
  }
  input{
    background-color: ${props => props.darkMode == false ? colors.LightModeBackground :  colors.DarkModeElements};
    ;
    color: ${props => props.darkMode == true ? colors.white : colors.LightModeText};                
    ::-webkit-input-placeholder{
      color: ${props => props.darkMode == true ? colors.white : colors.LightModeInput};                
    }
  }
  a, li, ul, ol{
    text-decoration: none;
  }
  main{
    background-color: ${props => props.darkMode === false ? colors.LightModeBackground : colors.DarkModeBackground};
    min-height: 100vh;
  }
  nav{
    color: ${props => props.darkMode == true ? colors.white : colors.LightModeInput};                
  }
`

function App() {
  const {darkMode} = useContext(AppContext)

  return (
    <AppProvider>
      <GlobalStyle darkMode={darkMode} colors={colors}/>
      <HeaderComponent></HeaderComponent>
      <main>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={Cards} exact/>
            <Route path='/country/:areaParam' component={PageDescription} />
          </Switch>
        </BrowserRouter>
      </main>
    </AppProvider>
  );
}

export default App;
