import React,{ useState, useEffect, useCallback } from 'react'
import {headerStyles, navBarContents} from '../../../../constants/constants'
import './WebNavBar.css'

function WebNavBar() {
  const [scrollLevel, setScrollLevel] = useState()
  const [headerStyle,setHeaderStyle] = useState(headerStyles)
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = ()=>{
    const sections = document.querySelectorAll("section");
    setScrollLevel(window.pageYOffset);
    let active = "";
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 50 && window.pageYOffset < section.offsetTop + section.offsetHeight) {
        active = section.id;
      }
    });
    setActiveSection(active);
  }
  const handleHeaderStyle = useCallback(()=>{
    if(scrollLevel && scrollLevel >= 80){
      setHeaderStyle({...headerStyle,
        backgroundColor:'#ffff',
        boxShadow:'rgba(0, 0, 0, 0.1) 0px 4px 12px'
      })
    }else{
      setHeaderStyle(headerStyles)
    }
  },[scrollLevel,headerStyle])

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    handleHeaderStyle()
    return (()=>{
      window.removeEventListener("scroll", handleScroll);
    });
  },[handleHeaderStyle]);

  return (
    <div id="header" style={headerStyle}>
      <div className='header-left'></div>
      <div className='header-center nav-menu'>
        <ul>
          {
            navBarContents.map((obj)=>{
              return(
                <li>
                  <a href={`#${obj.id}`} 
                    className={`nav-link scrollto ${activeSection === obj.id ? 'active' : ''}`}>
                    <i className={`${obj.iconClsName}`}></i>
                    <span>{obj.title}</span>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className='header-right'></div>
    </div> 
  )
}

export default WebNavBar