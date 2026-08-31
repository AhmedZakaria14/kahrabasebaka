import React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: 'text' | 'circular' | 'rounded' | 'rectangular';
  theme?: 'light' | 'dark';
  animate?: 'pulse' | 'shimmer' | 'none';
}

export function Skeleton({
  className = '',
  variant = 'rounded',
  theme = 'light',
  animate = 'shimmer',
  ...props
}: SkeletonProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'circular':
        return 'rounded-full';
      case 'text':
        return 'rounded-md h-4 my-1';
      case 'rectangular':
        return 'rounded-none';
      case 'rounded':
      default:
        return 'rounded-2xl';
    }
  };

  const getThemeStyles = () => {
    if (theme === 'dark') {
      return 'bg-slate-800/80 border-slate-700/50';
    }
    return 'bg-slate-200/70 border-slate-200/40';
  };

  return (
    <div
      aria-hidden="true"
      className={`relative overflow-hidden ${getThemeStyles()} ${getVariantStyles()} ${className}`}
      {...props}
    >
      {animate === 'shimmer' && (
        <div
          className={`absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r ${
            theme === 'dark'
              ? 'from-transparent via-slate-700/40 to-transparent'
              : 'from-transparent via-white/60 to-transparent'
          }`}
        />
      )}
      {animate === 'pulse' && (
        <div className="w-full h-full animate-pulse" />
      )}
    </div>
  );
}
