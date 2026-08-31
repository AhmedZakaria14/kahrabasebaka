import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { BlurredImage } from '@/components/common/BlurredImage';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowLeft 
} from 'lucide-react';
import { blogPosts, siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { getArticleSchema } from '@/lib/seo';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'المقال غير موجود',
      description: 'الصفحة المطلوبة غير متوفرة.'
    };
  }

  const canonicalUrl = siteConfig.getCanonicalUrl(`blog/${post.slug}`);

  return {
    title: `${post.metaTitle || post.title}`,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: canonicalUrl,
      type: 'article',
      publishedTime: post.publishDate,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    }
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema(post);
  const otherPosts = blogPosts.filter(p => p.slug !== post.slug);

  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumbs */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs
          items={[
            { name: 'المدونة والنصائح', url: '/blog' },
            { name: post.title, url: `/blog/${post.slug}` }
          ]}
        />
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 mt-4">
        
        {/* Header Block */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8 space-y-5">
          <div className="flex items-center gap-3">
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${
              post.category === 'electrical' ? 'bg-amber-100 text-amber-900' : 'bg-sky-100 text-sky-900'
            }`}>
              {post.categoryLabel}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {post.publishDate}
            </span>
            <span className="text-xs text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-950 leading-tight tracking-tight">
            {post.title}
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed border-r-4 border-blue-600 pr-4">
            {post.excerpt}
          </p>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-md mt-6">
            <BlurredImage
              src={post.image}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        </header>

        {/* Content Body */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8 text-slate-800 text-sm sm:text-base leading-relaxed space-y-6">
          <div className="space-y-4">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-slate-700 text-sm sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Safety Warning if available */}
          {post.safetyWarning && (
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium">
              {post.safetyWarning}
            </div>
          )}

          {/* Professional Callout Box */}
          <div className="p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 mt-8">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>نصيحة أمان فنية هامة</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              إذا لاحظت أي تسريب مياه مخفي أو شورت كهربائي متكرر في منزلك بالرياض، تجنب التعامل اليدوي العشوائي واطلب فحصاً معتمداً من فني متخصص مجهز بأحدث أدوات القياس لتفادي الأخطار.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition"
              >
                <span>طلب معاينة فنية لمنزلك</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Other articles */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <h3 className="font-bold text-lg text-slate-900 mb-4">
            مقالات وأدلة أخرى قد تهمك:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherPosts.slice(0, 2).map((other) => (
              <Link
                key={other.slug}
                href={`/blog/${other.slug}`}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition group block"
              >
                <span className="text-[11px] font-bold text-slate-500 mb-1 block">
                  {other.categoryLabel}
                </span>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 transition leading-snug">
                  {other.title}
                </h4>
              </Link>
            ))}
          </div>
        </div>

      </article>
    </div>
  );
}
