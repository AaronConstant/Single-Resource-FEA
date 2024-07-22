import { Link } from 'react-router-dom'
import '../Styles/herb.scss'

const Herb = ({ herb, id }) => {
    return (
        <div className='herb' key={ id }>
            <p className='herb__name'>

            <Link to={`/herbs/${id}`}>{herb.name}</Link>

            </p>
            <img className='herb__img' src={herb.pic} alt="Herb img" />
            <div className="herb__info-display">
                <p>
                { herb.astrology_sign }    
                </p>
                
            </div>
        </div>
    )
}


export default Herb