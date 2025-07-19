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
        {/* Cercle principal épuré */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="url(#modernGradient)"
          strokeWidth="2"
          fill="none"
        />
        
        {/* Aiguille Nord moderne - forme géométrique */}
        <path
          d="M50 10 L52 48 L50 50 L48 48 Z"
          fill="url(#modernGradient)"
        />
        
        {/* Aiguille Sud moderne - forme géométrique */}
        <path
          d="M50 90 L48 52 L50 50 L52 52 Z"
          fill="#64748b"
        />
        
        {/* Point central moderne */}
        <circle
          cx="50"
          cy="50"
          r="2"
          fill="url(#modernGradient)"
        />
        
        {/* Marques directionnelles minimalistes */}
        <circle cx="50" cy="15" r="1.5" fill="url(#modernGradient)" />
        <circle cx="85" cy="50" r="1.5" fill="url(#modernGradient)" opacity="0.6" />
        <circle cx="50" cy="85" r="1.5" fill="url(#modernGradient)" opacity="0.6" />
        <circle cx="15" cy="50" r="1.5" fill="url(#modernGradient)" opacity="0.6" />
        
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