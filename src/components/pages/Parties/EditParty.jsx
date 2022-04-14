import axios from "axios"
import { useEffect, useState } from "react"


export default function CreateParty({ currentGame, currentParty, currentUser }) {

    const [form, setForm] = useState({
        gameId: currentGame._id,
        userId: currentUser.id,
        partyName: currentParty.partyName,
        description: currentParty.description
    })
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        await axios.put(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}`, form)
            .then(response => {
                console.log(response.data)
            })
    }

    return (

        <div className='party-forms-card'>
            <h1>Edit this Party!</h1>
            <form onSubmit={handleSubmit}>
                <p>
                    <label htmlFor='gameName'>Game : </label>
                    <input
                        type='text'
                        id='gameId'
                        value={currentGame.name}
                        disabled
                    />
                </p>
                <p>
                    <label htmlFor='gameId'>Game Id: </label>
                    <input
                        type='text'
                        id='gameId'
                        value={form.gameId}
                        onChange={e => setForm({ ...form, gameId: e.target.value })}
                        disabled
                    />
                </p>
                <p>
                    <label htmlFor='username'>User : </label>
                    <input
                        type='text'
                        id='gameId'
                        value={currentUser.username}
                        disabled
                    />
                </p>
                <p>
                    <label htmlFor='partyName'>Party Name:</label>
                    <input
                        type='text'
                        id='partyName'
                        value={form.partyName}
                        onChange={e => setForm({ ...form, partyName: e.target.value })}
                    // placeholder='enter your email...'
                    />
                </p>
                <p>
                    <label htmlFor='password'>description:</label>
                    <textarea
                        id='description'
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                        cols="30"
                        rows="10">

                    </textarea>
                </p>

                <button type='submit'>Submit</button>
            </form>
            <p className='error-message'>{message ? `${message}` : ''}</p>
        </div>
    )
}