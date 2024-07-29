import { Link } from 'react-router-dom'
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Basil from '../assets/basil.webp'
import Farm from '../assets/farm.jpeg'
import Hyssop from '../assets/hyssop.webp'
import '../Styles/home.scss'


const Home = () => {
    
    return (
        <main>
            <button className='home_btn'><Link to='/herbs'>Browse Herbs</Link></button>
            <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
        <img src={Basil} className='d-block w-100' alt='basil' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
        <img src={Farm} className='d-block w-100' alt='farm' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
        <img src={Hyssop}className='d-block w-100' alt='hyssop' />
        </MDBCarouselItem>
    </MDBCarousel>
        </main>
    )
}


export default Home