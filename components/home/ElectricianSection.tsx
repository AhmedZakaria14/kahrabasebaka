'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  Zap, 
  Cpu, 
  Phone, 
  ArrowLeft, 
  CheckCircle2 
} from 'lucide-react';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

export function ElectricianSection() {
  const electricalPoints = [
    {
      title: "صيانة أعطال الكهرباء والتماس الفوري",
      desc: "فحص إلكتروني دقيق بالملتيميتر لكشف الشورت وعزل الخطوط التالفة دون تكسير."
    },
    {
      title: "صيانة طبالين الكهرباء والقواطع",
      desc: "تبديل القواطع المحترقة وتوزيع وموازنة الأحمال على الفازات الثلاثية لمنع الفصل."
    },
    {
      title: "تأسيس وتمديد شبكات الكهرباء السكنية",
      desc: "تمديد خراطيم وسحب أسلاك نحاسية معتمدة للفلل والشقق والمحلات وفق كود البناء."
    },
    {
      title: "تركيب الإنارة الحديثة والليد والثريات",
      desc: "توزيع السبوت لايت، الليد بروفايل المخفي، وتثبيت الثريات الكريستالية بأمان تام."
    }
  ];

  return (
    <section id="electrician-riyadh-section" className="py-16 sm:py-24 bg-slate-900 text-white text-right relative overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text & Features Column (7 cols) */}
          <ScrollReveal animation="slide-right" className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold">
              <Zap className="w-4 h-4 fill-amber-400" />
              <span>فني كهرباء معتمد بالرياض</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              خدمات كهربائي بالرياض <br />
              <span className="text-amber-400">لصيانة وتأسيس وتأمين المنازل والفلل</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              تتطلب التمديدات الكهربائية دقة متناهية ومعرفة فنية عالية لتأمين سلامة المبنى وقاطنيه. نوفر في الرياض فريقاً من الفنيين المتخصصين في التعامل مع كافة التحديات الكهربائية، بدءاً من الأعطال الطارئة وسقوط القواطع، وحتى التأسيس الكامل وتوزيع الإضاءة الديكورية الذكية.
            </p>

            {/* Feature Cards */}
            <StaggerContainer staggerChildren={0.08} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {electricalPoints.map((point, index) => (
                <StaggerItem key={index} animation="fade-up">
                  <div className="h-full p-4 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-amber-400/50 hover:bg-slate-800 transition-all">
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <h3 className="text-sm font-bold text-white">{point.title}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed pr-6">
                      {point.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <motion.button
                id="electrician-section-book-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => openContactModal('طلب كهربائي بالرياض')}
                className="py-3.5 px-6 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>اطلب كهربائي بالرياض الآن</span>
              </motion.button>

              <Link
                href="/electrician-riyadh"
                className="py-3.5 px-5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-600 transition flex items-center gap-2"
              >
                <span>دليل خدمات الكهرباء</span>
                <ArrowLeft className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Visual Showcase (5 cols) */}
          <ScrollReveal animation="slide-left" className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-800 group">
              <div className="aspect-[4/5] relative overflow-hidden">
                <BlurredImage
                  src="https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?q=80&w=1000&auto=format&fit=crop"
                  alt="فني كهرباء بالرياض يفحص لوحة التوزيع والأسلاك بأمان"
                  fill
                  theme="dark"
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
              </div>

              {/* Inset Info Box */}
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700 text-right">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">أحدث أجهزة الفحص الرقمية</h4>
                    <p className="text-xs text-slate-300">تشخيص التماس والأحمال بدقة سنتيمترات</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
