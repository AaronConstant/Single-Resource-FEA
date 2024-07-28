import HerbDetails from '../Components/HerbDetails'
import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import '../Styles/show.scss'

const API = import.meta.env.VITE_BASE_URL

const Show = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);

    const handleDelete = async () => {
        try {
            const response = await fetch(`${API}/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                navigate('/herbs');
            } else {
                console.error('Failed to delete the item');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
        }
    };

    const showDeleteMessage = () => {
        setConfirmDeleteModal(true);
    };

    const confirmingDeletion = () => {
        handleDelete();
        setConfirmDeleteModal(false);
        navigate('/herbs')
    };

    return (
        <div className='show-container'>
        <div className='show'>
            <HerbDetails />
            <div className='show__buttons'>
                <Link to="/herbs"><button>Back</button></Link>
                <Link to={`/herbs/${id}/edit`}><button>Edit</button></Link>
                <button onClick={ showDeleteMessage }>Delete</button>
            </div>

            {confirmDeleteModal && (
                <div className='msg-container'>
                    <div className='msg-container__message'>
                        <p>Are you sure you want to delete this herb?</p>
                        <button onClick={confirmingDeletion}>Yes</button>
                        <button onClick={() => setConfirmDeleteModal(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default Show;