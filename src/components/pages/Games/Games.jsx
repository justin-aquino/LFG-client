import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'

const Games = ({games, setGames}) => {


  const gamesMap = games.map((element, idx)=>{
    return (
      <div style={{backgroundColor: "#151414"}}>
        <img width="75" key={`game-icon-${idx}`} src={element.icon} alt={element.name} />
      </div>
    )
  })

  return (
    <div>
        <h1>Games</h1>
        {gamesMap}
    </div>
  )
}

export default Games