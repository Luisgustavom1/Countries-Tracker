import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/context'

import InputAndOption from '../styles/inputAndOption'

export default function InputAndOptionComponente(){
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('all')
    const {data, setToData} = useContext(AppContext)

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/${filter}`)
            .then(res => {
                if(!res.ok){
                    throw Error(res.statusText)
                }
                return res.json()
            })
            .then(dados => {
                if(search){
                    setToData(dados.filter(dado => dado.name.toLowerCase().includes(search.toLowerCase())))
                    return
                }
                setToData(dados)
            })
            .catch(err => console.log(err))
            console.log(data)
            console.log(filter)
    },[search, filter])

    return(
        <InputAndOption>
            <div className='input'>
                <i class="fas fa-search" style={{color: `${props => props.theme.colors.text};
                `}}></i>
                <input type='text' placeholder='Search for a country...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            <div className='options'>
                <select id='countries' onChange={e => setFilter(e.target.value)}  placeholder='Filter by Region'in>
                    <option value='all'>All</option>
                    <option value='region/Africa'>Africa</option>
                    <option value='region/Americas'>América</option>
                    <option value='region/Europe'>Europe</option>
                    <option value='region/Asia'>Ásia</option>
                    <option value='region/Oceania'>Oceania</option>
                </select>
            </div>
        </InputAndOption>
    )
}