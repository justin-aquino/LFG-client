function Members ({ currentParty }) {

  const makeAdmin = (member) => {
      console.log(member)
  }

  const kickMember = (member) => {
      console.log(member)
  }

  const mappedMembers = currentParty.members.map(member => {
    if (member.admin === true) {
      return <p>{member.userName} (Admin)</p>
    } else {
      return (
        <h3 >
            {member.userName} - {member.message} 
            <span onClick={() => {makeAdmin(member)}}> ✅</span>
            <span onClick={() => {kickMember(member)}}>❌</span>
        </h3>

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

export default Members
