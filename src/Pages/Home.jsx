import { Link } from 'react-router-dom'
import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import '../Styles/home.scss'


const Home = () => {
    
    return (
        <main>
            <button className='home_btn'><Link to='/herbs'>Browse Herbs</Link></button>
    
            <MDBCarousel showControls showIndicators>
        <MDBCarouselItem itemId={1}>
        <img src='https://mdbootstrap.com/img/new/slides/041.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={2}>
        <img src='https://mdbootstrap.com/img/new/slides/042.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
        <img src='https://mdbootstrap.com/img/new/slides/043.jpg' className='d-block w-100' alt='...' />
        </MDBCarouselItem>
    </MDBCarousel>
        </main>
    )
}


export default Home