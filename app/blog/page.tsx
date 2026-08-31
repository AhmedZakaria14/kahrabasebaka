import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowLeft 
} from 'lucide-react';
import { blogPosts, siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'المدونة والنصائح الفنية | إرشادات صيانة الكهرباء والسباكة بالرياض',
  description: 'مقالات وأدلة إرشادية حول صيانة كهرباء وسباكة المنازل في الرياض، كشف التسربات، حماية الطبلون، وتركيب السخانات والإنارة الحديثة.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('blog')
  }
};

export default function BlogIndexPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'المدونة والنصائح الفنية', url: '/blog' }
            ]}
          />

          <div className="max-w-3xl space-y-4 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-300 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5 text-amber-400" />
              <span>دليلك الفني الشامل للمنزل</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              المدونة والنصائح الفنية لصيانة المنازل
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              إرشادات ونصائح عملية من فنيي الكهرباء والسباكة بالرياض لمساعدتك في الحفاظ على سلامة منزلك وتفادي الأعطال المكلفة.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-blue-500 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <BlurredImage
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                  
                  <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full shadow ${
                    post.category === 'electrical'
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-sky-600 text-white'
                  }`}>
                    {post.categoryLabel}
                  </span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.publishDate}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-0 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/blog/${post.slug}`}
                  className="font-bold text-xs sm:text-sm text-blue-700 hover:text-blue-900 flex items-center gap-1.5 group/link"
                >
                  <span>قراءة المقال كاملاً</span>
                  <ArrowLeft className="w-4 h-4 group-hover/link:-translate-x-1 transition-transform" />
                </Link>

                <span className="text-[11px] text-slate-400">
                  فريق الصيانة الفنية بالرياض
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}
