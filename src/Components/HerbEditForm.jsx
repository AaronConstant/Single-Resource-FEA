import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const HerbEditForm = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [herb, setHerb] = useState({
        name: '',
        entry_date: '',
        pic: '',
        nutrients: '',
        astrology_sign: '',
        chakra: '',
        element: '',
        tea: false,
        poisonous: false,
        stock: ''
    })

    const updateHerb = async () => {
        
        fetch(`${API}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(herb),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            navigate(`/herbs/${id}`)
        })
        .catch(err => console.error(err))
    }


    const handleText = (e) => {
        setHerb({ ...herb, [e.target.id]: e.target.value })
    }

    const handleTeaCheckBox = () => {
        setHerb(prevHerb => ({ ...prevHerb, tea: !prevHerb.tea }));
    };

    const handlePoisonousCheckBox = () => {
        setHerb(prevHerb => ({ ...prevHerb, poisonous: !prevHerb.poisonous }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        updateHerb()
    }

    useEffect(() => {
        fetch(`${API}/${id}`)
        .then(res => res.json())
        .then(res => {
            setHerb(res)
        })
        .catch(err => console.error(err))
    }, [])

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Edit Herb</legend>
                    <label htmlFor='name'>Name:</label>
                    <input
                        id='name'
                        value={herb.name}
                        type='text'
                        onChange={handleText}
                        placeholder='Herb Name'
                        required
                    />
                    <br/>
                    <label htmlFor='date'>Date:</label>
                    <input
                        id='date'
                        value={herb.entry_date}
                        type='date'
                        onChange={handleText}
                        placeholder="Today's Date"
                        required
                        />
                    <br/>
                    <label htmlFor='pic'>Picture URL: </label>
                    <input
                        id='pic'
                        value={herb.pic}
                        type='text'
                        onChange={handleText}
                        placeholder="Picture URL"
                        required
                    />
                    <br/>
                    <label htmlFor='nutrients'>Nutrients:</label>
                    <input
                        id='nutrients'
                        value={herb.nutrients}
                        type='text'
                        onChange={handleText}
                        placeholder='List Nutrients'
                        required
                    />
                    <br/>
                    <label htmlFor='astrology'>Astrological:</label>
                    <input
                        id='astrology'
                        value={herb.astrology_sign}
                        type='text'
                        onChange={handleText}
                        placeholder='Astrological Sign(s) Associated'
                        required
                    />
                    <br/>
                    <label htmlFor='chakra'>Chakra:</label>
                    <input
                        id='chakra'
                        value={herb.chakra}
                        type='text'
                        onChange={handleText}
                        placeholder='Chakra Associated'
                        required
                    />
                    <br/>
                    <label htmlFor='element'>Element:</label>
                    <input
                        id='element'
                        value={herb.element}
                        type='text'
                        onChange={handleText}
                        placeholder='Element Associated'
                        required
                    />
                    <br/>
                    <label htmlFor='stock'>Stock:</label>
                    <input
                        id='stock'
                        value={herb.stock}
                        type='number'
                        onChange={handleText}
                        placeholder='How Many in Stock?'
                        required
                    />
                    <br/>
                    <label htmlFor='tea'>Tea:</label>
                    <input
                        id='tea'
                        name='tea'
                        type='checkbox'
                        onChange={handleTeaCheckBox}
                        checked={herb.tea}
                    />
                    <br/>
                    <label htmlFor='poisonous'>Poisonous:</label>
                    <input
                        id='poisonous'
                        name='poisonous'
                        type='checkbox'
                        onChange={handlePoisonousCheckBox}
                        checked={herb.poisonous}
                    />
                    <br/>
                    <br/>
                    <button type='submit'>Save Changes</button>
                    <Link to={`/herbs/${id}`}>
                        <button>Back</button>
                    </Link>
                </fieldset>
            </form>
        </div>
    )
}


export default HerbEditForm