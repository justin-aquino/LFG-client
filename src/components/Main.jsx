import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState } from 'react';

export default function Main({currentParty, setCurrentParty, currentGame, setCurrentGame, currentUser, refresher, setRefresher}) {
    // const [currentParty, setCurrentParty] = useState(null)
    const [currentParties, setCurrentParties] = useState([]);
  return (
    <>
      {currentGame.name ? 
          <Parties
            currentParties={currentParties}
            setCurrentParties={setCurrentParties}
            currentParty={currentParty}
            setCurrentParty={setCurrentParty}
            currentGame={currentGame}
            setCurrentGame={setCurrentGame}                   
            refresher={refresher}
            setRefresher={setRefresher}
          />        
       : null}
      <div>
        {currentParty ? <Party currentParty={currentParty} setCurrentParty={setCurrentParty} currentUser={currentUser} currentGame={currentGame} refresher={refresher} setRefresher={setRefresher} /> : null }
      </div>


      
    </>
  );
}