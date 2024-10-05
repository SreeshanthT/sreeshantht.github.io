import React, { useState, useEffect, useCallback } from 'react';
import { headerStyles, navBarContents } from '../../../../constants/constants';
import './WebNavBar.css';

function WebNavBar(props) {
  const [scrollLevel, setScrollLevel] = useState(0);
  const [headerStyle, setHeaderStyle] = useState(headerStyles);
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    setScrollLevel(window.scrollY);
    
    let active = '';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120 && window.scrollY < section.offsetTop + section.offsetHeight) {
        active = section.id;
      }
    });
    setActiveSection(active);
  };

  const scrollInto = (id) => {
    let sectionTarget = document.getElementById(id);
    if(sectionTarget){
      sectionTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    var target = event.target.parentNode.getAttribute('data-secion')
    if(target){
      scrollInto(target)
    }
  };

  const handleHeaderStyle = useCallback(() => {
    if (scrollLevel >= 80) {
      setHeaderStyle(prev => ({
        ...prev,
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
        backgroundColor: 'rgb(255 255 255 / 10%)',
        backdropFilter: 'blur(60px)'
      }));
    } else {
      setHeaderStyle(headerStyles);
    }
  }, [scrollLevel]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleHeaderStyle();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleHeaderStyle]);

  return (
    <div id="header" style={headerStyle}>
      <div className="header-left"></div>
      <div className="header-center nav-menu">
        <ul>
          {navBarContents.map((obj) => (
            <li key={obj.id}>
              <a
                href={`#${obj.id}`}
                onClick={handleClick}
                data-secion={obj.id}
                className={`nav-link scrollto ${activeSection === obj.id ? 'active' : ''}`}
              >
                <i className={`${obj.iconClsName}`}></i>
                <span>{obj.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right"></div>
    </div>
  );
}

export default WebNavBar;
