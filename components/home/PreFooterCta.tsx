'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function PreFooterCta() {
  const handleWhatsApp = (e: React.MouseEvent) => {
    if (!siteConfig.isWhatsAppConfigured()) {
      e.preventDefault();
      openContactModal('طلب عبر واتساب من أسفل الصفحة');
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 via-indigo-950 to-slate-950 text-white text-right relative overflow-hidden">
      {/* Animated Glow shapes */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-0 right-1/3 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-0 left-1/3 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative text-center">
        
        {/* Badge */}
        <ScrollReveal animation="fade-down">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-800/60 border border-blue-700 text-amber-300 text-xs font-bold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>استجابة فورية وتغطية شاملة لجميع أحياء الرياض</span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            تحتاج كهربائي أو سباك في الرياض؟
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            تواصل معنا واطلب الخدمة المناسبة لمنزلك أو شقتك أو محلك. فريقنا الفني المتخصص على أتم الاستعداد لمعالجة كافة الأعطال والتسربات والتركيبات بأعلى جودة.
          </p>
        </ScrollReveal>

        {/* Action Buttons */}
        <ScrollReveal animation="scale-up" delay={0.2} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            id="pre-footer-call-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => openContactModal()}
            className="w-full sm:w-auto py-4 px-8 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2.5"
          >
            <Phone className="w-5 h-5" />
            <span>طلب فني فوري (معاينة)</span>
          </motion.button>

          <motion.a
            id="pre-footer-whatsapp-btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href={siteConfig.getWhatsAppHref()}
            onClick={handleWhatsApp}
            target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-4 px-8 bg-slate-800/90 hover:bg-slate-800 text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-700 hover:border-emerald-500 transition-all flex items-center justify-center gap-2.5"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400" />
            <span>محادثة واتساب سريعة</span>
          </motion.a>
        </ScrollReveal>

        {/* Micro guarantees */}
        <ScrollReveal animation="fade-up" delay={0.25} className="flex items-center justify-center flex-wrap gap-6 mt-8 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-sky-400" />
            <span>متواجدون على مدار 24 ساعة</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ضمان وجودة معتمدة</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>خدمة كافة أحياء الرياض</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
