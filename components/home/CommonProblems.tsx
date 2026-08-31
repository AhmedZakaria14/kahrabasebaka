'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { 
  ZapOff, 
  ShieldAlert, 
  Flame, 
  Droplets, 
  Gauge, 
  Waves, 
  ThermometerSun, 
  Wrench, 
  ArrowLeft,
  HelpCircle
} from 'lucide-react';
import { commonProblems } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

const iconLookup: Record<string, React.ReactNode> = {
  ZapOff: <ZapOff className="w-5 h-5 text-amber-500" />,
  ShieldAlert: <ShieldAlert className="w-5 h-5 text-rose-500" />,
  Flame: <Flame className="w-5 h-5 text-amber-600" />,
  Droplets: <Droplets className="w-5 h-5 text-sky-500" />,
  Gauge: <Gauge className="w-5 h-5 text-indigo-500" />,
  Waves: <Waves className="w-5 h-5 text-cyan-600" />,
  ThermometerSun: <ThermometerSun className="w-5 h-5 text-orange-500" />,
  Wrench: <Wrench className="w-5 h-5 text-blue-500" />
};

export function CommonProblems() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 text-right border-t border-slate-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-rose-600" />
            <span>حلول فورية للأعطال المنزلية المتكررة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            مشكلات نساعدك في حلها
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            هل تواجه إحدى هذه المشاكل في منزلك أو شقتك بالرياض؟ اختر المشكلة للتعرف على الحل والخدمة المناسبة أو طلب فني متخصص فوراً.
          </p>
        </ScrollReveal>

        {/* Problems Grid */}
        <StaggerContainer staggerChildren={0.06} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {commonProblems.map((problem) => (
            <StaggerItem key={problem.id} animation="scale-up" className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-white rounded-2xl p-5 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconLookup[problem.icon] || <Wrench className="w-5 h-5 text-blue-500" />}
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      problem.category === 'كهرباء' 
                        ? 'bg-amber-100 text-amber-800' 
                        : 'bg-sky-100 text-sky-800'
                    }`}>
                      {problem.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm sm:text-base group-hover:text-blue-600 transition-colors mb-2">
                    {problem.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed mb-4">
                    {problem.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/${problem.relatedSlug}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 group/link"
                  >
                    <span>الخدمة المناسبة</span>
                    <ArrowLeft className="w-3 h-3 group-hover/link:-translate-x-1 transition-transform" />
                  </Link>

                  <button
                    onClick={() => openContactModal(`عطل: ${problem.title}`)}
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-900 px-2 py-1 bg-slate-100 rounded-lg hover:bg-slate-200 transition"
                  >
                    طلب حل فوري
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
