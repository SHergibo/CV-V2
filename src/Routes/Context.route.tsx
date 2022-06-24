import { useState, useEffect } from 'react';
import WindowWidthContext from '../Context/WindowWidthContext';
import { Outlet } from 'react-router-dom';

const ContextRoute = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      <Outlet />
    </WindowWidthContext.Provider>
  );
};

export default ContextRoute;
