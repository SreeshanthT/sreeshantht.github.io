import React from 'react'
import {navBarContents} from '../../../../constants/constants'

import './MobNavBar.css'

function MobNavBar() {
  return (
    <div className='mob-header' id='mob-header'>
        <div className="mob-nav mob-nav-container">
            <a href="" className="nav__logo">Sree</a>
            <div className="mob-nav-menu" id="nav-menu">
                <ul className="nav__list grid">
                    {
                        navBarContents.map((obj)=>{
                            return(
                                <li className="nav__item">
                                    <a href={`#${obj.id}`} className="nav__link">
                                        <i className={`${obj.iconClsName} nav__icon`}></i>
                                        <span>{obj.title}</span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <i class='bx bx-x nav__close' id='nav-close'></i>
            </div>
            <div className="nav__btns">
                <div className="nav__toggle" id="nav-toggle">
                    <i class='bx bx-grid-alt'></i>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobNavBar