import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedCounter = ({ end, duration = 2, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      if (typeof end === 'string' && end.includes('x')) {
        // Handle multiplier format like "x4"
        const multiplier = parseInt(end.replace('x', ''));
        setCount(Math.floor(easeOutCubic * multiplier));
      } else if (typeof end === 'string' && end.includes('%')) {
        // Handle percentage format like "95%" or "+25%"
        const percentage = parseInt(end.replace(/[+%]/g, ''));
        setCount(Math.floor(easeOutCubic * percentage));
      } else if (typeof end === 'string' && end.includes('h')) {
        // Handle hours format like "4h"
        const hours = parseInt(end.replace('h', ''));
        setCount(Math.floor(easeOutCubic * hours));
      } else {
        // Handle regular numbers
        setCount(Math.floor(easeOutCubic * parseInt(end)));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  const formatValue = () => {
    if (typeof end === 'string' && end.includes('x')) {
      return `x${count}`;
    } else if (typeof end === 'string' && end.includes('%')) {
      const hasPlus = end.includes('+');
      return hasPlus ? `+${count}%` : `${count}%`;
    } else if (typeof end === 'string' && end.includes('h')) {
      return `${count}h`;
    } else {
      return `${count}${suffix}`;
    }
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {formatValue()}
    </motion.div>
  );
};

export default AnimatedCounter;