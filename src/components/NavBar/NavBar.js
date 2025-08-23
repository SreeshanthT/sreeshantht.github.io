import React, { useState, useEffect } from 'react';
import MobNavBar from './components/MobNavBar/MobNavBar';
import WebNavBar from './components/WebNavBar/WebNavBar';

function NavBar() {
  const [size, setSize] = useState(window.innerWidth);

  const handleSizeReduction = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleSizeReduction);

    // Cleanup to remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleSizeReduction);
    };
  }, []); // Empty array ensures useEffect runs only once when the component mounts

  return size >= 768 ? <WebNavBar /> : <MobNavBar />;
}

export default NavBar;
