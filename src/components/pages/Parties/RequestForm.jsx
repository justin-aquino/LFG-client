import { useState } from 'react'
import axios from 'axios'

export default function RequestForm ({currentParty,setCurrentParty,
  currentUser,
  setSelectedComponent,
  refresher,
  setRefresher
}) {
  const [form, setForm] = useState({
    userId: currentUser.id,
    userName: currentUser.username,
    message: '',
    isApproved: false
  })

  const [requests, setRequests] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await axios
        .put(
          `${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}/request`,
          form
        )
        .then(response => {
          setRequests(response.data.msg)
          setRefresher(!refresher)          
          setCurrentParty(response.data.newRequest)     
        })
    } catch (err) {
      console.log(err)
    }
  }
  console.log(requests)
  console.log(currentParty)
  return (
    <>
      <div className='box stack-top'>
      <div className="new-form">

        {!requests ? (
          <>
            <h3>Request to join {currentParty.partyName}</h3>
              <form onSubmit={handleSubmit}>            
                  <label htmlFor='message'>Message:</label>
                  <textarea
                    type='text'
                    id='requestMsg'
                    value={form.message}
                    onChange={e =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />            
                  <button type='submit'>Submit</button> 
                  <button type='submit' onClick={() => setSelectedComponent('0')}>Cancel</button>            
              </form>            
          </>
        ) : (
          <h3>{requests}</h3>
        )}
        </div>
      </div>
    </>
  )
}
