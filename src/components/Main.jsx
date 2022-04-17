import Parties from './pages/Parties/Parties';
import Party from './pages/Parties/Party';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Main({currentParty, setCurrentParty, currentGame, setCurrentGame, currentUser, refresher, setRefresher}) {
    const navigate = useNavigate()
    const [currentParties, setCurrentParties] = useState([]);

    useEffect(() => {

      if(!currentUser){
        navigate('/login')
      }
    }, [])
  return (
    <>
    {currentUser? <>
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
      </div></> : <></>}


      
    </>
  );
}