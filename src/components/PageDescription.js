import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Nav from '../styles/Buttons/navBack'
import PageDescription from '../styles/PageDescription'
import {Aside} from '../styles/aside'
import {Border} from '../styles/Buttons/Border'
import AppContext from '../Context/context'

export default function Description(){
    const {data, darkMode} = useContext(AppContext)
    const {areaParam} = useParams()
    const [newData, setNewData] = useState([])
    useEffect(() => {
        setNewData(data.filter((country) => {
            return `:${country.area}` == areaParam && true
        }))
    },[])
    return(
        <>
            <PageDescription>
                {newData.map((countrie) => {
                    return <>
                            <Link to="/">
                                <Nav darkMode={darkMode}>
                                    <i class="fas fa-arrow-left"></i>
                                    <p>Back</p>
                                </Nav>
                            </Link>
                            <img src={countrie.flag} alt='Bandeira do pais'></img>
                
                            <Aside>
                                <div>
                                    <h1>{countrie.name}</h1>
                                    <p><strong>Native Name</strong> {countrie.nativeName}</p>
                                    <p><strong>Population</strong> {countrie.population}</p>
                                    <p><strong>Region</strong> {countrie.region}</p>
                                    <p><strong>Sub Region</strong> {countrie.subregion}</p>
                                    <p><strong>Capital</strong> {countrie.capital}</p>
                                </div>
                                <div style={{marginTop: '52px'}}>
                                    <p><strong>Top Level Domain</strong> {countrie.topLevelDomain[0]}</p>
                                    <p><strong>Currencies</strong> {countrie.currencies[0].name}</p>
                                    <p><strong>Languages</strong> {countrie.languages[0].name}</p>
                                </div>
                                <footer>
                                    Border Countries: 
                                    {countrie.borders.map(border => {
                                        return <Border darkMode={darkMode}>{border}</Border>
                                    })}
                                </footer>
                            </Aside>
                            </>
                })}              
            </PageDescription>
        </>
    )
}