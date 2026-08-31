import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';

export default function ServiceDetailLoading() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-24">
      {/* Hero Section Skeleton */}
      <section className="relative bg-slate-950 text-white py-12 lg:py-16 border-b border-slate-800 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Breadcrumb Skeleton */}
          <div className="flex items-center gap-2 mb-6">
            <Skeleton variant="rounded" theme="dark" className="w-16 h-4 !rounded" />
            <span className="text-slate-700">/</span>
            <Skeleton variant="rounded" theme="dark" className="w-20 h-4 !rounded" />
            <span className="text-slate-700">/</span>
            <Skeleton variant="rounded" theme="dark" className="w-32 h-4 !rounded" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Main Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <Skeleton variant="rounded" theme="dark" className="w-28 h-6 !rounded-full" />
                <Skeleton variant="rounded" theme="dark" className="w-20 h-6 !rounded-full" />
              </div>

              <div className="space-y-3">
                <Skeleton variant="text" theme="dark" className="w-4/5 h-10 !rounded-lg" />
                <Skeleton variant="text" theme="dark" className="w-2/3 h-10 !rounded-lg" />
              </div>

              <div className="space-y-2 pt-2">
                <Skeleton variant="text" theme="dark" className="w-full h-4 !rounded" />
                <Skeleton variant="text" theme="dark" className="w-5/6 h-4 !rounded" />
                <Skeleton variant="text" theme="dark" className="w-3/4 h-4 !rounded" />
              </div>

              {/* Action Buttons Skeleton */}
              <div className="flex items-center gap-4 pt-4 flex-wrap">
                <Skeleton variant="rounded" theme="dark" className="w-48 h-12 !rounded-2xl" />
                <Skeleton variant="rounded" theme="dark" className="w-44 h-12 !rounded-2xl" />
              </div>
            </div>

            {/* Visual Image Skeleton */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 p-2">
                <Skeleton variant="rectangular" theme="dark" className="w-full h-full !rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-4">
              <Skeleton variant="text" className="w-48 h-7 !rounded-lg" />
              <div className="space-y-2 pt-2">
                <Skeleton variant="text" className="w-full h-4 !rounded" />
                <Skeleton variant="text" className="w-11/12 h-4 !rounded" />
                <Skeleton variant="text" className="w-4/5 h-4 !rounded" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Skeleton variant="rounded" className="h-24 !rounded-2xl" />
                <Skeleton variant="rounded" className="h-24 !rounded-2xl" />
                <Skeleton variant="rounded" className="h-24 !rounded-2xl" />
                <Skeleton variant="rounded" className="h-24 !rounded-2xl" />
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800 space-y-4">
              <Skeleton variant="rounded" theme="dark" className="w-32 h-6 !rounded-full" />
              <Skeleton variant="text" theme="dark" className="w-3/4 h-6 !rounded-lg" />
              <Skeleton variant="rounded" theme="dark" className="w-full h-12 !rounded-xl" />
              <Skeleton variant="rounded" theme="dark" className="w-full h-12 !rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
