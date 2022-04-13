import { useState } from "react";
import Parties from "./pages/Parties/Parties";

export default function Party(){
    const [partyList, showPartyList] = useState(true)
    return(
        <>
        
        {  partyList       
        ? 
        <Parties />
        :
        null
        }
        


        </>
    )
}