import { useState, useEffect } from 'react'
import Herbs from '../Components/Herbs'
import { IoFilter } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import '../Styles/index.scss'

const API = import.meta.env.VITE_API_URL

const Index = ({herbdata}) => {
    return (
        <div className='index'>

            <h2 className='index__title'>Catalog</h2>
            <button className='index__filter'>FILTER</button>
            <button className='index__sort'>SORT BY</button>
            <h5 className='index__total'>{`${3} products`}</h5>

            <Herbs className='index__products'/>
        </div>
    )
}


export default Index