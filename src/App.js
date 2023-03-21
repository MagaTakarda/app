import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import Landing from "./screens/Landing"
import Home from "./screens/Home"
import Login from "./screens/Login"
 
function App() {
  return (
   <div className="app">
    <Routes>
      <Route path='landing' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<Login />} />
    </Routes>
</div>
  );
}

export default App;
