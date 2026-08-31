import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';

interface ServiceCardSkeletonProps {
  theme?: 'light' | 'dark';
}

export function ServiceCardSkeleton({ theme = 'light' }: ServiceCardSkeletonProps) {
  const isDark = theme === 'dark';

  return (
    <div
      className={`rounded-3xl overflow-hidden border flex flex-col justify-between ${
        isDark
          ? 'bg-slate-900 border-slate-800'
          : 'bg-slate-50 border-slate-200/80 shadow-sm'
      }`}
      aria-label="جاري تحميل الخدمة..."
    >
      <div>
        {/* Top Image & Badge Skeleton */}
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200/80">
          <Skeleton
            variant="rectangular"
            theme={isDark ? 'dark' : 'light'}
            className="w-full h-full"
          />
          {/* Badge skeleton top right */}
          <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
            <Skeleton
              variant="rounded"
              theme={isDark ? 'dark' : 'light'}
              className="w-20 h-6 !rounded-full opacity-90"
            />
            <Skeleton
              variant="rounded"
              theme={isDark ? 'dark' : 'light'}
              className="w-14 h-6 !rounded-full opacity-90"
            />
          </div>
        </div>

        {/* Content Skeleton */}
        <div className="p-6 space-y-4">
          {/* Title */}
          <Skeleton
            variant="text"
            theme={isDark ? 'dark' : 'light'}
            className="h-6 w-3/4 !rounded-lg"
          />

          {/* Description lines */}
          <div className="space-y-2 pt-1">
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-3.5 w-full !rounded"
            />
            <Skeleton
              variant="text"
              theme={isDark ? 'dark' : 'light'}
              className="h-3.5 w-5/6 !rounded"
            />
          </div>

          {/* Features Checklist Skeleton */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center gap-2.5">
              <Skeleton
                variant="circular"
                theme={isDark ? 'dark' : 'light'}
                className="w-4 h-4 shrink-0"
              />
              <Skeleton
                variant="text"
                theme={isDark ? 'dark' : 'light'}
                className="h-3.5 w-4/5 !rounded"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Skeleton
                variant="circular"
                theme={isDark ? 'dark' : 'light'}
                className="w-4 h-4 shrink-0"
              />
              <Skeleton
                variant="text"
                theme={isDark ? 'dark' : 'light'}
                className="h-3.5 w-3/5 !rounded"
              />
            </div>
            <div className="flex items-center gap-2.5">
              <Skeleton
                variant="circular"
                theme={isDark ? 'dark' : 'light'}
                className="w-4 h-4 shrink-0"
              />
              <Skeleton
                variant="text"
                theme={isDark ? 'dark' : 'light'}
                className="h-3.5 w-2/3 !rounded"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions Skeleton */}
      <div
        className={`p-6 pt-0 border-t mt-3 flex items-center justify-between gap-3 ${
          isDark ? 'border-slate-800' : 'border-slate-200/60'
        }`}
      >
        <Skeleton
          variant="rounded"
          theme={isDark ? 'dark' : 'light'}
          className="flex-1 h-10 !rounded-xl"
        />
        <Skeleton
          variant="rounded"
          theme={isDark ? 'dark' : 'light'}
          className="w-10 h-10 !rounded-xl shrink-0"
        />
      </div>
    </div>
  );
}

interface ServicesGridSkeletonProps {
  count?: number;
  showFilters?: boolean;
  showHeader?: boolean;
  theme?: 'light' | 'dark';
}

export function ServicesGridSkeleton({
  count = 6,
  showFilters = true,
  showHeader = false,
  theme = 'light',
}: ServicesGridSkeletonProps) {
  const isDark = theme === 'dark';

  return (
    <div className="w-full text-right" aria-busy="true" aria-live="polite">
      {showHeader && (
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <Skeleton
            variant="rounded"
            theme={isDark ? 'dark' : 'light'}
            className="w-48 h-6 mx-auto !rounded-full"
          />
          <Skeleton
            variant="text"
            theme={isDark ? 'dark' : 'light'}
            className="w-72 h-8 mx-auto !rounded-lg"
          />
          <Skeleton
            variant="text"
            theme={isDark ? 'dark' : 'light'}
            className="w-full max-w-xl h-4 mx-auto !rounded"
          />
        </div>
      )}

      {showFilters && (
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          <Skeleton
            variant="rounded"
            theme={isDark ? 'dark' : 'light'}
            className="w-32 h-10 !rounded-xl"
          />
          <Skeleton
            variant="rounded"
            theme={isDark ? 'dark' : 'light'}
            className="w-36 h-10 !rounded-xl"
          />
          <Skeleton
            variant="rounded"
            theme={isDark ? 'dark' : 'light'}
            className="w-36 h-10 !rounded-xl"
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: count }).map((_, index) => (
          <ServiceCardSkeleton key={index} theme={theme} />
        ))}
      </div>
    </div>
  );
}
