import { useState, useEffect, createContext } from 'react';
import { Outlet } from 'react-router-dom';

export const WindowWidthContext = createContext(0);

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
