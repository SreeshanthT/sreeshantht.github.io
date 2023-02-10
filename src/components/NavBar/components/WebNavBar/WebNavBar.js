import React,{ useState, useEffect, useCallback } from 'react'
import {headerStyles, navBarContents} from '../../../../constants/constants'
import './WebNavBar.css'

function WebNavBar(props) {
  const [scrollLevel, setScrollLevel] = useState()
  const [headerStyle,setHeaderStyle] = useState(headerStyles)
  const [activeSection, setActiveSection] = useState("hero");

  const handleScroll = ()=>{
    const sections = document.querySelectorAll("section");
    setScrollLevel(window.pageYOffset);
    let active = "";
    sections.forEach(section => {
      if (window.pageYOffset >= section.offsetTop - 80 && window.pageYOffset < section.offsetTop + section.offsetHeight) {
        active = section.id;
      }
    });
    setActiveSection(active);
  }
  const scrollInto = (id)=>{
    let sectionTarget = document.getElementById(id);
    sectionTarget.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    window.scrollTo(0,sectionTarget.offsetTop-80);
  }
  const handleClick = (event)=>{
    event.preventDefault();
    scrollInto(event.target.parentNode.getAttribute('data-secion'))
  }

  const handleHeaderStyle = useCallback(()=>{
    if(scrollLevel && scrollLevel >= 80){
      setHeaderStyle({...headerStyle,
        // backgroundColor:'rgb(255 255 255 255);',
        boxShadow:'rgba(0, 0, 0, 0.2) 0px 4px 12px',
        backgroundColor:'rgb(255 255 255 / 10%);',
        backdropFilter:'blur(60px)'
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
                    onClick={handleClick}
                    data-secion={obj.id}
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