import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoPersonFill } from 'react-icons/go'
import { FaShoppingCart } from 'react-icons/fa'
import { GiMonsteraLeaf } from 'react-icons/gi'
import { BsCurrencyExchange } from 'react-icons/bs'
import '../Styles/navbar.scss'


const NavBar = ({ herbdata }) => {

    return (
        <nav>
            <ul>
                <li><GiHamburgerMenu className='navbar_hamburger'/></li>
                <li><FaSearch className='navbar_search'/></li>
                <li><BsCurrencyExchange className='navbar_converter'/></li>
                <li className='navbar_logo'><Link to='/'>AM APOTHECARY</Link></li>
                {/* <li><Link to ='/herbs/studies'>Medicinal Studies</Link></li> */}
                <li><Link to='/herbs/new'><GiMonsteraLeaf className='navbar_new'/></Link></li>
                <li><Link to='/herbs/login'><GoPersonFill className='navbar_login'/></Link></li>
                <li><Link to='/herbs/cart'><FaShoppingCart className='navbar_cart'/></Link></li>
            </ul>
        </nav>
    )
}


export default NavBar