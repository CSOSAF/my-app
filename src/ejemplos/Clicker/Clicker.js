import React, {useEffect, useState} from 'react'
import './Clicker.scss'

export const Clicker = () => {

    const [clicks, setClicks] = useState(0)

    const handleClicks = () => {
        setClicks( clicks + 1 )
    }

    useEffect(() => {
        console.log("item")
   
        return () => {
            console.log("item retornado")
        }
    }, [])

    useEffect(() => {
        console.log('Clicks actualizados')
    }, [clicks])

    return (
        <div onClick={handleClicks} className={ clicks %2 === 0 ? 'green' : 'red'}>
            <p>Clicks; {clicks}</p>
            <p>FyH: {new Date().toLocaleString()}</p>
            
        </div>


    )
}