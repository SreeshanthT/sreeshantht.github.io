import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  // Import the AOS styles
import Skill from './Skill';
import { skillsData, SKILLS_PARA } from '../../constants/constants'
import { Waypoint } from 'react-waypoint';


export default function Skills(key) {

    const skillsContentRef = useRef(null);

    const handleWaypointEnter = () => {
        const progressBars = skillsContentRef.current.querySelectorAll('.progress .progress-bar');
        progressBars.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
    };

    useEffect(() => {
        AOS.init({
          duration: 1000, // You can specify the duration of the animation in milliseconds
          once: false,     // Whether animation should happen only once while scrolling down
        });

      }, []);

    return (
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Skills</h2>
                    <p>{SKILLS_PARA}</p>
                </div>

                <div className="row skills-content" ref={skillsContentRef}>
                    <Waypoint onEnter={handleWaypointEnter} offset="80%" key={key}>
                        <div className="row">
                            {
                                
                                skillsData.map((skill, idx)=>{
                                    return <Skill skill={skill}></Skill>
                                })
                            }
                        </div>
                    </Waypoint>
                </div>
            </div>
    )
}
