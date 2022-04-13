import { Link } from 'react-router-dom'
import Games from '../pages/Games/Games'
export default function Navibar ({ games, setGames, currentGame, setCurrentGame}) {
  return (
    <>
      <div className='navbar-logo'>
        <h1>LFG</h1>
      </div>
      <div className='navbar-main'>
        <Link to='/'>Link </Link>
        <Games games={games} setGames={setGames}  currentGame={currentGame} setCurrentGame={setCurrentGame}/>
      </div>
      <div className='navbar-footer'>
      <hr />
      <p>Login</p>
      <p>About</p>
      <p>Help</p>
      </div>
    </>
  )
}
