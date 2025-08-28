import React, { useEffect, useRef, useState, useCallback } from 'react';
import icons from './launcher/icons.js';
import './ParticleTypingSystem.css';

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 4; // Random initial velocity
    this.vy = (Math.random() - 0.5) * 4;
    this.color = color;
    this.size = Math.random() * 4 + 2;
    this.life = 1;
    this.decay = Math.random() * 0.01 + 0.005;
    this.originalX = x;
    this.originalY = y;
  }

  update(mouseX, mouseY) {
    // Enhanced mouse interaction - make it much more responsive
    if (mouseX && mouseY) {
      const mouseDx = mouseX - this.x;
      const mouseDy = mouseY - this.y;
      const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

      if (mouseDistance < 120) { // Interaction radius
        const force = (120 - mouseDistance) / 120;
        // Make particles more responsive to mouse
        this.vx -= (mouseDx / mouseDistance) * force * 4.0; // Strong force
        this.vy -= (mouseDy / mouseDistance) * force * 4.0;

        // Add some attraction when mouse is close
        if (mouseDistance < 40) {
          this.vx += (mouseDx / mouseDistance) * 2.0;
          this.vy += (mouseDy / mouseDistance) * 2.0;
        }
      }
    }

    // Apply velocity with damping
    this.x += this.vx;
    this.y += this.vy;
    this.vx *= 0.92; // Less damping for more responsive movement
    this.vy *= 0.92;

    // Decay life
    this.life -= this.decay;

    // Add some organic movement
    this.vx += (Math.random() - 0.5) * 0.2;
    this.vy += (Math.random() - 0.5) * 0.2;
  }

  draw(ctx) {
    ctx.save();
    ctx.globalAlpha = this.life;

    // Create gradient for each particle
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.size
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'transparent');

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }
}

const ParticleTypingSystem = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: null, y: null });
  const [isTyping, setIsTyping] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "Hi, I'm Joe Maddalone";
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

  const createMouseParticles = useCallback((x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create particles at mouse position
    for (let i = 0; i < 3; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const particle = new Particle(x, y, color);
      particlesRef.current.push(particle);
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const { width, height } = canvas;

    // Clear canvas with fade effect
    ctx.fillStyle = 'rgba(17, 17, 17, 0.1)'; // Subtle fade for trails
    ctx.fillRect(0, 0, width, height);

    // Update and draw particles
    particlesRef.current = particlesRef.current.filter(particle => {
      particle.update(mouseRef.current.x, mouseRef.current.y);
      particle.draw(ctx);
      return particle.life > 0;
    });

    // Continue animation
    animationRef.current = requestAnimationFrame(animate);
  }, []);

  const handleMouseMove = useCallback((e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current.x = e.clientX - rect.left;
    mouseRef.current.y = e.clientY - rect.top;

    // Create particles on mouse move for interactivity
    if (Math.random() < 0.3) { // 30% chance
      createMouseParticles(mouseRef.current.x, mouseRef.current.y);
    }
  }, [createMouseParticles]);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current.x = null;
    mouseRef.current.y = null;
  }, []);

  const startTyping = useCallback(() => {
    setIsTyping(true);
    setCurrentIndex(0);
    setDisplayText('');

    // Clear existing particles
    particlesRef.current = [];

    const typeInterval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= fullText.length) {
          clearInterval(typeInterval);
          setIsTyping(false);
          return prev;
        }

        const newText = fullText.slice(0, prev + 1);
        setDisplayText(newText);

        return prev + 1;
      });
    }, 80);
  }, [fullText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Start animation loop
    animate();

    // Start typing after a short delay
    const timer = setTimeout(startTyping, 500);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      clearTimeout(timer);
    };
  }, [animate, startTyping]);

  return (
    <div className="particle-system-container">
      <canvas
        ref={canvasRef}
        className="particle-canvas"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />

      <div className="content-overlay">
        <div className="typing-text">
          {displayText}
          {isTyping && <span className="cursor">|</span>}
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
          <a href="https://linkedin.com/in/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d={icons.linkedin} fill="currentColor" />
            </svg>
          </a>
          <a href="https://youtube.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg viewBox="0 0 24 24" className="social-icon">
              <path d={icons.youtube} fill="currentColor" />
            </svg>
          </a>
					<a href="https://github.com/joemaddalone" target="_blank" rel="noopener noreferrer" className="social-link">
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
