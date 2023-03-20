import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom"
import home from  "./Home"
import Landing from "./screens/Landing"
 
function App() {
  return (
   <div className="app">
    <Routes>
      <Route path='landing' element={<Landing />} />
    </Routes>
</div>
  );
}

export default App;
