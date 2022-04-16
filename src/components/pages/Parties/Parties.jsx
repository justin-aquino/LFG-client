import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Parties({ parties, search, setSearch, currentParties, setCurrentParties, currentGame, setCurrentGame, currentParty, setCurrentParty, refresher, setRefresher}) {

  
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
        <div key={`part-id-${idx}`}>      
        <Link to='' onClick={() => handlePartySelect(element)} key={`${element.name}-part-${idx}`}>{element.partyName}</Link>
      </div>
    );
  });
  return(
  <>
    <div className="navbar-party">    
    <div className='header-on-dark'><h1>{currentGame.name}</h1></div>
    <div style={{textAlign: "center"}}>
      <h4 style={{marginBottom: 0}}>Search parties</h4>
      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    </div>
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
