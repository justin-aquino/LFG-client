function Requests(currentParty) {
    console.log(currentParty)

    if (currentParty){

        const allRequests = currentParty.requests.map((element, idx)=>{
    
            return(
                <div>
                    <h4>{element.message}</h4>
                </div>
            )
    
        })
    }

    return ( 
    <div className="party-request-container">
    <h1>requests</h1>
    </div>
     );
}

export default Requests;