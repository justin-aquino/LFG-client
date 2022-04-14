import React from 'react'
import { Link } from 'react-router-dom'

export default function Games ({games, setGames, currentGame, setCurrentGame}) {
  const gamesMap = games.map((element, idx) => {
    return (
      <>   
        <Link to='' onClick={() => handleGameSelect(element)} alt='image' >
          <img            
            key={`game-icon-${idx}`}
            src={element.icon}
            alt={element.name}
            className={currentGame._id===element._id ? 'img-icon-selected' : 'img-icon'}
          />
        </Link>
      </>
    )
  })

  const handleGameSelect = game => {
    setCurrentGame(game)
    // console.table(game)
  }
  return (
    <div>      
      {gamesMap}
      This paragraph was a waste of time and space. If you had not read this and I had not typed this you and I could’ve done something more productive than reading this mindlessly and carelessly as if you did not have anything else to do in life. Life is so precious because it is short and you are being so careless that you do not realize it until now since this void paragraph mentions that you are doing something so mindless, so stupid, so careless that you realize that you are not using your time wisely. You could’ve been playing with your dog, or eating your cat, but no. You want to read this barren paragraph and expect something marvelous and terrific at the end. But since you still do not realize that you are wasting precious time, you still continue to read the null paragraph. If you had not noticed, you have wasted an estimated time of 20 seconds. Imagine what you could’ve done with those 20 seconds besides reading this non-productive paragraph. Imagine the things you could’ve accomplished. Imagine the possibilities. But time is irreversible and you still do not realize this. Somehow you have managed still to waste around now 35 seconds reading this stupid, excessive, and long paragraph with your irreversible time. If you haven’t realized that, then you have not yet read the whole paragraph. Even if you did, you still refuse to stop reading this essay. After around 45 seconds, you are still reading this mindlessly and carelessly with your precious and non-reversible time. If you remembered from the first sentence of this disgustingly long paragraph, you would remember that this paragraph was a waste of time and space, imagine if I had not typed this paragraph and you had not read it. Imagine all the things you could’ve done, the things that made you, you. But no, you are still reading this paragraph and it has been around 60 seconds, which is a whole full minute. A minute! Yet you still have the urge and motivation to read this pointless and long essay. Now you have nearly reached the end, you ponder, why am I reading this? Why is the writer making a paragraph so long that I have the urge and motivation to finish this pointless paragraph to prove him that reading is what makes me, me. Then you realize, you have wasted now around a minute and 10 seconds.
    </div>
  )
}