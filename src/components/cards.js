import React, { useContext } from 'react'
import AppContext from '../Context/context'
import Cards from '../styles/cardsCountries'
import InputAndOption from './inputAndOption'

export default function CardsCountrie(){
    const DarkMode = true
    const {data} = useContext(AppContext)
    return(
        <>
            <InputAndOption/>
            <Cards DarkMode={DarkMode}>
                {data.map(country => {
                    return  <div>
                                <img src={country.flag} alt='Bandeira do país'></img>
                                <section>
                                    <h1>{country.name}</h1>
                                    <p><strong>Population:</strong> {country.population}</p>
                                    <p><strong>Region:</strong> {country.region}</p>
                                    <p><strong>Capital:</strong> {country.capital}</p>
                                </section>
                            </div>
                })}
               
            </Cards>
        </>
    )
}