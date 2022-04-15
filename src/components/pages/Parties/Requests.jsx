import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Requests ({ currentParty, setCurrentParty }) {
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
      userName: request.userName
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
          <span className='tooltip left' data-text={element.message}> {element.userName} </span>           
          <Link to='' onClick={() => {approveRequest(element)}}>{' '}Approve{' '}</Link>|
          <Link to='' onClick={() => {deleteRequest(element)}}>{' '}Deny{' '}</Link>          
          </div>
        </>
      )
    })
    return (
      <>
        <h3>Requests</h3>
        {listRequest}
      </>
    )    
  } else {    
    return <>There are no pending request.</>
  }
}
