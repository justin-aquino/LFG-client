import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = ({ games, currentUser }) => {

  const navigate = useNavigate()
  const [msg, setMessage] = useState("")
  const [form, setForm] = useState({
    id: currentUser.id,
    game_fk: "",
    username: "",
    gameName: ""

  });

 useEffect(() => {
   setForm({
    id: currentUser.id,
    game_fk: "",
    username: ""

  })
 }, [])
  const handleSelect =(e)=>{
    console.log(games)
    const game = games.find((game, idx)=>{
        console.log(e.target.value)
          return game._id === e.target.value
        })
        console.log(game)
    setForm({...form, game_fk : e.target.value, gameName: game.name})

  }
  const allGames = games.map((element, idx) => {
    return (
      <option onSelect={handleSelect} value={element._id}>
        {element.name}
      </option>
    );
  });

  // const allAlias = currentUser.games.map((element, idx)=>{

  //   const game = games.find((game, idx)=>{
  //     return element.name = game.name
  //   })
  //   return(
  //     <h3>Game: {game.name}</h3>
  //   )
  // })
  
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setMessage("")
    try{

      await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/edit`, form)
      .then(response=>{
        console.log(response.data)
      })
      setForm({
        id: currentUser.id,
        game_fk: "",
        username: ""
    
      })
      navigate("/")
      navigate("/dashboard")
    } catch(err){
      setMessage(err.response.data.msg)
    }
  };


  return (
    <>
      <div className="header-on-dark">
        <h1>{currentUser.username}'s Dashboard</h1>
        <h3>Email: {currentUser.email}</h3>
        <h2>All Game Alias</h2>
        {/* {allAlias} */}
        
        <form action="https://google.ca" onSubmit={handleEditSubmit}>
          {/* <input hidden name="userId" type="text">{currentUser.id}</input> */}
          <label htmlFor="select game">Add a game alias</label>
          <select name="games" id="games" onChange={handleSelect}>
          <option disabled="disabled" selected="selected">Select an option.</option>
            {allGames}
          </select>
          <input type="text" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}></input>
          <input type="submit" />
        </form>
        {msg ? <h2 style={{color: "red"}}>{msg}</h2> : <></>} 
      </div>
    </>
  );
};

export default Dashboard;
