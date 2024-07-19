import { Link } from 'react-router-dom'


const Herb = ({ herb, id }) => {
    return (
        <div className='herb' key={id}>
            <Link to={`/herbs/${id}`}>{herb.name}</Link>
        </div>
    )
}


export default Herb