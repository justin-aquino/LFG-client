import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState } from 'react';
import CreateParty from './pages/Parties/CreateParty';

export default function Main({ currentGame, setCurrentGame, currentUser }) {
    const [currentParty, setCurrentParty] = useState(null)
    const [showCreateParty, setShowCreateParty] = useState(false)
    
  return (
    <>
      {currentGame.name ? (
        <div className="navbar-party">
          <Parties
            currentParty={currentParty}
            setCurrentParty={setCurrentParty}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}            
            setShowCreateParty={setShowCreateParty}
          />
        </div>
      ) : null}
      <div>
        {!showCreateParty && currentParty ? <Party currentParty={currentParty}/> : null }
        {showCreateParty ? <CreateParty currentGame={currentGame} currentUser={currentUser} /> : null}
      </div>
      
    </>
  );
}
