import { useState } from "react"
import axios from "axios"
import jwt_decode from "jwt-decode"
import { Navigate } from "react-router-dom"
// import "../layout/Login.css"

export default function Login({ currentUser, setCurrentUser }) {
  const [form, setForm] = useState({
    username: "",
    password: "",
  })

  const [msg, setMessage] = useState("")

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    try {
      // post to the backend with the form data to login
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/users/login`,
        form
      )

      // decode the token that is sent to use
      const { token } = response.data
      const decoded = jwt_decode(token)

      // save the token in the localStorage
      localStorage.setItem("jwt", token)

      // set the state to the logged in user
      console.log(decoded)
      setCurrentUser(decoded)
    } catch (err) {
      // handle errors such as wrong credentials
      if (err.response.status === 400) {
        console.log(err.response.data)
        setMessage(err.response.data.msg)
      }
      console.log(err)
    }
  }

  // navigate to the user's profile if currentUser is NOT null
  if (currentUser) return <Navigate to="/" />
  return (
       <div className="user-forms-card">
          <h1>Sign In</h1>
          {/* <h5 className="error-msg">{msg ? `${msg}` : ""}</h5> */}
        <form onSubmit={handleFormSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="username">Username :</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setForm({ ...form, username: e.target.value })}
              value={form.username}
            />
          </div>
          <div>
            {/* Password Input */}
            <label htmlFor="password">Password :</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              value={form.password}              
              className="passwordInput"
            />
          </div>
          <button type="submit" className="enterButton">
            Login
          </button>
          <p>
            Don't have an account?{" "}
            <a href="/signup" className="a-tag">
              Create one
            </a>
          </p>
        </form>
        <p className="error-message">{msg ? `${msg}` : ''}</p>
      </div>    
  )
}