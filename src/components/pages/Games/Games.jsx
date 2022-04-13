import React from 'react'
import { Link } from 'react-router-dom'

export default function Games ({games, setGames, currentGame, setCurrentGame}) {
  const gamesMap = games.map((element, idx) => {
    return (
      <div>        
        <Link to='' onClick={() => handleGameSelect(element)} alt='image' >
          <img            
            key={`game-icon-${idx}`}
            src={element.icon}
            alt={element.name}
            className='img-icon'
          />
        </Link>
      </div>
    )
  })

  const handleGameSelect = game => {
    setCurrentGame(game)
    // console.table(game)
  }
  return (
    <div>      
      {gamesMap}
    </div>
  )
}