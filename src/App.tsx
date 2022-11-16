import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Kontakt from './pages/kontakt';
import Ommig from './pages/ommig';

function App() {
  return (
    <div className="App">
      <Home/> 
      <Kontakt/>
      <Ommig/>
    </div>
  );
}

export default App;
