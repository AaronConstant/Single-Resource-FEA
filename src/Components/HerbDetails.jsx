import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


const API = import.meta.env.VITE_API_URL

const HerbDetails = () => {
    const { id } = useParams()
    const [herbDetails, setHerbDetails] = useState([])

    
    useEffect(() => {

        fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(res => {
            setHerbDetails(res)
        })
        .catch(err => console.error(err))
    }, [])


    return (
        <div className='herb_details'>
            { herbDetails.name }
        </div>
    )
}


export default HerbDetails