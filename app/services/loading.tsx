import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';
import { ServicesGridSkeleton } from '@/components/services/ServiceCardSkeleton';

export default function ServicesLoading() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      {/* Banner Skeleton */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton variant="rounded" theme="dark" className="w-16 h-4 !rounded" />
            <span className="text-slate-600">/</span>
            <Skeleton variant="rounded" theme="dark" className="w-24 h-4 !rounded" />
          </div>

          <div className="max-w-3xl space-y-4">
            <Skeleton variant="rounded" theme="dark" className="w-48 h-6 !rounded-full" />
            <Skeleton variant="text" theme="dark" className="w-3/4 h-10 !rounded-lg" />
            <Skeleton variant="text" theme="dark" className="w-full h-4 !rounded" />
            <Skeleton variant="text" theme="dark" className="w-2/3 h-4 !rounded" />
          </div>
        </div>
      </section>

      {/* Services Grid Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        <div>
          {/* Section 1 Header */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Skeleton variant="rounded" className="w-10 h-10 !rounded-xl" />
              <div className="space-y-1">
                <Skeleton variant="text" className="w-48 h-6 !rounded" />
                <Skeleton variant="text" className="w-64 h-3.5 !rounded" />
              </div>
            </div>
            <Skeleton variant="rounded" className="w-20 h-6 !rounded-full" />
          </div>
          <ServicesGridSkeleton count={3} showFilters={false} />
        </div>

        <div>
          {/* Section 2 Header */}
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Skeleton variant="rounded" className="w-10 h-10 !rounded-xl" />
              <div className="space-y-1">
                <Skeleton variant="text" className="w-48 h-6 !rounded" />
                <Skeleton variant="text" className="w-64 h-3.5 !rounded" />
              </div>
            </div>
            <Skeleton variant="rounded" className="w-20 h-6 !rounded-full" />
          </div>
          <ServicesGridSkeleton count={3} showFilters={false} />
        </div>
      </div>
    </div>
  );
}
