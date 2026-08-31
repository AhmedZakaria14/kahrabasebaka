'use client';

import React from 'react';
import { motion } from 'motion/react';
import { PhoneCall, FileText, CheckCircle2, UserCheck, ArrowLeft } from 'lucide-react';
import { bookingSteps } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

const stepIcons = [
  <PhoneCall key="1" className="w-6 h-6" />,
  <FileText key="2" className="w-6 h-6" />,
  <CheckCircle2 key="3" className="w-6 h-6" />,
  <UserCheck key="4" className="w-6 h-6" />
];

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-white text-right border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold text-blue-700 bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full uppercase tracking-wider">
            خطوات بسيطة وسريعة
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
            كيف تطلب فني كهرباء أو سباكة؟
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            خطوات ميسرة لتشخيص العطل وإرسال الفني الأنسب لمنزلك في الرياض بأسرع وقت وبدون تعقيدات.
          </p>
        </ScrollReveal>

        {/* 4 Steps Grid */}
        <StaggerContainer staggerChildren={0.12} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {bookingSteps.map((step, index) => (
            <StaggerItem key={step.step} animation="scale-up" className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full relative bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-700 text-white flex items-center justify-center shadow-md shadow-blue-700/20 group-hover:scale-110 group-hover:bg-blue-800 transition-all">
                      {stepIcons[index]}
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-blue-300 transition-colors">
                      0{step.step}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Bottom CTA trigger */}
        <ScrollReveal animation="fade-up" delay={0.2} className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openContactModal()}
            className="inline-flex items-center gap-2.5 py-3.5 px-8 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-700/20 transition-all"
          >
            <span>ابدأ بطلب الفني الآن</span>
            <ArrowLeft className="w-4 h-4" />
          </motion.button>
        </ScrollReveal>

      </div>
    </section>
  );
}
