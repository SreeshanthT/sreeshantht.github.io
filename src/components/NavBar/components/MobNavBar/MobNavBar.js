import React, {useEffect, useState} from 'react'
import {navBarContents} from '../../../../constants/constants'

import './MobNavBar.css'

function MobNavBar() {
    const [activeSection, setActiveSection] = useState("hero");
    const scrollInto = (id)=>{
        let sectionTarget = document.getElementById(id);
        sectionTarget.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        window.scrollTo(0,sectionTarget.offsetTop-10);
    }
    const handleScroll = (sectioId=null)=>{
        if(sectioId){
            setActiveSection(sectioId)
        }else{
            const sections = document.querySelectorAll("section");
            let active = "";
            sections.forEach(section => {
              if (window.pageYOffset >= section.offsetTop - 80 && window.pageYOffset < section.offsetTop + section.offsetHeight) {
                active = section.id;
              }
            });
            setActiveSection(active);
        }
    }
    const handleClick = (event)=>{
        event.preventDefault();
        let sectioId = event.target.parentNode.getAttribute('data-secion')
        scrollInto(sectioId)
        document.getElementById('nav-menu').classList.remove('show-menu')
        handleScroll(sectioId)
    }

    useEffect(()=>{
        handleScroll()
    },[])

    return (
        <div className='mob-header' id='mob-header'>
            <div className="mob-nav mob-nav-container">
                <a href="#home" className="nav__logo">Sree</a>
                <div className="mob-nav-menu" id="nav-menu">
                    <ul className="nav__list grid">
                        {
                            navBarContents.map((obj)=>{
                                return(
                                    <li className="nav__item">
                                        <a href={`#${obj.id}`} 
                                            className={`nav__link ${activeSection === obj.id ? 'active' : ''}`} 
                                            onClick={handleClick} 
                                            data-secion={obj.id}>
                                            <i className={`${obj.iconClsName} nav__icon`}></i>
                                            <span>{obj.title}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <i class='bx bx-x nav__close' id='nav-close' onClick={()=>{
                        document.getElementById('nav-menu').classList.remove('show-menu')
                    }}></i>
                </div>
                <div className="nav__btns">
                    <div className="nav__toggle" id="nav-toggle" onClick={()=>{
                        document.getElementById('nav-menu').classList.add('show-menu')
                    }}>
                        <i class='bx bx-grid-alt'></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobNavBar