import Requests from './Requests';
import Members from './Members';
import { Link } from 'react-router-dom';
import RequestForm from './RequestForm';

function Party({ currentParty, currentUser }) {

  return (
    <>
    <div className="party-container">
      <div className="party-left">
        <div id="header">
          <h1>{currentParty.partyName} Party</h1>
        </div>
        <div id="post area">
          <p>
            {currentParty.description}
          </p>
        </div>
        <div>
          <Link to=''>Join this party</Link>
        </div>
      </div>
      <div className="part-right">
        <Members currentParty={currentParty}/>
        <Requests currentParty={currentParty}/>
        
      </div>
    </div>
    <RequestForm currentParty={currentParty} currentUser={currentUser} />
    </>
  );
}

export default Party;
