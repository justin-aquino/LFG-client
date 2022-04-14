import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState } from 'react';

export default function Main({currentParty, setCurrentParty, currentGame, setCurrentGame}) {
    // const [currentParty, setCurrentParty] = useState(null)
  return (
    <>
      {currentGame.name ? (
        <div className="navbar-party">
          <Parties
            currentParty={currentParty}
            setCurrentParty={setCurrentParty}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}
          />
        </div>
      ) : null}
      <div>
        {currentParty ? <Party currentParty={currentParty}/> : null }
      </div>
      
    </>
  );
}
