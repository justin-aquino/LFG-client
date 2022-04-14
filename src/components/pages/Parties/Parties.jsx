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
      <div key={`${element.name}-part-${idx}`}>
        <Link to=''>{element.partyName}</Link>
      </div>
    );
  });

  return <>
  <h2>{currentGame.name}</h2>
  {listParties}
  </>;
}