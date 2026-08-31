import React from 'react';
import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { ElectricianSection } from '@/components/home/ElectricianSection';
import { PlumbingSection } from '@/components/home/PlumbingSection';
import { DistrictsSection } from '@/components/home/DistrictsSection';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { CommonProblems } from '@/components/home/CommonProblems';
import { HowItWorks } from '@/components/home/HowItWorks';
import { QuickCostEstimator } from '@/components/home/QuickCostEstimator';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FaqSection } from '@/components/home/FaqSection';
import { PreFooterCta } from '@/components/home/PreFooterCta';
import { siteConfig } from '@/lib/config/site';

export const metadata: Metadata = {
  title: 'كهربائي وسباك بالرياض | خدمات كهرباء وسباكة',
  description: siteConfig.defaultMetaDescription,
  alternates: {
    canonical: siteConfig.SITE_URL
  },
  openGraph: {
    title: 'كهربائي وسباك بالرياض | خدمات كهرباء وسباكة',
    description: siteConfig.defaultMetaDescription,
    url: siteConfig.SITE_URL,
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyChooseUs />
      <ElectricianSection />
      <PlumbingSection />
      <QuickCostEstimator />
      <DistrictsSection />
      <CommonProblems />
      <HowItWorks />
      <TestimonialsSection />
      <FaqSection />
      <PreFooterCta />
    </>
  );
}
