'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  Zap, 
  Droplet, 
  ArrowLeft, 
  Check, 
  PhoneCall,
} from 'lucide-react';
import { servicesData } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';
import { ServiceCardSkeleton } from '@/components/services/ServiceCardSkeleton';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

interface ServicesGridProps {
  isLoading?: boolean;
}

export function ServicesGrid({ isLoading = false }: ServicesGridProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'electrical' | 'plumbing'>('all');

  const filteredServices = servicesData.filter(service => {
    if (activeTab === 'all') return true;
    return service.category === activeTab;
  });

  return (
    <section id="services-section" className="py-16 sm:py-24 bg-white text-right overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-3">
            <span>خدمات متكاملة للمنازل والفلل والمحلات</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            خدماتنا في الرياض
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            نقدم باقة شاملة من خدمات صيانة وتأسيس شبكات الكهرباء والسباكة في جميع أحياء الرياض، بأعلى معايير الأمان والجودة وسرعة الإنجاز.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
            <button
              id="filter-all-services-btn"
              onClick={() => setActiveTab('all')}
              className={`relative px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white shadow-slate-900/20'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              جميع الخدمات ({servicesData.length})
            </button>

            <button
              id="filter-electrical-services-btn"
              onClick={() => setActiveTab('electrical')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                activeTab === 'electrical'
                  ? 'bg-blue-700 text-white shadow-blue-700/20'
                  : 'bg-blue-50 text-blue-800 hover:bg-blue-100'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span>خدمات الكهرباء ({servicesData.filter(s => s.category === 'electrical').length})</span>
            </button>

            <button
              id="filter-plumbing-services-btn"
              onClick={() => setActiveTab('plumbing')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm ${
                activeTab === 'plumbing'
                  ? 'bg-sky-700 text-white shadow-sky-700/20'
                  : 'bg-sky-50 text-sky-800 hover:bg-sky-100'
              }`}
            >
              <Droplet className="w-4 h-4 text-sky-400 fill-sky-400" />
              <span>خدمات السباكة ({servicesData.filter(s => s.category === 'plumbing').length})</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <ServiceCardSkeleton key={index} theme="light" />
            ))}
          </div>
        ) : (
          <StaggerContainer 
            key={activeTab}
            staggerChildren={0.08}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service) => {
                const isElectrical = service.category === 'electrical';
                return (
                  <StaggerItem
                    key={service.id}
                    animation="scale-up"
                    className="h-full"
                  >
                    <motion.div
                      id={`service-card-${service.slug}`}
                      whileHover={{ y: -6, transition: { duration: 0.2 } }}
                      className="h-full group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-blue-400/80 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Service Image with Category Badge */}
                        <div className="relative aspect-[16/10] overflow-hidden bg-slate-200">
                          <BlurredImage
                            src={service.heroImage}
                            alt={`${service.title} - خدمات صيانة منزلية بالرياض`}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>

                          {/* Category & Custom Badge */}
                          <div className="absolute top-3.5 right-3.5 flex items-center gap-2">
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shadow-md ${
                              isElectrical
                                ? 'bg-slate-900/90 text-amber-300 border border-amber-400/30'
                                : 'bg-slate-900/90 text-sky-300 border border-sky-400/30'
                            }`}>
                              {isElectrical ? <Zap className="w-3.5 h-3.5" /> : <Droplet className="w-3.5 h-3.5" />}
                              <span>{isElectrical ? 'كهرباء' : 'سباكة'}</span>
                            </span>

                            {service.badge && (
                              <span className="bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow">
                                {service.badge}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors mb-2.5">
                            {service.title}
                          </h3>
                          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                            {service.shortDescription}
                          </p>

                          {/* Features list */}
                          <ul className="space-y-2 mb-6 text-xs text-slate-700">
                            {service.features.slice(0, 3).map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${isElectrical ? 'text-amber-500' : 'text-sky-600'}`} />
                                <span className="line-clamp-1">{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="p-6 pt-0 border-t border-slate-200/50 mt-2 flex items-center justify-between gap-3">
                        <Link
                          href={`/${service.slug}`}
                          className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-slate-300 hover:border-blue-600 text-slate-800 hover:text-blue-700 font-bold text-xs sm:text-sm text-center transition flex items-center justify-center gap-2 group/btn"
                        >
                          <span>تفاصيل الخدمة</span>
                          <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                        </Link>

                        <button
                          onClick={() => openContactModal(service.title)}
                          className="p-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white transition shadow-sm hover:scale-105 active:scale-95"
                          title={`طلب فني لـ ${service.shortTitle}`}
                          aria-label={`طلب فني لـ ${service.shortTitle}`}
                        >
                          <PhoneCall className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </AnimatePresence>
          </StaggerContainer>
        )}

      </div>
    </section>
  );
}
