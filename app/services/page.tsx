import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  Zap, 
  Droplet, 
  Check, 
  ArrowLeft, 
  Wrench, 
  Phone, 
  ShieldCheck, 
  Clock, 
  MapPin 
} from 'lucide-react';
import { servicesData, siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'دليل خدمات الكهرباء والسباكة بالرياض | كافة الخدمات المتاحة',
  description: 'دليل شامل لكافة خدمات صيانة وتأسيس شبكات الكهرباء والسباكة في مدينة الرياض، مع تفاصيل كل خدمة وأسعار وفحص فوري.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('services')
  }
};

export default function ServicesIndexPage() {
  const electricalServices = servicesData.filter(s => s.category === 'electrical');
  const plumbingServices = servicesData.filter(s => s.category === 'plumbing');

  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      
      {/* Top Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'دليل الخدمات', url: '/services' }
            ]}
          />

          <div className="max-w-3xl space-y-4 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-300 text-xs font-bold">
              <Wrench className="w-3.5 h-3.5 text-amber-400" />
              <span>دليل الخدمات الفنية المتكاملة بالرياض</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              كافة خدمات الكهرباء والسباكة في الرياض
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              تصفح قائمة الخدمات المتخصصة للمنازل والشقق والفلل والمحلات التجارية، واختر الخدمة المناسبة للتعرف على الخطوات وحجز الفني المختص.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        
        {/* Section 1: Electrical Services */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 border border-amber-400/30 flex items-center justify-center">
                <Zap className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  خدمات صيانة وتأسيس الكهرباء
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  كشف التماس، صيانة طبالين، تمديد خطوط، وتركيب إنارة متطورة
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              {electricalServices.length} خدمات
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electricalServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-amber-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <BlurredImage
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-amber-500 hover:text-slate-950 text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                  >
                    <span>تفاصيل الخدمة وحجز الفني</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Plumbing Services */}
        <div>
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 border border-sky-400/30 flex items-center justify-center">
                <Droplet className="w-5 h-5 fill-sky-600 text-sky-600" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                  خدمات صيانة وشبكات السباكة
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  كشف تسربات، تسليك مجاري، صيانة سخانات ومضخات، وتركيب أدوات صحية
                </p>
              </div>
            </div>
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
              {plumbingServices.length} خدمات
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plumbingServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-sky-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <BlurredImage
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                    {service.badge && (
                      <span className="absolute top-3 right-3 bg-sky-600 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2">
                      {service.shortDescription}
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span className="line-clamp-1">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    href={`/${service.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-sky-600 hover:text-white text-slate-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                  >
                    <span>تفاصيل الخدمة وحجز الفني</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
