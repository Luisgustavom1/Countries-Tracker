import React, { useContext, useEffect, useState } from 'react'
import AppContext from '../Context/context'

import InputAndOption from '../styles/inputAndOption'

export default function InputAndOptionComponente(){
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')
    const {data, setToData} = useContext(AppContext)

    useEffect(() => {
        let pesquisa = ''
        if(search == ''){
            pesquisa = 'all'
        } else {
            pesquisa = `name/${search}`
        }
        fetch(`https://restcountries.eu/rest/v2/${pesquisa}`)
            .then(res => {
                if(!res.ok){
                    throw Error(res.statusText)
                }
                return res.json()
            })
            .then(dados => setToData(dados))
            .catch(err => console.log(err))
            console.log(data)
    },[search])

    return(
        <InputAndOption>
            <div className='input'>
                <i class="fas fa-search" style={{color: `${props => props.theme.colors.text};
                `}}></i>
                <input type='text' placeholder='Search for a country...' value={search} onChange={(e) => setSearch(e.target.value)}></input>
            </div>
            <div className='options'>
                <select id='countries' onChange={e => setFilter(e.target.value)}  placeholder='Filter by Region'in>
                    <option value='All'>All</option>
                    <option value='África'>África</option>
                    <option value='América'>América</option>
                    <option value='Europe'>Europe</option>
                    <option value='Ásia'>Ásia</option>
                    <option value='Oceania'>Oceania</option>
                </select>
            </div>
        </InputAndOption>
    )
}