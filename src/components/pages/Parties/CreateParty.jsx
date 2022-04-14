import axios from "axios"
import { useEffect, useState } from "react"


export default function CreateParty ({currentGame, partyList, setPartyList}) {
    const [form, setForm] = useState({
        gameId: "625856bd76cfcc732695c0bf",
        userId: "6257c3b5c447bf9be2d7b801",
        partyName: "",
        description: "",
        members: [
          {
            userId: "6257c3b5c447bf9be2d7b801",
            admin: "true"
          }
        ],
        requests: []
    })
    // console.log(currentGame)
    const [message, setMessage] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(e.target.value)
       await axios
          .post(`${process.env.REACT_APP_SERVER_URL}/party/${form.gameId}`, form)
          .then(response => {
            console.log(response.data)
            setPartyList([...partyList, form])
          })
    }
    
    return (
      
        <div className='user-forms-card'>
        <h1>Create a Party!</h1>          
            <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor='username'>Game : </label>
                <input
                  type='text'
                  id='gameId'
                  value={currentGame.name}
                  disabled
                />
              </p>
              <p>
                <label htmlFor='username'>Game Id: </label>
                <input
                  type='text'
                  id='gameId'
                  value={form.gameId}
                  onChange={e => setForm({ ...form, gameId: e.target.value })}
                  disabled
                />
              </p>
              <p>
                <label htmlFor='username'>User Id: </label>
                <input
                  type='text'
                  id='gameId'
                  value={form.userId}
                  onChange={e => setForm({ ...form, userId: e.target.value })}
                />
              </p>
              <p>
                <label htmlFor='email'>Party Name:</label>
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