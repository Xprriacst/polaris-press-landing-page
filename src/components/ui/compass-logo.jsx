import React from 'react';

const CompassLogo = ({ className = "h-8 w-8" }) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cercle principal moderne */}
        <circle
          cx="50"
          cy="50"
          r="44"
          stroke="url(#modernGradient)"
          strokeWidth="2.5"
          fill="#fff"
        />
        {/* Rose des vents subtile */}
        <g opacity="0.13">
          <polygon points="50,12 54,50 50,88 46,50" fill="url(#modernGradient)" />
          <polygon points="12,50 50,54 88,50 50,46" fill="url(#modernGradient)" />
        </g>
        {/* Aiguille Nord minimaliste */}
        <polygon points="50,18 53,50 50,54 47,50" fill="url(#modernGradient)" />
        {/* Aiguille Sud minimaliste */}
        <polygon points="50,82 53,54 50,50 47,54" fill="#64748b" />
        {/* Point central */}
        <circle
          cx="50"
          cy="50"
          r="3.5"
          fill="#fff"
          stroke="url(#modernGradient)"
          strokeWidth="1.5"
        />
        {/* Marques directionnelles discrètes */}
        <circle cx="50" cy="10" r="1.2" fill="url(#modernGradient)" />
        <circle cx="90" cy="50" r="1.2" fill="url(#modernGradient)" />
        <circle cx="50" cy="90" r="1.2" fill="url(#modernGradient)" />
        <circle cx="10" cy="50" r="1.2" fill="url(#modernGradient)" />
        {/* Gradient moderne */}
        <defs>
          <linearGradient id="modernGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default CompassLogo;