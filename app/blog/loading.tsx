import React from 'react';
import { Skeleton } from '@/components/common/Skeleton';
import { BlogGridSkeleton } from '@/components/blog/BlogPostSkeleton';

export default function BlogLoading() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      {/* Banner Skeleton */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-6">
            <Skeleton variant="rounded" theme="dark" className="w-16 h-4 !rounded" />
            <span className="text-slate-600">/</span>
            <Skeleton variant="rounded" theme="dark" className="w-32 h-4 !rounded" />
          </div>

          <div className="max-w-3xl space-y-4">
            <Skeleton variant="rounded" theme="dark" className="w-44 h-6 !rounded-full" />
            <Skeleton variant="text" theme="dark" className="w-3/4 h-10 !rounded-lg" />
            <Skeleton variant="text" theme="dark" className="w-full h-4 !rounded" />
            <Skeleton variant="text" theme="dark" className="w-2/3 h-4 !rounded" />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <BlogGridSkeleton count={4} />
      </div>
    </div>
  );
}
