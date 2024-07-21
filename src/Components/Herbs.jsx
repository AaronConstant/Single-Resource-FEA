import { useState, useEffect } from 'react'
import Herb from './Herb'
import '../Styles/herbs.scss'

const API = import.meta.env.VITE_API_URL

const Herbs = () => {
    const [herbs, setHerbs] = useState([])

    useEffect(() => {
        fetch(`${API}/herbs`)
        .then(res => res.json())
        .then(res => {setHerbs(res)})
        .catch(err => console.log(err))
    }, [])


    return (
        <div className='herbs'>
            {herbs.map((herb) => {
                return <Herb key={herb.id} herb={herb} id={herb.id} />
            })}
        </div>
    )
}


export default Herbs