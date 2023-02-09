import React,{ useState, useEffect } from 'react'
import './NavBar.css'

function NavBar() {
  const [scrollLevel, setScrollLevel] = useState()
  const handleScroll = ()=>{
    setScrollLevel(window.pageYOffset);
    console.log(window.pageYOffset)
    
  }
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return (()=>{
      window.removeEventListener("scroll", handleScroll);
    });
  },[]);
  return (
    <div id="header" style={scrollLevel >= 80 ?{
      backgroundColor:'#ffff',
      boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'}:{
        backgroundColor:'transparent',
        boxShadow:'rgba(0, 0, 0, 0) 0px 4px 12px'
      }}>
      <div className='header-left'></div>
      <div className='header-center nav-menu'>
        <ul>
            <li><a href="#hero" className={"nav-link scrollto"}><i className={"bx bx-home"}></i> <span>Home</span></a></li>
            <li><a href="#about" className={"nav-link scrollto"}><i className={"bx bx-user"}></i> <span>About</span></a></li>
            <li><a href="#resume" className={"nav-link scrollto"}><i className={"bx bx-file-blank"}></i> <span>Resume</span></a></li>
            <li><a href="#portfolio" className={"nav-link scrollto"}><i className={"bx bx-book-content"}></i> <span>Portfolio</span></a></li>
            <li><a href="#services" className={"nav-link scrollto"}><i className={"bx bx-server"}></i> <span>Services</span></a></li>
            <li><a href="#contact" className={"nav-link scrollto"}><i className={"bx bx-envelope"}></i> <span>Contact</span></a></li>
        </ul>
      </div>
      <div className='header-right'></div>
    </div>  
  )
}

export default NavBar