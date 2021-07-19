import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Nav from '../styles/Buttons/navBack'
import PageDescription from '../styles/PageDescription'
import {Aside} from '../styles/aside'
import {Border} from '../styles/Buttons/Border'
import AppContext from '../Context/context'

export default function Description(){
    const teste = true
    const {data} = useContext(AppContext)
    const {areaParam} = useParams()
    const [newData, setNewData] = useState([])
    console.log(areaParam)
    console.log(data)
    useEffect(() => {
        setNewData(data.filter((country) => {
            return `:${country.area}` == areaParam && true
        }))
    },[])
    console.log(newData)
    return(
        <>
            <PageDescription>
                {newData.map((countrie) => {
                    return <>
                                <Link to="/">
                                <Nav teste={teste}>
                                    <i class="fas fa-arrow-left"></i>
                                    <p>Back</p>
                                </Nav>
                            </Link>
                            <img src='https://restcountries.eu/data/afg.svg' alt='Bandeira do pais'></img>
                
                            <Aside teste={teste}>
                                <div>
                                    <h1>{newData.name}</h1>
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
                            </>
                })}              
            </PageDescription>
        </>
    )
}