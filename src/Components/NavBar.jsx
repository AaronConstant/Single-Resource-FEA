import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GoPersonFill } from 'react-icons/go'
import { FaShoppingCart } from 'react-icons/fa'
import { GiMonsteraLeaf } from 'react-icons/gi'
import { BsCurrencyExchange } from 'react-icons/bs'
import '../Styles/navbar.scss'


const NavBar = ({ herbdata }) => {
    const [searchEntry, setSearchEntry] = useState('')
    const [filtereddata, setFilteredData] = useState(herbdata)
    const [searchview, setSearchView] = useState(true)

    useEffect(()=> {
        setFilteredData(herbdata)
    },[herbdata])

    const handleSearchInput = (e) => {
        const searchEntry = e.target.value
        setSearchEntry(searchEntry)
        processingFilterData(searchEntry)
    }

    const processingFilterData = (searchEntry) => {
        if (searchEntry) {
            const newFilteredData = herbdata.filter(searchHerb => 
                searchHerb.name.toLowerCase().includes(searchEntry.toLowerCase())
            );
            setFilteredData(newFilteredData);
        } else {
            setFilteredData('');
        }
    };

    const toggleSearchView = () => {
        setSearchView(prevSearchView => !prevSearchView);
    };

    console.log(filtereddata)
    console.log(searchEntry);

    return (
        <nav>
            <ul>
                <li><GiHamburgerMenu className='navbar_hamburger'/></li>
                <li><FaSearch className='navbar_search' onClick={toggleSearchView}/>
                
                <input
                type="text"
                placeholder="Find herb..."
                value={searchEntry}
                onChange={handleSearchInput}
                className="input-view"
                style={{ display: searchview ? 'none' : 'block' }}
            />
           <li className='search-results' style={{ display: searchview ? 'none' : 'block'}}>
                    {filtereddata && filtereddata.length > 0 && searchEntry ? (
                        <div style={{ padding: searchview ? '0px' : '10px' }}>
                        {filtereddata.map(herb => (
                            <p key={herb.id}>{herb.name}</p>
                        ))}
                    </div>
                    ) : (
                        undefined
                    )}
                </li>
                
                </li>
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