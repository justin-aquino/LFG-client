import Parties from "./pages/Parties/Parties";

export default function Main(currentGame, setCurrentGame) {        
    return (
        <>
        <div className="navbar-party">
        <h1>
            {currentGame.currentGame.name}
        </h1>
        <Parties currentGame={currentGame.currentGame} setCurrentGame={setCurrentGame} />
        </div>        
        </>
    )    
}