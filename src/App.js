import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Games from './components/pages/Games/Games';
import Parties from './components/pages/Parties/Parties';
import Dashboard from './components/pages/Users/Dashboard';
import Register from "./components/Register"
import SearchGames from './components/pages/Games/SearchGames';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/games'
            element={<Games />}
          />
          <Route 
            path='/games/browse'
            element={<SearchGames />}
          />
          <Route 
            path='/game/party'
            element={<Parties />}
          />
          <Route 
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
