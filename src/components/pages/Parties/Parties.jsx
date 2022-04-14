import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Parties({ currentGame, setCurrentGame }) {
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
  }, [currentGame]);

  const listParties = currentParties.map((element, idx) => {
    return (      
        <Link to='' key={`${element.name}-part-${idx}`}> &gt; {element.partyName}</Link>      
    );
  });

  return <>
  <h1>{currentGame.name}</h1>
  <h2>Parties available</h2>
  {listParties}
  
  </>;
}