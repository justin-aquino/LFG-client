import React from 'react'

export default function Games ({games,setGames,currentGame,setCurrentGame}) {
  const gamesMap = games.map((element, idx) => {
    return (
      <div style={{ backgroundColor: '#151414' }}>
        <span onClick={() => handleGameSelect(element)}>
          <img
            width='75'
            key={`game-icon-${idx}`}
            src={element.icon}
            alt={element.name}
          />
        </span>
      </div>
    )
  })

  const handleGameSelect = game => {
    setCurrentGame(game)
  }
  return (
    <div>
      <h1>Games</h1>
      {gamesMap}
    </div>
  )
}