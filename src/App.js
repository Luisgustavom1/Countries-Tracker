import {useContext, useState} from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import colors from './styles/colors'

import Header from './components/header'
import Cards from './components/cards'

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PageDescription from './components/PageDescription'
import AppProvider from './Context/provider'
import AppContext from './Context/context'
import light from './styles/Theme/light'
import dark from './styles/Theme/dark'

const GlobalStyle = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.background};
  }
  html{
    font-family: 'Nunito Sans', sans-serif;
  }
  button, input, textarea{
    outline: none;
    border: none;
  }
  a, li, ul, ol{
    text-decoration: none;
  }
`

function App() {
  const {theme, setTheme} = useContext(AppContext)

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header />
          <BrowserRouter>
            <Switch>
              <Route path='/' component={Cards} exact/>
              <Route path='/country/:areaParam' component={PageDescription} />
            </Switch>
          </BrowserRouter>
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
