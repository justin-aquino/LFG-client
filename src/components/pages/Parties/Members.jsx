export default function Members ({ currentParty }) {


  const makeAdmin = (member) => {
      console.log(member)
  }

  const kickMember = (member) => {
      console.log(member)
  }

  const mappedMembers = currentParty.members.map(member => {
    if (member.admin === true) {      
      return <div className="name-list">{member.userName} (Admin)</div>
    } else {
      return (
        <div className="name-list">
            {member.userName}
            <span onClick={() => {makeAdmin(member)}}> ✅</span>
            <span onClick={() => {kickMember(member)}}>❌</span>
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


