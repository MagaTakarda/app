import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import landing from "./screen/Landing";
import login from "./screen/Login";
import Home from './screen/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/landing" element={ <landing/> } />
        <Route path="/login" element={ <login/> } />
        <Route path="/home" element={ <home/> } />
      </Routes>
    </div>
  );
}

export default App;
