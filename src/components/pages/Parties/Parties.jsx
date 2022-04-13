import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Parties({ currentGame, setCurrentGame }) {
  const [currentParties, setCurrentParties] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(`${process.env.REACT_APP_SERVER_URL}/party/${currentGame._id}`)
        .then((res) => {
          console.log(res.data);
          setCurrentParties(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [currentGame]);

  const listParties = currentParties.map((element, idx) => {
    return (
      <div key={`${element.name}-part-${idx}`}>
        <p>{element.partyName}</p>
      </div>
    );
  });

  return <>{listParties}</>;
}