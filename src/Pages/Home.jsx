import React from 'react'
import homeImage from '../assets/farm.jpeg'
import '../Styles/home.scss'


const Home = () => {
    return (
        <main>
            <img className='home_image' src={homeImage} alt='lush farm, farmhouse, and sunrise from the East'/>
        </main>
    )
}


export default Home