import React from 'react';
import './App.css';
import Home from './pages/home';
import Kontakt from './pages/kontakt';
import Ommig from './pages/ommig';
import Projekt from './pages/projekt';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/kontakt' element={<Kontakt/>}/>
            <Route path='/omming' element={<Ommig/>}/>
            <Route path='/projekt' element={<Projekt/>}/>
        </Routes>

      </Router>
      
     
    </div>
  );
}

export default App;
