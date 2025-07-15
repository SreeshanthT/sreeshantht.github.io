import React from 'react';
import { socialsIcons, ABOUT } from '../../constants/constants';
import './Footer.css';

const Footer = () => {
    return(
        <footer id="footer">
            <div className="container">
            <h3>{ABOUT.name}</h3>
            <p></p>
            <div className="social-links">
                {socialsIcons.filter(s => s.onload).map((social, idx) => (
                <a
                    key={social.name}
                    href={social.onload}
                    className={social.class}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className={`bx bxl-${social.class}`}></i>
                </a>
                ))}
            </div>
            <div className="copyright">
                &copy; Copyright <strong><span>MyResume</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
                {/* All the links in the footer should remain intact. */}
                {/* You can delete the links only if you purchased the pro version. */}
                {/* Licensing information: [license-url] */}
                {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/ */}
                {/* Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
            </div>
            </div>
        </footer>
    );
}

export default Footer; 