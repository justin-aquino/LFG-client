import Parties from "./pages/Parties/Parties";

export default function Main(currentGame, setCurrentGame) {  
    
    

    return (
        <>
        {currentGame.currentGame.name ?
        <div className="navbar-party">            
            <Parties currentGame={currentGame.currentGame} setCurrentGame={setCurrentGame} />
        </div>      
        :
        null
        }  
        </>
    )    
}