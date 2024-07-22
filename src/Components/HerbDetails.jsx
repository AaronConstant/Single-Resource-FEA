import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Styles/herbDetails.scss'


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
        <main className='herb_details'>
            <p>
            { herbDetails.name }    
            </p>
            <section>
                <p>{herbDetails.astrology_sign}</p>
                <p></p>
                <p></p>
            </section>
        </main>
    )
}


export default HerbDetails