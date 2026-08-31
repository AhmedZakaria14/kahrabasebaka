'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Create a spring animation for smooth, non-jittery progress bar movement
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 pointer-events-none overflow-hidden">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-400 via-sky-400 to-blue-600 origin-right shadow-[0_0_12px_rgba(56,189,248,0.6)]"
        style={{ scaleX }}
      />
    </div>
  );
}
