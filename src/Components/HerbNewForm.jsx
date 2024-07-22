import { useState } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import '../Styles/new.scss'

const API = import.meta.env.VITE_API_URL

const HerbNewForm = () => {
    const navigate = useNavigate()
    const { id } = useParams()

    const [herb, setHerb] = useState({
        id: uuidv4(),
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

    const addHerb = (herb) => {
        fetch(API, {
            method: 'POST',
            body: JSON.stringify(herb),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            console.log('Server response:', res)
            navigate(`/herbs`)
        })
        .catch(err => console.error(err))
    }

    const handleText = (e) => {
        setHerb(prevHerb =>({ ...prevHerb, [e.target.id]: e.target.value }))
        console.log(herb)
    }

    const handleCheckBox = (e) => {
        setHerb({...herb, [e.target.name]: !herb[e.target.name] })
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        addHerb(herb)
    }



    return (
        <div className='new'>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>New Herb</legend>
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
                    <label htmlFor='entry_date'>Date: </label>
                    <input
                        id='entry_date'
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
                    <label htmlFor='nutrients'>Nutrients: </label>
                    <input
                        id='nutrients'
                        value={herb.nutrients}
                        type='text'
                        onChange={handleText}
                        placeholder='List Nutrients'
                        required
                    />
                    <br/>
                    <label htmlFor='astrology_sign'>Astrological: </label>
                    <input
                        id='astrology_sign'
                        value={herb.astrology_sign}
                        type='text'
                        onChange={handleText}
                        placeholder='Astrological Sign(s) Associated'
                        required
                    />
                    <br/>
                    <label htmlFor='chakra'>Chakra: </label>
                    <input
                        id='chakra'
                        value={herb.chakra}
                        type='text'
                        onChange={handleText}
                        placeholder='Chakra Associated'
                        required
                    />
                    <br/>
                    <label htmlFor='element'>Element: </label>
                    <input
                        id='element'
                        value={herb.element}
                        type='text'
                        onChange={handleText}
                        placeholder='Element Associated'
                        required
                    />
                    <br/>
                    <input
                        id='stock'
                        value={herb.stock}
                        type='number'
                        onChange={handleText}
                        placeholder='How Many in Stock?'
                        required
                    />
                    <br/>
                    <label htmlFor='tea'>Tea: </label>
                    <input
                        id='tea'
                        name='tea'
                        type='checkbox'
                        onChange={handleCheckBox}
                        checked={herb.tea}
                        // required
                    />
                    <br/>
                    <label htmlFor='poisonous'>Poisonous: </label>
                    <input
                        id='poisonous'
                        name='poisonous'
                        type='checkbox'
                        onChange={handleCheckBox}
                        checked={herb.poisonous}
                        
                    />
                    <br/>
                    <br/>
                    <button type='submit'>Add to Apothecary</button>
                    <Link to={`/herbs`}>
                        <button>Back</button>
                    </Link>
                </fieldset>
            </form>
        </div>
    )
}


export default HerbNewForm

