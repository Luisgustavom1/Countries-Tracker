import React, { useContext } from 'react'
import AppContext from '../Context/context'
import Cards from '../styles/cardsCountries'
import InputAndOption from './inputAndOption'

import {Link} from 'react-router-dom'
export default function CardsCountrie(){
    const {data} = useContext(AppContext)
    return(
        <>
            <InputAndOption/>
            <Cards>
                {data.map(country => {
                    return  <Link to={`/country/:${country.area}`}>
                                <div id={country.area}>
                                    <img src={country.flag} alt='Bandeira do país'></img>
                                    <section>
                                        <h1>{country.name}</h1>
                                        <p><strong>Population:</strong> {country.population}</p>
                                        <p><strong>Region:</strong> {country.region}</p>
                                        <p><strong>Capital:</strong> {country.capital}</p>
                                    </section>
                                </div>
                            </Link>
                })}
               
            </Cards>
        </>
    )
}