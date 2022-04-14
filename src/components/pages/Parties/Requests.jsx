export default function Requests({ currentParty }) {        
    if(currentParty.requests) {        
        const listRequest = currentParty.requests.map((element, idx) => {
            return(
                <>
                
                <h3>{element.userName} - {element.message}</h3>
                </>
            )
        })
        return(
            <>
            <h1>Requests</h1>
            {listRequest}
            </>
        )
    // if currentParty is empty do this part
    } else {
        console.log('empty')
        return (
        <>
        There are no pending request.
        </>        
        )
    }    
}
