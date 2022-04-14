import { useEffect, useState } from "react"


export default function CreateParty () {
    const [form, setForm] = useState({
        gameId: "",
        userId: "",
        partyName: "",
        description: "",
    })

    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.value)
    }
    
    return (
        <div className='user-forms-card'>
        <h1>Create a Party!</h1>
          
            <form onSubmit={handleSubmit}>
              <p>
                <label htmlFor='username'>Game Id: </label>
                <input
                  type='text'
                  id='gameId'
                  value={form.gameId}
                  onChange={e => setForm({ ...form, gameId: e.target.value })}
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