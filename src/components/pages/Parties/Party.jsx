import Requests from './Requests'
import Members from './Members'
import { Link } from 'react-router-dom'
import RequestForm from './RequestForm'
import { useEffect, useState } from 'react'
import EditParty from './EditParty'
import { dblClick } from '@testing-library/user-event/dist/click'
import axios from 'axios'

function Party ({ currentParty, setCurrentParty, currentUser, currentGame }) {
  const [selectedComponent, setSelectedComponent] = useState('0')

  useEffect(() => {    
    setSelectedComponent('0')
  }, [currentParty])
  
  const handleDeleteParty = () => {
    console.log(currentParty)
    // try {
    //   const deleteParty = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/party/${currentParty._id}`)

    // } catch (error) {
      
    // }
  }

  return (
    <>
      <div className='party-container'>
        <div className='header-on-dark'>
          <h1>{currentParty.partyName} Party</h1>
        </div>
        
          <p>Details : {currentParty.description}</p>
          
            {currentUser ?
            <Link to='' onClick={() => setSelectedComponent('2')}>
            Edit Party
          </Link>
            :
            null
            }
            {currentUser ?
            <Link to='' onClick={() => handleDeleteParty()}>
            Delete Party
          </Link>
            :
            null
            }
            {currentUser ? (
              <Link to='' onClick={() => setSelectedComponent('1')}>
                Join this party
              </Link>
            ) : null}          
      {selectedComponent === '1' ? (
        <RequestForm
          currentParty={currentParty}
          setCurrentParty={setCurrentParty}
          currentUser={currentUser}
          setSelectedComponent={setSelectedComponent}
        />
      ) : null}

      {selectedComponent === '2' ? (
        <EditParty
          currentGame={currentGame}
          currentParty={currentParty}
          setCurrentParty={setCurrentParty}
          currentUser={currentUser}
          setSelectedComponent={setSelectedComponent}
        />
      ) : null}
      </div>
      <div className='party-member-container'>
        <Members currentParty={currentParty} />
        <Requests currentParty={currentParty} />
      </div>
    </>
  )
}

export default Party
