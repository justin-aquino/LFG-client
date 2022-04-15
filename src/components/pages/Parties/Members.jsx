function Members ({ currentParty }) {
  const mappedMembers = currentParty.members.map(member => {
    if (member.admin === true) {
      return <p>{member.userName} (Admin)</p>
    } else {
      return <p>{member.userName}</p>
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
