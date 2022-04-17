import axios from "axios"
import { useState } from "react"


export default function Members ({ currentParty, setCurrentParty, currentUser, setCUrrentUser }) {

  const [form, setForm] = useState({
    userId: "",
    admin: true
  })

  // console.log(currentUser.id, currentParty.members[2].userId)

  // const filteredMember = currentParty.members.filter(member => {
  //   return member.userId === currentUser.id
  // })

  // console.log(filteredMember)

  const makeAdmin = async (member) => {
      setForm({...form, userId: member.userId})
      await axios
            .put(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}/co-admin`, form)
            .then(response => {

              setCurrentParty(response.data.foundParty)
            })
       }
  const kickMember = async (member) => {
    await axios
          .put(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}/kick`, {userId: member.userId})
          .then(response => {
            setCurrentParty(response.data.foundParty)
          })
  }
  const mappedMembers = currentParty.members.map((member, idx) => {
    if (member.admin === true) {      
      return <div  key={`member-id-${idx}`} className="name-list">{member.userName} (Admin)</div>
    } else {
      return (
        <div key={`member-id-${idx}`} className="name-list">
            {member.userName}
            {/* {
              filteredMember[0].admin ? //this is always index zero, because filteredMember array contains only 1 object. */}
              <>
                <span onClick={() => {makeAdmin(member)}}> ✅</span>
                <span onClick={() => {kickMember(member)}}>❌</span>
              </>
              {/* :
              null
            } */}
        </div>
      ) 
    }
  })

  return (
    <>
      <h3>Members:</h3>      
      {mappedMembers}
    </>
  )

}


