import { Link } from 'react-router-dom'
import Games from '../pages/Games/Games'
export default function Navibar ({ games, setGames, currentGame, setCurrentGame}) {
  return (
    <>
      <div className='navbar-logo'>
        <h1>LFG</h1>
      </div>
      <div className='navbar-main'>        
        <Games games={games} setGames={setGames}  currentGame={currentGame} setCurrentGame={setCurrentGame}/>
      </div>
      <div className='navbar-footer'>      
      <p><Link to='/about'>Logout</Link></p>
      <p><Link to='/about'>About</Link></p>
      <p>Help</p>
      </div>
    </>
  )
}
