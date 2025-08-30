import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring } from 'motion/react';
import icons from './launcher/icons.js';
import './Intro.css';

const AnimatedText = ({ text }) => {
  const spring = useSpring(0, {
    type: 'spring',
    stiffness: 100,
    damping: 50,
    ease: 'easeInOut',
    bounce: 0.25,
  });

  useEffect(() => {
    spring.set(768);
  }, [text]);

  return (
    <motion.div style={{ width: spring }}>
      {text}
    </motion.div>
  );
};

const Intro = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [x, setX] = useState(0);
  const [w, setW] = useState(0);
  const [y, setY] = useState(0);
  const [h, setH] = useState(0);
  const minHolderRef = useRef(null);

  const handleLinkHover = (e) => {
    const rect = minHolderRef.current.getBoundingClientRect();
    const element = e.target.getBoundingClientRect();
    const width = element.width + 18;
    const height = element.height + 10;
    setX(element.left - rect.left - 9);
    setW(width);
    setY(element.top - rect.top - 5);
    setH(height);
  }
  return (
    <div className="intro-container">

      <div className="content-overlay">
        <div className="typing-text" style={{ height: '100px', overflow: 'hidden', whiteSpace: 'nowrap' }}>
          <AnimatedText text="Hi, I'm Joe Maddalone" />
        </div>

        <div className="intro-text">
          <h2>Software Engineer & Creative Developer</h2>
          <p>Building experiences that push the boundaries of what's possible on the web</p>
        </div>


        <div className="holder relative" ref={minHolderRef} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {isHovered && (
            <div id="floater" className="absolute w-100" style={{ top: y, left: x, width: w, height: h }}>
              <motion.div layoutId="underline" className="h-6" />
            </div>
          )}
          <div className="minimal-links">
          <h2>here:</h2>
            <a href="/writes" className="minimal-link" onMouseMove={(e) => handleLinkHover(e)}>
              i write
            </a>
            <a href="/experiments" className="minimal-link" onMouseMove={(e) => handleLinkHover(e)}>
              i experiment
            </a>
            <a href="/resume" className="minimal-link" onMouseMove={(e) => handleLinkHover(e)}>
              i work
            </a>
          </div>

          <div className="social-links mt-4 items-center">
          <h2>there:</h2>
            <a href="https://linkedin.com/in/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link linkined" onMouseMove={(e) => handleLinkHover(e)}>
              <svg viewBox="0 0 24 24" className="social-icon pointer-events-none">
                <path d={icons.linkedin} fill="currentColor" />
              </svg>
            </a>
            <a href="https://youtube.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link youtube" onMouseMove={(e) => handleLinkHover(e)}>
              <svg viewBox="0 0 24 24" className="social-icon pointer-events-none">
                <path d={icons.youtube} fill="currentColor" />
              </svg>
            </a>
            <a href="https://github.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link github" onMouseMove={(e) => handleLinkHover(e)}>
              <svg viewBox="0 0 24 24" className="social-icon pointer-events-none">
                <path d={icons.github} fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
