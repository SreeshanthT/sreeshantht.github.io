import React,{ useState, useEffect } from 'react'
import MobNavBar from './components/MobNavBar/MobNavBar'
import WebNavBar from './components/WebNavBar/WebNavBar'

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
  ): <MobNavBar/>
}

export default NavBar