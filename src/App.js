import React from 'react'

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <About></About>
      <Resume></Resume>
      <Portfolio></Portfolio>
      <Contact></Contact>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
