'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote, MapPin } from 'lucide-react';
import { sampleTestimonials } from '@/lib/config/site';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 bg-white text-right border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            تجارب وانطباعات الخدمة
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mt-3 mb-4">
            آراء وانطباعات عملائنا في الرياض
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            نماذج لانطباعات عملاء المنازل والفلل بالرياض حول دقة المواعيد وسرعة حل المشكلات الكهربائية والسباكة.
          </p>
        </ScrollReveal>

        {/* Testimonials Cards */}
        <StaggerContainer staggerChildren={0.1} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((t) => (
            <StaggerItem key={t.id} animation="scale-up" className="h-full">
              <motion.div
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="h-full bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating stars & Quote icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-slate-300 rotate-180" />
                  </div>

                  <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
                    &ldquo;{t.comment}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{t.district}</span>
                  </div>
                  <div className="text-[11px] text-blue-700 font-semibold mt-1">
                    الخدمة: {t.service}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal animation="fade-in" delay={0.2}>
          <p className="text-center text-[11px] text-slate-400 mt-8">
            * نماذج تمثل جودة الخدمة واستجابة الفنيين في مختلف أحياء مدينة الرياض.
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
