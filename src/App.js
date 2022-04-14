import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Games from './components/Games';
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
import CreateParty from './components/pages/Parties/CreateParty';

function App() {
  const [currentUser, setCurrentUser] = useState({
    email: '',
    username: ''
  })
  const [users, setUsers] = useState([])
  const [games, setGames] = useState([])
  const [currentGame, setCurrentGame] = useState({})  
  
  useEffect(() => {
         axios.get(`${process.env.REACT_APP_SERVER_URL}/game`)
      .then(res=>{
        console.log(res.data)
        setGames(res.data)
      })

  }, [])

  // console.log(currentGame)

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
      <Navibar games={games} setGames={setGames} currentGame={currentGame} setCurrentGame={setCurrentGame} currentUser={currentUser} setCurrentUser={setCurrentUser} />
       <Layout>
        <Routes>
        <Route 
            path='/'
            element={<Main currentGame={currentGame} setCurrentGame={setCurrentGame} />}
          />
          {/* <Route 
            path='/games'
            element={<Games games={games} setGames={setGames} />}
          /> */}
          <Route 
            path='/games'
            element={<Games />}
          />
          <Route 
            path='/games/browse'
            element={<SearchGames />}
          />
          {/* <Route 
            path='/game/party'
            element={<Parties />}
          /> */}
          <Route 
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>}
          />
          <Route
            path="/signup"
            element={<Register currentUser={currentUser} setCurrentUser={setCurrentUser} setUsers={setUsers}/>}
          />
          <Route
            path="/about"
            element={<About currentGame={currentGame} setCurrentGame={setCurrentGame} />}
          />          
          <Route
              path="/create-party"
              element={<CreateParty currentGame={currentGame} />}
            />
        </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;