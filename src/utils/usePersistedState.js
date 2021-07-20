import {useState, useEffect} from 'react'

export default function usePersistedState(key, value){
    const [state, setState] = useState(() => {
        const valueLocalStorage = localStorage.getItem(key)
        if(valueLocalStorage){
            return JSON.parse(valueLocalStorage)
        } else {
            return value
        }
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, key])

    return [state, setState]
}