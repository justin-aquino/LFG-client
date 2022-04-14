import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState } from 'react';

export default function Main(currentGame, setCurrentGame) {
    const [currentParty, setCurrentParty] = useState({})
  return (
    <>
      {currentGame.currentGame.name ? (
        <div className="navbar-party">
          <Parties
            currentParty={currentParty}
            setCurrentParty={setCurrentParty}
            currentGame={currentGame.currentGame}
            setCurrentGame={setCurrentGame}
          />
        </div>
      ) : null}
      {currentParty ? <Party currentParty={currentParty}/> : <></>}
    </>
  );
}
