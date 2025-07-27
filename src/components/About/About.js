import React from 'react';
import "./About.css"
import { aboutImg, aboutInfo } from "../../constants/constants"
import FactsSection from '../FactSection/FactSection';
import Skills from '../Skill/Skills';



const About = () => {
    return (
        <React.Fragment>
            <section id="about" className={"about"}>
                <div className={"container"} data-aos="fade-up">

                    <div className={"section-title"}>
                        <h2>About</h2>
                        <p>
                        Hey! I'm Sreeshanth T, passionate Software Engineer having many experiences of transforming complex problems into clean and efficient code. 
                        Thrives on building smart, scalable web applications that not only work but delight users with their performance and ease of use. 
                        More than three years of hands-on experience have honed my skills in Python, Django, React, along with the vast range of other technologies that qualify me as a full-stack wizard.
                        </p>
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-4"}>
                            <img src={aboutImg} className={"img-fluid"} alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>Software Engineer
                            {/* &amp; Web Developer. */}
                            </h3>
                            {/* <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p> */}
                            {(() => {
                                // Define the about info data

                                return (
                                    <div className="row">
                                        {aboutInfo.map((col, colIdx) => (
                                            <div className="col-lg-6" key={colIdx}>
                                                <ul>
                                                    {col.map((item, idx) => (
                                                        <li key={item.label}>
                                                            <i className="bi bi-chevron-right"></i> <strong>{item.label}:</strong>{" "}
                                                            {item.label === "Website" ? (
                                                                <span>
                                                                    <a href={item.value} target="_blank" rel="noopener noreferrer">Crio Portfolio</a>
                                                                </span>
                                                            ) : (
                                                                <span>{item.value}</span>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                );
                            })()}
                            <p>
                            Let's build something amazing together! If you need a reliable, capable developer to make your project alive, then get in touch with me! Whether it is a new application, an existing one to be built or revamped, or performance issues that you want fixed, let's get started!.
                            </p>
                        </div>
                    </div>

                </div>

                <FactsSection></FactsSection>
                <div id="skills" className="skills section-bg">
                    <Skills key={"skill-section"}/>
                </div>
            </section>
        </React.Fragment>
    );
}


export default About;