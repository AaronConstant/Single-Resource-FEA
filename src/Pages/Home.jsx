import { Link } from 'react-router-dom'
import homeImage from '../assets/farm.jpeg'
import '../Styles/home.scss'


const Home = () => {
    
    return (
        <main>
            <img className='home_image' src={ homeImage } alt='farmhouse'/>
            Welcome to Herbalog
            <button className='home_btn'><Link to='/herbs'>Browse Herbs</Link></button>
        </main>
    )
}


export default Home