import React from 'react'
import { Link } from 'react-router-dom'

export default function Games ({currentParty, setCurrentParty, games, setGames, currentGame, setCurrentGame}) {

  console.log(currentParty)

  const gamesMap = games.map((element, idx) => {
    return (
      <div key={`game-id-${idx}`}>   
        <Link to='' onClick={() => handleGameSelect(element)} alt='image' >
          <img            
            key={`game-icon-${idx}`}
            src={element.icon}
            alt={element.name}
            className={currentGame._id===element._id ? 'img-icon-selected' : 'img-icon'}
          />
        </Link>
      </div>
    )
  })

  const handleGameSelect = game => {
    setCurrentGame(game)
    setCurrentParty(null)
  }
  return (
    <div style={{display: "flex", flexDirection:"column", justifyContent:"center"}}>      
      {gamesMap}

    </div>
  )
}