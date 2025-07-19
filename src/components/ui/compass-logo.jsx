import React from 'react';
import { motion } from 'framer-motion';

const CompassLogo = ({ className = "h-8 w-8" }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ rotate: 15 }}
      transition={{ duration: 0.3 }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Cercle extérieur */}
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          stroke="url(#compassGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Cercle intérieur */}
        <circle
          cx="50"
          cy="50"
          r="35"
          stroke="url(#compassGradient)"
          strokeWidth="1"
          fill="none"
          opacity="0.6"
        />
        
        {/* Aiguille Nord (Rouge) */}
        <motion.path
          d="M50 15 L45 45 L50 50 L55 45 Z"
          fill="#dc2626"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />
        
        {/* Aiguille Sud (Blanche) */}
        <motion.path
          d="M50 85 L45 55 L50 50 L55 55 Z"
          fill="#f8fafc"
          stroke="#64748b"
          strokeWidth="0.5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "50px 50px" }}
        />
        
        {/* Points cardinaux */}
        <text x="50" y="12" textAnchor="middle" className="text-xs font-bold" fill="url(#compassGradient)">N</text>
        <text x="88" y="54" textAnchor="middle" className="text-xs font-bold" fill="url(#compassGradient)">E</text>
        <text x="50" y="96" textAnchor="middle" className="text-xs font-bold" fill="url(#compassGradient)">S</text>
        <text x="12" y="54" textAnchor="middle" className="text-xs font-bold" fill="url(#compassGradient)">O</text>
        
        {/* Centre */}
        <circle
          cx="50"
          cy="50"
          r="3"
          fill="url(#compassGradient)"
        />
        
        {/* Définition du gradient */}
        <defs>
          <linearGradient id="compassGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CompassLogo;