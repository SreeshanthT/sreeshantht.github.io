import React, { useEffect, useState } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const toggleBacktotop = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener('scroll', toggleBacktotop);
    window.addEventListener('load', toggleBacktotop);
    return () => {
      window.removeEventListener('scroll', toggleBacktotop);
      window.removeEventListener('load', toggleBacktotop);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='back-to-top-container'>
      <a
        href="#"
        className={`back-to-top d-flex align-items-center justify-content-center${active ? ' active' : ''}`}
        onClick={handleClick}
        aria-label="Back to top"
      >
        {/* Replace with your icon library if needed */}
        <span className="back-to-top-icon">↑</span>
      </a>
    </div>
  );
};

export default BackToTop;
