import { useState, useEffect } from 'react'
import Herbs from '../Components/Herbs'
import { IoFilter } from 'react-icons/io5'
import { IoIosArrowDown } from 'react-icons/io'
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import { TfiLayoutListThumb } from 'react-icons/tfi'
import '../Styles/index.scss'

const API = import.meta.env.VITE_API_URL

const Index = ({herbdata}) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        fetch(`${API}`)
        .then(res => res.json())
        .then(res => {
            setTotal(res.length)
        })
        .catch(err => console.error(err))
    },[])

    return (
        <div className='index'>

            <h2 className='index__title'>Herbalog</h2>
            <div className='index__views'>
            <button className='index__filter'>Sort</button>
            {/* <button className='index__sort'>Sort By</button> */}
            <div ><TfiLayoutGrid4Alt className='grid_view'/></div>
            <div ><TfiLayoutListThumb className='list_view'/></div>
            </div>
            <h5 className='index__total'>{`${total} products`}</h5>
            <Herbs className='index__products'/>
        </div>
    )
}


export default Index