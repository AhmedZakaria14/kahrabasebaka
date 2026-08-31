'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  Zap, 
  Droplet, 
  Phone, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2,
} from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';

export function HeroSection() {
  const handleWhatsApp = (e: React.MouseEvent) => {
    if (!siteConfig.isWhatsAppConfigured()) {
      e.preventDefault();
      openContactModal('طلب عبر واتساب من الصفحة الرئيسية');
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900 text-white py-14 lg:py-20">
      {/* Decorative background grid and glowing circles */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none"></div>
      
      {/* Static glow on mobile, smooth animated glow on desktop */}
      <div className="md:hidden absolute top-1/4 right-0 w-64 h-64 bg-blue-600/15 rounded-full blur-2xl pointer-events-none" />
      <div className="md:hidden absolute bottom-10 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:block absolute top-1/4 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.18, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="hidden md:block absolute bottom-10 left-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (7 cols) */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.12,
                  delayChildren: 0.1,
                },
              },
            }}
            className="lg:col-span-7 space-y-6 text-right"
          >
            {/* Top Badge */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-700/50 text-blue-300 text-xs font-semibold backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              <span>خدمة كهرباء وسباكة فورية داخل مدينة الرياض</span>
            </motion.div>

            {/* H1 Main Heading */}
            <motion.h1 
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.25] tracking-tight"
            >
              كهربائي وسباك بالرياض <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-amber-300">
                لخدمات الصيانة والتركيب والتأسيس
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              خدمات كهرباء وسباكة للمنازل والفلل والشقق والمحلات في مختلف أحياء الرياض، مع سرعة في الاستجابة وجودة في التنفيذ على أيدي فنيين متخصصين ومجهزين بأحدث أدوات الفحص والصيانة.
            </motion.p>

            {/* Value Highlights */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl hover:border-emerald-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>كشف أعطال دقيق</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl hover:border-amber-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ضمان على الإصلاح</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 bg-slate-800/60 border border-slate-700/50 p-2.5 rounded-xl col-span-2 sm:col-span-1 hover:border-sky-500/40 transition-colors">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>تغطية كافة الأحياء</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-4"
            >
              <motion.button
                id="hero-primary-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openContactModal()}
                className="py-4 px-7 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-base rounded-2xl shadow-xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5 text-amber-300" />
                <span>اطلب فني الآن (معاينة فورية)</span>
              </motion.button>

              <motion.a
                id="hero-whatsapp-cta"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={siteConfig.getWhatsAppHref()}
                onClick={handleWhatsApp}
                target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="py-4 px-6 bg-slate-800/90 hover:bg-slate-800 text-slate-100 hover:text-white font-bold text-base rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5 text-emerald-400" />
                <span>تواصل عبر واتساب</span>
              </motion.a>
            </motion.div>

            {/* Popular quick links */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              className="pt-3 flex items-center flex-wrap gap-2 text-xs text-slate-400"
            >
              <span className="font-medium text-slate-300">أكثر الطلبات طلباً:</span>
              <button onClick={() => openContactModal('كشف التماس كهربائي')} className="px-2.5 py-1 bg-slate-800 rounded-lg hover:text-amber-300 hover:bg-slate-750 transition">
                التماس كهربائي
              </button>
              <button onClick={() => openContactModal('إصلاح تسرب مياه')} className="px-2.5 py-1 bg-slate-800 rounded-lg hover:text-sky-300 hover:bg-slate-750 transition">
                تسرب مياه
              </button>
              <button onClick={() => openContactModal('تسليك مجاري بالرياض')} className="px-2.5 py-1 bg-slate-800 rounded-lg hover:text-sky-300 hover:bg-slate-750 transition">
                تسليك مجاري
              </button>
              <button onClick={() => openContactModal('صيانة لوحة وقواطع الكهرباء')} className="px-2.5 py-1 bg-slate-800 rounded-lg hover:text-amber-300 hover:bg-slate-750 transition">
                صيانة طبلون
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Visual Showcase (5 cols) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700/60 bg-slate-800">
                <div className="aspect-[4/3] sm:aspect-[16/11] relative">
                  <BlurredImage
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop"
                    alt="فني كهرباء وسباكة محترف في الرياض يقوم بأعمال الصيانة المنزلية"
                    fill
                    priority
                    theme="dark"
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                </div>

                {/* Floating Inset Badge: 24/7 Coverage */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/80 shadow-lg text-right">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-400/30 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block text-sm font-bold text-white">
                          خدمة موثوقة في الرياض
                        </span>
                        <span className="block text-xs text-slate-300">
                          صيانة المنازل، الفلل، والمحلات التجارية
                        </span>
                      </div>
                    </div>
                    <div className="text-left shrink-0">
                      <span className="inline-block px-2 py-1 bg-emerald-500/20 text-emerald-300 text-xs font-bold rounded-lg border border-emerald-500/30">
                        متاح الآن
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Mini Badge 1 (Oscillating) */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -top-4 -right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-xl items-center gap-2.5 text-xs text-white z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-inner">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">كهرباء المنازل</span>
                  <span className="text-[11px] text-slate-400">كشف وتصليح فوري</span>
                </div>
              </motion.div>

              {/* Floating Mini Badge 2 (Oscillating with delay) */}
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-4 -left-4 bg-slate-900/95 backdrop-blur-md border border-slate-700 p-3 rounded-2xl shadow-xl items-center gap-2.5 text-xs text-white z-20"
              >
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shadow-inner">
                  <Droplet className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold block">سباكة متطورة</span>
                  <span className="text-[11px] text-slate-400">كشف تسربات ومجاري</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
