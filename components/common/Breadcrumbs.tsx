'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronLeft, Home } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo';
import { siteConfig } from '@/lib/config/site';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const fullItems: BreadcrumbItem[] = [
    { name: 'الرئيسية', url: siteConfig.SITE_URL },
    ...items.map(item => ({
      name: item.name,
      url: item.url.startsWith('http') ? item.url : siteConfig.getCanonicalUrl(item.url)
    }))
  ];

  const schema = getBreadcrumbSchema(fullItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav aria-label="مسار التنقل (Breadcrumbs)" className="py-3 px-4 bg-slate-100/80 rounded-xl text-xs text-slate-600 mb-6 border border-slate-200/60">
        <ol className="flex items-center flex-wrap gap-2">
          <li className="flex items-center gap-1">
            <Home className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/" className="hover:text-blue-600 transition font-medium">
              الرئيسية
            </Link>
          </li>

          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.url} className="flex items-center gap-2">
                <ChevronLeft className="w-3.5 h-3.5 text-slate-400" />
                {isLast ? (
                  <span className="font-bold text-slate-900" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.url} className="hover:text-blue-600 transition font-medium">
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
