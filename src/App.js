import React,{useRef} from 'react'

import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const targetRef = useRef(null);
  return (
    <div className="App">
      <NavBar targetRef={targetRef}/>
      <Hero targetRef={targetRef}/>
      <About targetRef={targetRef}></About>
      {/* <Hero/> */}
    </div>
  );
}

export default App;
