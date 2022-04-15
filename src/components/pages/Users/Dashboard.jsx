import axios from 'axios';
import React from 'react';
import { useState } from 'react';

const Dashboard = ({ games, currentUser }) => {
  const [form, setForm] = useState({
    id: currentUser.id,
    game_fk: "",
    username: ""

  });

  const handleSelect =(e)=>{
    console.log(e)
    setForm({...form, game_fk : e.target.value})

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

      await axios.put(`${process.env.REACT_APP_SERVER_URL}/users/edit`, form)
      .then(response=>{
        console.log(response.data)
      })

  };

  return (
    <>
      <div className="header-on-dark">
        <h1>{currentUser.username}'s Dashboard</h1>
        <h3>Email: {currentUser.email}</h3>
        <h2>All Game Alias</h2>
        {/* {allAlias} */}
        <form onSubmit={handleEditSubmit}>
          {/* <input hidden name="userId" type="text">{currentUser.id}</input> */}
          <label htmlFor="select game">Add a game alias</label>
          <select name="games" id="games" onChange={handleSelect}>
            {allGames}
          </select>
          <input type="text" value={form.username} onChange={e => setForm({ ...form, username: e.target.value })}></input>
          <input type="submit" />
        </form>
      </div>
    </>
  );
};

export default Dashboard;
