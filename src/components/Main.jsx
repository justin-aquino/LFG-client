import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState } from 'react';

export default function Main({currentParty, setCurrentParty, currentGame, setCurrentGame, currentUser}) {
    // const [currentParty, setCurrentParty] = useState(null)
  return (
    <>
      {currentGame.name ? 
          <Parties
            currentParty={currentParty}
            setCurrentParty={setCurrentParty}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}                   
          />        
       : null}
      <div>
        {currentParty ? <Party currentParty={currentParty} setCurrentParty={setCurrentParty} currentUser={currentUser} currentGame={currentGame} /> : null }
      </div>
      
    </>
  );
}