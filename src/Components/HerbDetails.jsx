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
            <p className='herb_details__name'>
            { herbDetails.name }    
            </p>
            <hr />
            <section className='herb_details__sign'>
                <p className='sign-name'>{ herbDetails.astrology_sign }</p>
                <p>
                    <img src={ astrologyPicUrl } alt="zodiac-img" className='herb_details__zodiac-img'/>
                </p>
            </section>
                <p className='value'> 
                    <strong>
                        Nutirional Value:
                    </strong> { herbDetails.nutrients } 
                </p>

                <div className='info'>
                    <h4>Assists with:</h4>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, tempore! Accusamus debitis sapiente laudantium nisi numquam alias vero incidunt aspernatur eum veniam adipisci, consequuntur, eaque minima vel esse error quasi!
                    Magni obcaecati, dolorem excepturi inventore ad incidunt ratione! Doloremque placeat similique dicta tempora explicabo dignissimos vitae nostrum voluptas dolorem, harum doloribus voluptate? Ratione autem tempore labore minima. Odit, nulla explicabo.
                    </p>
                </div>
        </main>
    )
}


export default HerbDetails