import { Link, Navigate} from 'react-router-dom'
import Games from '../pages/Games/Games'
export default function Navibar ({ setCurrentParty, currentParty, games, setGames, currentGame, setCurrentGame,currentUser, setCurrentUser}) {
  const handleLogout = () => {
    if (localStorage.getItem('jwt')) localStorage.removeItem('jwt')
    setCurrentUser(null)    
    return <Navigate to='/' />  
  }
  return (
    <>
      <div className='navbar-logo' >
        <Link to='/'><h1>LFG</h1></Link>
      </div>
      <div className='navbar-main' >        
        <Games currentParty={currentParty} setCurrentParty={setCurrentParty} games={games} setGames={setGames}  currentGame={currentGame} setCurrentGame={setCurrentGame}/>
      </div>

      <div className='navbar-footer'>      
      {currentUser ? 
      <>
        <p><Link to='/dashboard' >Profile</Link></p>        
        <p><Link to='/' onClick={handleLogout}>Logout</Link></p>        
      </>
      :
      <>
        <p><Link to='/login'>Login</Link></p>
        <p><Link to='/signup'>Sign Up</Link></p>
      </>
      } 
      <p><Link to='/about'>About</Link></p>     
      {/* <p><Link to='/'>Help</Link></p> */}
      </div>
    </>
  )
}
