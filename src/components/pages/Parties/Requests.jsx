import { Link } from "react-router-dom"
export default function Requests({ currentParty }) {        
    if(currentParty.requests) {        
        const listRequest = currentParty.requests.map((element, idx) => {
            return(
                <div key={`party-${idx}`}>                
                <Link to=''>{element.userName}</Link>
                </div>
            )
        })
        return(
            <>
            <h3>Requests</h3>            
            {listRequest}
            </>
        )
    // if currentParty is empty do this part
    } else {        
        console.log('helloe')
        return (
        <>
        There are no pending request.
        </>        
        )
    }    
}
