import { Link } from "react-router-dom";
function PartiesMap({parties, setCurrentParty, currentParties}) {
    console.log(parties)
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
    return ( 
        <>
        {listParties}
        </>
     );
}

export default PartiesMap;