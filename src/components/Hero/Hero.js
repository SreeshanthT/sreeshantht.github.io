import React,{useEffect, useRef, useState} from 'react'
import AOS from "aos";
import Typed from "typed.js";
import {socialsIcons} from '../../constants/constants'

import './Hero.css' 
import "aos/dist/aos.css";
import 'boxicons/css/boxicons.min.css';

function Hero() {
    const el = useRef(null);
    const [socials, setSocials] = useState([])
    useEffect(() => {
        AOS.init();
        AOS.refresh();
        setSocials(socialsIcons)
        const typed = new Typed(el.current, {
            strings: ["Web Developer", "Python Developer", "Embedded Developer",],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100
        });

        return () => {
        typed.destroy();
        };
    },[]);
    return (
        <section id="hero" className='d-flex flex-column justify-content-center'>
            <div className="container" data-aos="zoom-in" data-aos-delay="100">
                <h1>Sreeshanth Thekkedath</h1>
                <p>I'm <span ref={el}></span></p>
                <div className="social-links">
                    { 
                        socials.map((obj,index)=>{
                            return(
                                <button class='social-link' key={index}>
                                    <i className={`bx bxl-${obj.class}`}></i>
                                </button>
                            )
                        })
                        
                    }
                </div>
            </div>
        </section>
    )
}

export default Hero