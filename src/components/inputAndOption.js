import React from 'react'

import colors from '../styles/colors'
import InputAndOption from '../styles/inputAndOption'

export default function InputAndOptionComponente(){
    const Mode = true
    return(
        <InputAndOption Mode={Mode}>
            <div className='input'>
                {/* <img src={lupa} alt='Icon lupa'></img> */}
                <i class="fas fa-search" style={{color: `${Mode == true ? colors.white : colors.LightModeInput}`}}></i>
                <input type='text' placeholder='Search for a country...'></input>
            </div>
            <div className='options'>
                <input list='countries' type='text' id='countriesInput' placeholder='Filter by Region'></input>
                <datalist id='countries'>
                    <option value='África'>África</option>
                    <option value='América'>América</option>
                    <option value='Europe'>Europe</option>
                    <option value='Ásia'>Ásia</option>
                    <option value='Oceania'>Oceania</option>
                </datalist>
            </div>
        </InputAndOption>
    )
}