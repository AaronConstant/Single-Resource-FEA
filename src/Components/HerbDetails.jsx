import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../Styles/herbDetails.scss'
import  { findAstrologyPic } from '../helperfunctions/astrologyPics'


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
    }, [id])

    const astrologyPicUrl = herbDetails.astrology_sign ? findAstrologyPic(herbDetails.astrology_sign) : null;


    return (
        <main className='herb_details'>
            <section>
            <p className='herb_details__name'>
            { herbDetails.name }    
            </p>


            </section>
            <section>
                <p>{ herbDetails.astrology_sign }</p>
                <p>
                    <img src={ astrologyPicUrl } alt="zodiac-img" className='herb_details__zodiac-img'/>
                </p>
                <p>{herbDetails.nutrients}</p>
            </section>
        </main>
    )
}


export default HerbDetails