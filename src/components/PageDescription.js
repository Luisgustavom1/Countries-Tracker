import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../styles/Buttons/navBack'
import PageDescription from '../styles/PageDescription'
import {Aside} from '../styles/aside'
import {Border} from '../styles/Buttons/Border'

export default function Description(){
    const teste = true
    return(
        <PageDescription>
            <Link to="/">
                <Nav teste={teste} style={{width: '120px', height: '30px'}} >
                    <i class="fas fa-arrow-left"></i>
                    <p>Back</p>
                </Nav>
            </Link>
            <img src='https://restcountries.eu/data/afg.svg' alt='Bandeira do pais'></img>

            <Aside teste={teste}>
                <div>
                    <h1>Afeganistão</h1>
                    <p><strong>Native Name</strong> Afeganistã</p>
                    <p><strong>Population</strong> Afeganistã</p>
                    <p><strong>Region</strong> Asia</p>
                    <p><strong>Sub Region</strong> Western Asia</p>
                    <p><strong>Capital</strong> Afeganistão</p>
                </div>
                <div style={{marginTop: '52px'}}>
                    <p><strong>Top Level Domain</strong> Afeganistã</p>
                    <p><strong>Currencies</strong> Afeganistã</p>
                    <p><strong>Languages</strong> Asia</p>
                </div>
                <footer>
                    Border Countries 
                    <Border teste={teste}>France</Border>
                    <Border teste={teste}>France</Border>
                    <Border teste={teste}>France</Border>
                </footer>
            </Aside>
        </PageDescription>
    )
}