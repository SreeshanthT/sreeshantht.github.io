import React,{ useState, useEffect } from 'react'
import WebNavBar from './components/WebNavBar/WebNavBar'
import './NavBar.css'

function NavBar() {
  const [size, setSize] = useState(window.innerWidth)
  const handleSizeReduction = ()=>{
    setSize(window.innerWidth)
  }
  useEffect(()=>{
    window.addEventListener('resize', handleSizeReduction);
    return (()=>{
      window.removeEventListener("resize", handleSizeReduction);
    });
  },);
  return size >=768 ?(
    <WebNavBar/> 
  ):null
}

export default NavBar