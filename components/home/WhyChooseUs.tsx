'use client';

import React from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Award, 
  Wrench, 
  ShieldCheck, 
  Layers, 
  BadgePercent, 
  CheckCircle2 
} from 'lucide-react';
import { whyChooseUsFeatures } from '@/lib/config/site';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6" />,
  Award: <Award className="w-6 h-6" />,
  Wrench: <Wrench className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  BadgePercent: <BadgePercent className="w-6 h-6" />,
};

export function WhyChooseUs() {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white text-right relative overflow-hidden">
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>معايير احترافية وموثوقية عالية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            لماذا يختارنا عملاؤنا في الرياض؟
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            نجمع بين الخبرة العملية العميقة وأحدث التقنيات لنقدم لك تجربة صيانة سلسة تضمن أمان منزلك وراحة بالك بدون قلق أو تأخير.
          </p>
        </ScrollReveal>

        {/* 6 Feature Cards */}
        <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUsFeatures.map((item, index) => (
            <StaggerItem key={index} animation="scale-up" className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full p-6 sm:p-7 rounded-3xl bg-slate-800/80 border border-slate-700/80 hover:border-blue-500/60 hover:bg-slate-800/95 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-blue-600/10 border border-blue-500/30 text-blue-400 group-hover:text-amber-400 group-hover:border-amber-400/40 group-hover:bg-amber-400/10 group-hover:scale-110 transition-all flex items-center justify-center mb-5 shrink-0">
                    {iconMap[item.icon] || <CheckCircle2 className="w-6 h-6" />}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
}
