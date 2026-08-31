'use client';

import React from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'motion/react';

export type AnimationType = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-in' 
  | 'slide-right' 
  | 'slide-left' 
  | 'scale-up' 
  | 'zoom-in';

interface ScrollRevealProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

const animationVariants: Record<AnimationType, Variants> = {
  'fade-up': {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -32 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'slide-right': {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  'slide-left': {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  'scale-up': {
    hidden: { opacity: 0, scale: 0.92, y: 16 },
    visible: { opacity: 1, scale: 1, y: 0 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
};

export function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.55,
  once = true,
  className = '',
  ...props
}: ScrollRevealProps) {
  const selectedVariant = animationVariants[animation] || animationVariants['fade-up'];

  return (
    <motion.div
      variants={selectedVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
  once?: boolean;
}

export function StaggerContainer({
  children,
  staggerChildren = 0.1,
  delayChildren = 0,
  className = '',
  once = true,
  ...props
}: StaggerContainerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface StaggerItemProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  duration?: number;
}

export function StaggerItem({
  children,
  className = '',
  animation = 'fade-up',
  duration = 0.5,
  ...props
}: StaggerItemProps) {
  const selectedVariant = animationVariants[animation] || animationVariants['fade-up'];

  return (
    <motion.div
      variants={selectedVariant}
      transition={{
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
