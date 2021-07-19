import React from 'react'
import { Link } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Nav from '../styles/navBack'
import PageDescription from '../styles/PageDescription'
import Button from '../styles/button'

export default function Description(){
    const teste = true
    return(
        <PageDescription>
            <Link to="/">
                <ThemeProvider theme={Button}>
                        <Nav teste={teste}>
                            <i class="fas fa-arrow-left"></i>
                            <p>Back</p>
                        </Nav>
                </ThemeProvider>
            </Link>
            <img src='https://restcountries.eu/data/afg.svg' alt='Bandeira do pais'></img>
        </PageDescription>
    )
}