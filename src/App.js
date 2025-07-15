import React from 'react'

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
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
      <Services></Services>
      <Contact></Contact>
      <Footer />
      {/* <Hero/> */}
    </div>
  );
}

export default App;
