function Members({currentParty}) {

    const mappedMembers = currentParty.members.map(member => {
        if (member.admin == true) {
            return <h3>{member.userName} - admin</h3>
        } else {
            return <h3> {member.userName}</h3>
        }
      })

    return ( 
        <div className="party-member-container">
            <h1>Members:</h1>
            {mappedMembers}
        </div>
     );
}

export default Members;