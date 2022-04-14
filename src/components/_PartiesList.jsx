import { useState } from "react";
import Parties from "./pages/Parties/Parties";

export default function PartiesList({setCurrentParty}){
    const [partyList, showPartyList] = useState(true)
    
    return(
        <>
        
        {  partyList       
        ? 
        <Parties setCurrentParty={setCurrentParty}/>
        :
        null
        }
        


        </>
    )
}