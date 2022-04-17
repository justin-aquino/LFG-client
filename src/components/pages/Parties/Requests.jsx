import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Requests ({ currentParty, setCurrentParty, currentUser, setCurrentUser }) {

  // const filteredMember = currentParty.members.filter(member => {
  //   return member.userId === currentUser.id
  // })

  // console.log(filteredMember[0])

  const deleteRequest = async request => {
    console.table(request)
    const form = {
      userId: request.userId,
      isApproved: true,
      userName: request.userName,
      message: request.message,
      _id: request._id
    }
    try {
      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}/decline`,form)
        .then(response => {
          setCurrentParty(response.data.foundParty)
        })
    } catch (error) {}
  }
  const approveRequest = async request => {
    console.log(request)
    const form = {
      userId: request.userId,
      userName: request.userName,
      _id: request._id //I added this because it was not deleting the approved member's request in the pending list.
    }
    try {
      await axios
        .put(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}/approve`,form)
        .then(response => {
          setCurrentParty(response.data.foundParty)
        })
    } catch (error) {}
  }
  if (currentParty.requests) {
    const listRequest = currentParty.requests.map((element, idx) => {        
      return (
        <>
        <div className='name-list' id={`requestID-${idx}`}>
          <span className='tooltip left' data-text={element.message}> {element.userName} - </span>  
          {/* {
            filteredMember[0].admin === true ? //this is always index zero, because filteredMember array contains only 1 object. */}
            <>
              <Link to='' onClick={() => {approveRequest(element)}}>{' '}Approve{' '}</Link>|
              <Link to='' onClick={() => {deleteRequest(element)}}>{' '}Deny{' '}</Link>
            </>
            {/* :
            <span> Status: pending </span>
          }                 */}
          </div>
        </>
      )
    })
    return (
      <>
        <h3>Join Requests</h3>
        {listRequest}
      </>
    )    
  } else {    
    return <>There are no pending request.</>
  }
}
