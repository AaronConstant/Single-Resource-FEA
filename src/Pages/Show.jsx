import HerbDetails from '../Components/HerbDetails'
import { Link, useParams, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const Show = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const handleDelete = () => {
        fetch(`${API}/herbs/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => navigate('/herbs'))
        .catch(err => console.log(err))
    }


    return (
        <div className='show'>
            <HerbDetails />
            <Link to={`/herbs`}><button>Back</button></Link>
            <Link to={`/herbs/${id}/edit`}><button>Edit</button></Link>
            <button onClick={handleDelete}>Delete</button>
        </div>
    )
}


export default Show