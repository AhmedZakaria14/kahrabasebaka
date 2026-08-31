import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';

interface BlogPostSkeletonProps {
  theme?: 'light' | 'dark';
}

export function BlogPostSkeleton({ theme = 'light' }: BlogPostSkeletonProps) {
  const isDark = theme === 'dark';

  return (
    <article
      className={`rounded-3xl overflow-hidden border flex flex-col justify-between ${
        isDark
          ? 'bg-slate-900 border-slate-800'
          : 'bg-white border-slate-200 shadow-sm'
      }`}
      aria-label="جاري تحميل المقال..."
    >
      <div>
        {/* Post Image Skeleton */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
          <Skeleton
            variant="rectangular"
            theme={isDark ? 'dark' : 'light'}
            className="w-full h-full"
          />
          {/* Badge Skeleton */}
          <div className="absolute top-4 right-4">
            <Skeleton
              variant="rounded"
              theme={isDark ? 'dark' : 'light'}
              className="w-24 h-6 !rounded-full opacity-90"
            />
          </div>
        </div>

        {/* Post Body Skeleton */}
        <div className="p-6 sm:p-8 space-y-4">
          {/* Meta Info (Date & Reading Time) */}
          <div className="flex items-center gap-4">
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="w-20 h-3.5 !rounded"
            />
            <span className="text-slate-300">•</span>
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="w-16 h-3.5 !rounded"
            />
          </div>

          {/* Title Lines */}
          <div className="space-y-2">
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-6 w-full !rounded-lg"
            />
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-6 w-4/5 !rounded-lg"
            />
          </div>

          {/* Excerpt Lines */}
          <div className="space-y-2 pt-1">
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-3.5 w-full !rounded"
            />
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-3.5 w-11/12 !rounded"
            />
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-3.5 w-3/4 !rounded"
            />
          </div>
        </div>
      </div>

      {/* Footer Read More Skeleton */}
      <div
        className={`p-6 sm:p-8 pt-0 border-t mt-3 flex items-center justify-between ${
          isDark ? 'border-slate-800' : 'border-slate-100'
        }`}
      >
        <Skeleton
          variant="rounded"
          theme={isDark ? 'dark' : 'light'}
          className="w-28 h-5 !rounded-md"
        />
        <Skeleton
          variant="text"
          theme={isDark ? 'dark' : 'light'}
          className="w-32 h-3.5 !rounded"
        />
      </div>
    </article>
  );
}

interface BlogGridSkeletonProps {
  count?: number;
  showHeader?: boolean;
  theme?: 'light' | 'dark';
}

export function BlogGridSkeleton({
  count = 4,
  showHeader = false,
  theme = 'light',
}: BlogGridSkeletonProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full text-right" aria-busy="true" aria-live="polite">
      {showHeader && (
        <div className="max-w-3xl mb-12 space-y-4">
          <Skeleton
            variant="rounded"
            theme={isDark ? 'dark' : 'light'}
            className="w-40 h-6 !rounded-full"
          />
          <Skeleton
            variant="text"
            theme={isDark ? 'dark' : 'light'}
            className="w-80 h-10 !rounded-lg"
          />
          <Skeleton
            variant="text"
            theme={isDark ? 'dark' : 'light'}
            className="w-full max-w-xl h-4 !rounded"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <BlogPostSkeleton key={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}
