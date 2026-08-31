import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';

export default function BlogPostLoading() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-24">
      {/* Top Banner Skeleton */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex items-center gap-2 mb-4">
            <Skeleton variant="rounded" theme="dark" className="w-16 h-4 !rounded" />
            <span className="text-slate-700">/</span>
            <Skeleton variant="rounded" theme="dark" className="w-20 h-4 !rounded" />
          </div>

          <Skeleton variant="rounded" theme="dark" className="w-28 h-6 !rounded-full" />
          <Skeleton variant="text" theme="dark" className="w-4/5 h-10 !rounded-lg" />
          <Skeleton variant="text" theme="dark" className="w-3/5 h-10 !rounded-lg" />
          
          <div className="flex items-center gap-4 pt-2">
            <Skeleton variant="text" theme="dark" className="w-24 h-4 !rounded" />
            <Skeleton variant="text" theme="dark" className="w-20 h-4 !rounded" />
          </div>
        </div>
      </section>

      {/* Main Blog Post Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        {/* Featured Image Skeleton */}
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-md">
          <Skeleton variant="rectangular" className="w-full h-full" />
        </div>

        {/* Body Paragraphs Skeleton */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 space-y-6">
          <div className="space-y-3">
            <Skeleton variant="text" className="w-full h-4 !rounded" />
            <Skeleton variant="text" className="w-full h-4 !rounded" />
            <Skeleton variant="text" className="w-11/12 h-4 !rounded" />
            <Skeleton variant="text" className="w-4/5 h-4 !rounded" />
          </div>

          <Skeleton variant="text" className="w-1/2 h-7 !rounded-lg pt-4" />

          <div className="space-y-3">
            <Skeleton variant="text" className="w-full h-4 !rounded" />
            <Skeleton variant="text" className="w-full h-4 !rounded" />
            <Skeleton variant="text" className="w-5/6 h-4 !rounded" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <Skeleton variant="rounded" className="h-28 !rounded-2xl" />
            <Skeleton variant="rounded" className="h-28 !rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
