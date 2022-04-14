import Requests from './Requests';
import Members from './Members';

function Party({ currentParty }) {
  return (
    <div className="party-container">
      <div className="party-left">
        <div id="header">
          <h1>{currentParty.partyName} Party</h1>
        </div>
        <div id="post area">
          <h2> post</h2>
          <h2> post</h2>
          <h2> post</h2>
        </div>
      </div>
      <div className="part-right">
        <Members currentParty={currentParty}/>
        <Requests currentParty={currentParty}/>
      </div>
    </div>
  );
}

export default Party;
