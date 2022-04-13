import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Games from './components/pages/Games/Games';
import Parties from './components/pages/Parties/Parties';
import Dashboard from './components/pages/Users/Dashboard';
import Register from "./components/Register"
import SearchGames from './components/pages/Games/SearchGames';
import { useEffect, useState } from "react"
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import About from './components/About';
import Main from './components/Main';
import Layout from './components/layouts/Layout';
import Navibar from './components/layouts/Navibar';

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: '',
    firstname: '',
    lastname: '',
    manager: false,
    username: ''
  })
  const [users, setUsers] = useState([])
  // const [currentUserId, setCurrentUserId] = useState('')

  useEffect(() => { 
    const token = localStorage.getItem('jwt')
    if (token) {
      setCurrentUser(jwt_decode(token))
    } else {
      setCurrentUser(null)
    }
    axios.get(`${process.env.REACT_APP_SERVER_URL}/users`)
    .then(response => {
        setUsers(response.data)
    })
    .catch(console.log)
  }, [])

  const handleLogout = () => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')

    setCurrentUser(null)    
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Navibar />
       <Layout>
        <Routes>
        <Route 
            path='/'
            element={<Main />}
          />
          <Route 
            path='/games'
            element={<Games />}
          />
          <Route 
            path='/games/browse'
            element={<SearchGames />}
          />
          <Route 
            path='/game/party'
            element={<Parties />}
          />
          <Route 
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/about"
            element={<About />}
          />
        </Routes>
        </Layout>
      <Link to="/login">
        <button onClick={handleLogout}>Logout</button>
      </Link>
      </BrowserRouter>
    </div>
  );
}

export default App;
