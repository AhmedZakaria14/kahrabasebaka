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
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  ArrowLeft, 
  HelpCircle, 
  Wrench 
} from 'lucide-react';
import { ServiceItem, siteConfig, servicesData, districtsData } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { openContactModal } from '@/components/common/ContactModal';
import { getServiceSchema, getFAQSchema } from '@/lib/seo';
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/common/ScrollReveal';

interface ServiceDetailViewProps {
  service: ServiceItem;
}

export function ServiceDetailView({ service }: ServiceDetailViewProps) {
  const isElectrical = service.category === 'electrical';
  const relatedServices = servicesData.filter(s => service.relatedSlugs.includes(s.slug));

  const serviceSchema = getServiceSchema(service);
  const faqSchema = getFAQSchema(service.faq);

  const handleWhatsApp = (e: React.MouseEvent) => {
    if (!siteConfig.isWhatsAppConfigured()) {
      e.preventDefault();
      openContactModal(`طلب خدمة ${service.title} عبر واتساب`);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20 overflow-hidden">
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Top Breadcrumb Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <Breadcrumbs
          items={[
            { name: isElectrical ? 'خدمات الكهرباء' : 'خدمات السباكة', url: isElectrical ? '/electrician-riyadh' : '/plumber-riyadh' },
            { name: service.title, url: `/${service.slug}` }
          ]}
        />
      </div>

      {/* Service Hero Banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-12 lg:py-16 mb-12">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Header Content (7 cols) */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
              className="lg:col-span-7 space-y-5"
            >
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 border border-slate-700"
              >
                {isElectrical ? (
                  <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                ) : (
                  <Droplet className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
                )}
                <span className={isElectrical ? 'text-amber-300' : 'text-sky-300'}>
                  {isElectrical ? 'خدمات كهرباء بالرياض' : 'خدمات سباكة بالرياض'}
                </span>
              </motion.div>

              {/* Single H1 for SEO */}
              <motion.h1 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight"
              >
                {service.title}
              </motion.h1>

              <motion.p 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl"
              >
                {service.fullDescription}
              </motion.p>

              {/* Badges */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex items-center flex-wrap gap-4 text-xs text-slate-300 pt-2"
              >
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>خدمة فورية 24 ساعة</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>ضمان معتمد على العمل</span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>كافة أحياء الرياض</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-3"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openContactModal(service.title)}
                  className="py-3.5 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>طلب فني لهذه الخدمة الآن</span>
                </motion.button>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={siteConfig.getWhatsAppHref(`السلام عليكم، أرغب في حجز خدمة: ${service.title} في الرياض.`)}
                  onClick={handleWhatsApp}
                  target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm rounded-xl border border-slate-700 hover:border-emerald-500 transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>استفسار عبر واتساب</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Visual Image (5 cols) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700 aspect-[4/3] bg-slate-800">
                <BlurredImage
                  src={service.heroImage}
                  alt={`${service.title} في الرياض`}
                  fill
                  priority
                  theme="dark"
                  sizes="(max-width: 768px) 100vw, 500px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Article Content (8 cols) */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Key Features Block */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <span>ما تشمله خدمة {service.shortTitle} بالرياض</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Problems Solved */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <span>الأعطال والحالات التي نعالجها في {service.shortTitle}</span>
                </h2>

                <ul className="space-y-3">
                  {service.problemsSolved.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-3 p-3.5 bg-rose-50/50 rounded-2xl border border-rose-100 text-slate-800 text-xs sm:text-sm">
                      <div className="w-2 h-2 rounded-full bg-rose-500 shrink-0 mt-2"></div>
                      <span className="font-medium">{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Execution Steps */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span>خطوات تنفيذ خدمة {service.shortTitle}</span>
                </h2>

                <div className="space-y-4">
                  {service.executionSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-blue-700 text-white font-bold flex items-center justify-center shrink-0 text-sm">
                        {idx + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">{step.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Why Choose a Certified Technician */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
                  لماذا يجب الاستعانة بفني متخصص في {service.shortTitle} بالرياض؟
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  التعامل مع الأعطال بدون أدوات متخصصة وخبرة فنية قد يؤدي إلى تفاقم المشكلة، أو إحداث أضرار بالديكورات وتلف في الشبكة، أو تعريض السلامة الشخصية للخطر. الفني المتخصص يضمن تشخيص العطل من جذوره باستخدام أحدث أجهزة القياس وتوفير قطع الغيار المطابقة.
                </p>

                <div className="space-y-2.5">
                  {service.whyChooseUs.map((w, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Areas Covered */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>أحياء الرياض المشمولة بخدمة {service.shortTitle}</span>
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  نوفر تغطية فورية لخدمة {service.title} في كافة أحياء شمال، شرق، غرب، جنوب، ووسط مدينة الرياض:
                </p>

                <div className="flex flex-wrap gap-2">
                  {districtsData.flatMap(z => z.districts).slice(0, 18).map((d) => (
                    <button
                      key={d}
                      onClick={() => openContactModal(`طلب ${service.title} لحي ${d}`)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-xl text-xs font-semibold text-slate-700 transition"
                    >
                      حي {d}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Service FAQ */}
            {service.faq && service.faq.length > 0 && (
              <ScrollReveal animation="fade-up">
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                    <span>الأسئلة الشائعة حول {service.shortTitle}</span>
                  </h2>

                  <div className="space-y-4">
                    {service.faq.map((faqItem, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <h3 className="font-bold text-sm text-slate-900 mb-2">
                          {faqItem.question}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {faqItem.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

          </div>

          {/* Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Quick Booking Box */}
            <ScrollReveal animation="fade-up" className="sticky top-28 bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                  طلب خدمة سريع
                </span>
                <h3 className="font-black text-lg text-slate-900 mt-2">
                  احجز فني {service.shortTitle}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  معاينة وفحص دقيق في أي حي بالرياض
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => openContactModal(service.title)}
                  className="w-full py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl shadow-md transition flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>طلب فني فوري</span>
                </button>

                <a
                  href={siteConfig.getWhatsAppHref(`السلام عليكم، أود حجز خدمة: ${service.title} بالرياض.`)}
                  onClick={handleWhatsApp}
                  target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm rounded-xl shadow-sm transition flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>واتساب مباشر</span>
                </a>
              </div>

              {/* Guarantees list */}
              <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>فنيون متخصصون ومؤهلون</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>قطع غيار ومواد معتمدة</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>تغطية طوارئ على مدار 24 ساعة</span>
                </div>
              </div>

              {/* Related Services Internal Links */}
              {relatedServices.length > 0 && (
                <div className="pt-5 border-t border-slate-100">
                  <h4 className="font-bold text-xs text-slate-800 mb-3">
                    خدمات أخرى ذات صلة:
                  </h4>
                  <div className="space-y-2">
                    {relatedServices.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/${rel.slug}`}
                        className="block p-2.5 rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 hover:border-blue-200 transition group"
                      >
                        <div className="text-xs font-bold text-slate-800 group-hover:text-blue-700 flex items-center justify-between">
                          <span>{rel.title}</span>
                          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </ScrollReveal>

          </div>

        </div>
      </div>
    </div>
  );
}
