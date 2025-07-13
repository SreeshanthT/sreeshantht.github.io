import React from 'react'

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About></About>
      <Portfolio></Portfolio>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
