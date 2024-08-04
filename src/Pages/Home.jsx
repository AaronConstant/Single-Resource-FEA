import { Link } from 'react-router-dom'
import React from 'react';
// import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import Basil from '../assets/basil.webp'
import Farm from '../assets/farm.jpeg'
import Hyssop from '../assets/hyssop.webp'
import '../Styles/home.scss'


const Home = () => {
    
    return (
    //     <main>
    //         <button className='home_btn'><Link to='/herbs'>Browse Herbs</Link></button>
    //         <MDBCarousel showControls showIndicators>
    //     <MDBCarouselItem itemId={1}>
    //     <img src={Basil} className='d-block w-100' alt='basil' />
    //     </MDBCarouselItem>
    //     <MDBCarouselItem itemId={2}>
    //     <img src={Farm} className='d-block w-100' alt='farm' />
    //     </MDBCarouselItem>
    //     <MDBCarouselItem itemId={3}>
    //     <img src={Hyssop}className='d-block w-100' alt='hyssop' />
    //     </MDBCarouselItem>
    // </MDBCarousel>
        <main className='home-container'>
            <img src={ Basil } alt="" className='home-container__first-pic'/>
            <div className='home-container__combined-details-one'>
              <h2>WELCOME TO HERBALOG</h2>
            <p className='first-details'>Our website is designed to be a comprehensive resource for herbal enthusiasts, providing detailed information about each herb's benefits, uses, and preparation methods. We are passionate about educating our community on the healing properties of plants and how to integrate them into modern living. From beginners to seasoned herbalists, HerbaLog is here to support your journey with trusted products, insightful guidance, and a commitment to promoting a natural and healthy way of life. Explore our collections and discover how HerbaLog can be your partner in holistic health.
            </p>
            </div>

            <img src={ Farm } alt="" className='second-pic'/>

            <div className='home-container__combined-details-two'>
              <h2>The Herbal Lifestyle</h2>
              <p className='second-details'>Embracing a holistic herbal lifestyle also means adopting a mindset that values natural and preventative health care. This includes maintaining a balanced diet rich in whole foods, practicing mindfulness and stress-reduction techniques, and engaging in regular physical activity. By prioritizing natural remedies and self-care, individuals can reduce their reliance on synthetic medications and foster a deeper connection with the natural world. Education and continuous learning about herbalism are key, as this lifestyle encourages individuals to empower themselves with knowledge about the healing potential of plants and to make informed choices about their health and wellness.
                </p>
              <button className='home_btn'><Link to='/herbs'>Browse Herbs</Link></button>
            </div>

            <img src={ Hyssop } alt="" className='home-container__third-pic'/>
            <div className='home-container__combined-details-third'>
              <h2>Begin Your Journey</h2>
            <p className='third-details'>Beginning a holistic herbal lifestyle involves integrating natural herbs into daily practices to promote overall well-being. This lifestyle focuses on using plants and their medicinal properties to support physical, mental, and spiritual health. Herbs can be incorporated through various methods, such as teas, tinctures, salves, and essential oils. The foundation of a holistic herbal lifestyle is understanding the unique properties of different herbs and how they can address specific health concerns. This approach often involves cultivating a personal herb garden, which allows for a sustainable and intimate connection with the plants used for healing and nourishment.
            </p>
            </div>
        </main>
    )
}


export default Home