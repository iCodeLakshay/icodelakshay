'use client'
import React, { useState, useEffect } from 'react';

const HeroSectionBG = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 5 }, (_, i) => {
      const starTailLength = Math.random() * 2.5 + 5; // 5em to 7.5em
      const topOffset = Math.random() * 100; // 0vh to 100vh
      const fallDuration = Math.random() * 10 + 6; // 6s to 12s
      const fallDelay = Math.random() * 10; // 0s to 10s
      
      return {
        id: i,
        starTailLength,
        topOffset,
        fallDuration,
        fallDelay
      };
    });
    setStars(generatedStars);
  }, []);

  if (stars.length === 0) {
    return null; 
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'radial-gradient(ellipse at bottom, #2b1055 0%, #000000 100%)'
        }}
      />
      
      {/* Stars container */}
      <div 
        className="fixed top-0 left-0 w-full h-[120%] -rotate-45"
        style={{ transformOrigin: 'center center' }}
      >
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute left-0 rounded-full"
            style={{
              '--star-tail-length': `${star.starTailLength}em`,
              '--star-tail-height': '2px',
              '--star-width': `calc(${star.starTailLength}em / 6)`,
              '--fall-duration': `${star.fallDuration}s`,
              '--fall-delay': `${star.fallDelay}s`,
              top: `${star.topOffset}vh`,
              width: `${star.starTailLength}em`,
              height: '2px',
              color: '#ffffff',
              background: 'linear-gradient(45deg, currentColor, transparent)',
              filter: 'drop-shadow(0 0 6px currentColor)',
              transform: 'translate3d(104em, 0, 0)',
              animation: `fall ${star.fallDuration}s ${star.fallDelay}s linear infinite, tail-fade ${star.fallDuration}s ${star.fallDelay}s ease-out infinite`
            }}
          >
            {/* Star cross effect - before */}
            <div
              className="absolute top-0 rounded-full"
              style={{
                left: `calc(${star.starTailLength}em / -12)`,
                width: `calc(${star.starTailLength}em / 6)`,
                height: '100%',
                background: 'linear-gradient(45deg, transparent, currentColor, transparent)',
                transform: 'rotate(45deg)',
                animation: 'blink 2s linear infinite'
              }}
            />
            {/* Star cross effect - after */}
            <div
              className="absolute top-0 rounded-full"
              style={{
                left: `calc(${star.starTailLength}em / -12)`,
                width: `calc(${star.starTailLength}em / 6)`,
                height: '100%',
                background: 'linear-gradient(45deg, transparent, currentColor, transparent)',
                transform: 'rotate(-45deg)',
                animation: 'blink 2s linear infinite'
              }}
            />
          </div>
        ))}
      </div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translate3d(-30em, 0, 0);
          }
        }

        @keyframes tail-fade {
          0%, 50% {
            width: var(--star-tail-length);
            opacity: 1;
          }
          70%, 80% {
            width: 0;
            opacity: 0.4;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }

        @keyframes blink {
          50% {
            opacity: 0.6;
          }
        }

        /* Mobile optimization - disable tail-fade for better performance */
        @media screen and (max-width: 750px) {
          div[class*='star'] {
            animation: fall var(--fall-duration) var(--fall-delay) linear infinite !important;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSectionBG;
