import {useEffect, useState} from 'react'

export default function useLastCountry(key, value){
    const [state, setState] = useState(() => {
        const getLocalStorage = localStorage.getItem(key)
        if(getLocalStorage){
            return JSON.parse(getLocalStorage)
        }else{
            return value
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}