import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const getSize = () => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    const handler = () => setWindowSize(getSize());
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return windowSize;
};

export default useWindowSize;
