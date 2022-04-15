export default function Members ({ currentParty }) {


  const mappedMembers = currentParty.members.map(member => {
    if (member.admin === true) {      
      return <div className="name-list">{member.userName} (Admin)</div>
    } else {
      return <div className="name-list">{member.userName}</div>
    }
  })

  return (
    <>
      <h3>Members:</h3>      
      {mappedMembers}
    </>
  )

}


