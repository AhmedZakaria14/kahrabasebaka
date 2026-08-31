'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { getBlurPlaceholder } from '@/lib/image-utils';

interface BlurredImageProps extends Omit<ImageProps, 'placeholder'> {
  theme?: 'dark' | 'light';
  containerClassName?: string;
}

export function BlurredImage({
  src,
  alt,
  className = '',
  theme = 'light',
  blurDataURL,
  containerClassName = '',
  onLoad,
  ...props
}: BlurredImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  const defaultPlaceholder = getBlurPlaceholder(theme);

  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL || defaultPlaceholder}
      className={`transition-all duration-700 ease-out ${
        isLoading ? 'scale-105 blur-md grayscale-[20%]' : 'scale-100 blur-0 grayscale-0'
      } ${className}`}
      onLoad={(e) => {
        setIsLoading(false);
        if (onLoad) {
          onLoad(e);
        }
      }}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
