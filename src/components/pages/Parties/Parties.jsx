import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Parties({ currentGame, setCurrentGame, currentParty, setCurrentParty, refresher, setRefresher}) {
  const [currentParties, setCurrentParties] = useState([]);
  

  useEffect(() => {
    try {
      axios.get(`${process.env.REACT_APP_SERVER_URL}/party/${currentGame._id}`)
        .then((res) => {          
          setCurrentParties(res.data);          
        });      
    } catch (err) {
      console.log(err);
    }
  }, [currentGame,refresher]);  
  const handlePartySelect = party => {      
    setCurrentParty(party)
  }
  
  const listParties = currentParties.map((element, idx) => {
    return (      
        <div>      
        <Link to='' onClick={() => handlePartySelect(element)} key={`${element.name}-part-${idx}`}>{element.partyName}</Link>
      </div>
    );
  });
  return(
  <>
    <div className="navbar-party">    
    <div className='header-on-dark'><h1>{currentGame.name}</h1></div>
    <fieldset>
    <legend><h2>Parties</h2></legend>
    {listParties}
    </fieldset>
    </div>
    <div className='navbar-party-footer'>
    <p><Link to='/party'>Create a party</Link></p>
    </div>  
  </>  
  
  ) 
}
