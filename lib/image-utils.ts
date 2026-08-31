/**
 * Image blur placeholder utilities for Next.js Image
 */

const shimmer = (w: number, h: number, theme: 'dark' | 'light' = 'dark') => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="${theme === 'dark' ? '#0f172a' : '#e2e8f0'}" offset="20%" />
      <stop stop-color="${theme === 'dark' ? '#334155' : '#f8fafc'}" offset="50%" />
      <stop stop-color="${theme === 'dark' ? '#0f172a' : '#e2e8f0'}" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="${theme === 'dark' ? '#0f172a' : '#e2e8f0'}" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1.4s" repeatCount="indefinite" />
</svg>`;

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

export const getBlurPlaceholder = (theme: 'dark' | 'light' = 'dark', w = 700, h = 475) => {
  return `data:image/svg+xml;base64,${toBase64(shimmer(w, h, theme))}`;
};

export const defaultBlurDataURL = getBlurPlaceholder('dark');
export const lightBlurDataURL = getBlurPlaceholder('light');
