import React, { useEffect, useRef, useState, useCallback } from 'react';
import icons from './launcher/icons.js';
import './ParticleTypingSystem.css';


const ParticleTypingSystem = () => {

  return (
    <div className="particle-system-container">

      <div className="content-overlay">
        <div className="typing-text">
				Hi, I'm Joe Maddalone
        </div>

        <div className="intro-text">
          <h2>Software Engineer & Creative Developer</h2>
          <p>Building experiences that push the boundaries of what's possible on the web</p>
        </div>

        <div className="minimal-links">
          <a href="/writes" className="minimal-link">
            i write
          </a>
          <span className="separator">•</span>
          <a href="/experiments" className="minimal-link">
            i experiment
          </a>
					<span className="separator">•</span>
					<a href="/resume" className="minimal-link">
            i work
          </a>
        </div>

        <div className="social-links mt-4">
          <a href="https://linkedin.com/in/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link linkined">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d={icons.linkedin} fill="currentColor" />
            </svg>
          </a>
          <a href="https://youtube.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link youtube">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d={icons.youtube} fill="currentColor" />
            </svg>
          </a>
					<a href="https://github.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link github">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d={icons.github} fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ParticleTypingSystem;
