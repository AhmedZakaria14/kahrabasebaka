import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { servicesData, siteConfig } from '@/lib/config/site';
import { ServiceDetailView } from '@/components/services/ServiceDetailView';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'الخدمة غير موجودة',
      description: 'الصفحة المطلوبة غير متوفرة.'
    };
  }

  const canonicalUrl = siteConfig.getCanonicalUrl(service.slug);

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonicalUrl,
      type: 'website',
      images: [
        {
          url: service.heroImage,
          width: 1200,
          height: 630,
          alt: `${service.title} بالرياض`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.heroImage]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailView service={service} />;
}
