import { FaCheckCircle } from "react-icons/fa"
import { TiDelete } from "react-icons/ti"

export default function Requests({ currentParty }) {     
    
    const deleteRequest = (request) => {
        console.log(request)
    }
    const approveRequest = (request) => {
        console.log(request)
    }
    
    if(currentParty.requests) {        
        const listRequest = currentParty.requests.map((element, idx) => {
            return(
                <div key={`party-${idx}`}>
                    <h3 >
                        {element.userName} - {element.message} 
                        <span onClick={() => {approveRequest(element)}}> ✅</span>
                        <span onClick={() => {deleteRequest(element)}}>❌</span>
                    </h3>

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
