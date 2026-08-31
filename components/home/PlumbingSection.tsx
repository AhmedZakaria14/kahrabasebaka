'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  Droplet, 
  Phone, 
  ArrowLeft, 
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

export function PlumbingSection() {
  const plumbingPoints = [
    {
      title: "كشف وإصلاح تسربات المياه إلكترونياً",
      desc: "تحديد مواقع الكسور في مواسير التغذية والصرف بدون تكسير عشوائي بالأجهزة الصوتية."
    },
    {
      title: "تسليك المجاري وشبكات الصرف بالضغط",
      desc: "مكائن زنبركية وضغط مائي لإزالة الدهون والتكلسات العالقة في المطابخ والحمامات."
    },
    {
      title: "تركيب وصيانة السخانات والمضخات",
      desc: "تغيير شمعات الهيتر، فحص صمامات الأمان، وتركيب مضخات رفع وضغط المياه (الدينمو)."
    },
    {
      title: "تركيب الأدوات الصحية والخلاطات الفاخرة",
      desc: "تثبيت المراحيض والمغاسل والشاور بوكس والخلاطات المعلقة بعزل سيليكون محكم."
    }
  ];

  return (
    <section id="plumber-riyadh-section" className="py-16 sm:py-24 bg-slate-50 text-slate-900 text-right relative overflow-hidden border-t border-slate-200/60">
      {/* Soft background accents */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Showcase (5 cols) - Inverted layout for visual rhythm */}
          <ScrollReveal animation="slide-right" className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-white group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <BlurredImage
                  src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=1000&auto=format&fit=crop"
                  alt="فني سباكة بالرياض يقوم بصيانة مواسير المياه والأدوات الصحية"
                  fill
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>

              {/* Inset Badge */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg text-right">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">حلول سباكة مضمونة</h4>
                    <p className="text-xs text-slate-600">حماية المبنى من أضرار الرطوبة وهدر المياه</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text & Features Column (7 cols) */}
          <ScrollReveal animation="slide-left" className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold">
              <Droplet className="w-4 h-4 fill-sky-600 text-sky-600" />
              <span>فني سباكة متخصص بالرياض</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              خدمات سباك بالرياض <br />
              <span className="text-sky-700">لحل مشاكل التسربات والانسدادات وتمديد الشبكات</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              مشكلات السباكة المنزلية كالتسربات والانسداد قد تتسبب في إتلاف الديكورات وارتفاع غير مسبوق في فواتير المياه. نوفر في الرياض خدمات سباكة متقدمة تشمل الفحص الإلكتروني، معالجة انسداد البالوعات، وصيانة المضخات والخزانات والسخانات على مدار الساعة.
            </p>

            {/* Feature Cards */}
            <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {plumbingPoints.map((point, index) => (
                <StaggerItem key={index} animation="fade-up">
                  <div className="h-full p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-400 hover:shadow-md transition-all">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                      <h3 className="text-sm font-bold text-slate-900">{point.title}</h3>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pr-6">
                      {point.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <motion.button
                id="plumbing-section-book-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openContactModal('طلب سباك بالرياض')}
                className="py-3.5 px-6 bg-sky-600 hover:bg-sky-700 text-white font-black text-sm rounded-xl shadow-lg shadow-sky-600/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب سباك بالرياض الآن</span>
              </motion.button>

              <Link
                href="/plumber-riyadh"
                className="py-3.5 px-5 bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm rounded-xl border border-slate-300 transition flex items-center gap-2"
              >
                <span>دليل خدمات السباكة</span>
                <ArrowLeft className="w-4 h-4 text-sky-600" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
