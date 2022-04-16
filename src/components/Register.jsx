import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'


export default function Register ({ currentUser, setCurrentUser, setUsers }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
    // manager: false
  })
  const [passwordCheck, setPasswordCheck] = useState('')

  const [message, setMessage] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()    
    try {
      if(form.password === passwordCheck)  {
        const response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/users/register`,
          form
        )
        // get the token from the response
        const { token } = response.data
        // set the token in local storage
        localStorage.setItem('jwt', token)
        // decode the token
        const decoded = jwt_decode(token)
        // log the user in
        setCurrentUser(decoded)
        navigate('/dashboard');
        return axios.get(`${process.env.REACT_APP_SERVER_URL}/users`)
        .then(response => setUsers(response.data))        
      } else {
        setMessage(`Passwords do not match.`)
      }
      
    } catch (err) {
      if (err.response.status === 409) {
        setMessage(err.response.data.msg)
      } else {
        console.log(err)
      }
    }
  }

  // if (currentUser) return <Navigate to='/' />
  return (
    <>            
    <div className='flex-container'>
      <div className='user-forms-card'>
      <h1>Register An Account</h1>
        
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor='username'>Username:</label>
              <input
                type='text'
                id='username'
                value={form.username}
                onChange={e => setForm({ ...form, username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='email'>Email:</label>
              <input
                type='email'
                id='email'
                value={form.name}
                onChange={e => setForm({ ...form, email: e.target.value })}
                // placeholder='enter your email...'
              />
            </div>
            <div>
              <label htmlFor='password'>Password:</label>
              <input
                type='password'
                id='password'
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                // placeholder='enter your password...'
              />
            </div>
            <div>
              <label htmlFor='confirmpassword'>Confirm Password:</label>
              <input
                type='password'
                id='confirmpassword'
                value={passwordCheck}
                onChange={e => setPasswordCheck(e.target.value)}                
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
          <p className='error-message'>{message ? `${message}` : ''}</p>
        </div>
        </div>
    </>
  )
}
