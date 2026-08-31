'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  Droplet, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  ArrowUpLeft,
  Heart
} from 'lucide-react';
import { siteConfig, servicesData } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const electricalServices = servicesData.filter(s => s.category === 'electrical');
  const plumbingServices = servicesData.filter(s => s.category === 'plumbing');

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-right">
      {/* Top Banner / Quality Assurance */}
      <div className="border-b border-slate-900 bg-slate-900/60 py-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">سرعة الاستجابة بالرياض</h4>
              <p className="text-xs text-slate-400 mt-0.5">فريق فني متواجد وقريب من حيك للتعامل مع الطوارئ</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">فنيون ذوو خبرة معتمدة</h4>
              <p className="text-xs text-slate-400 mt-0.5">التزام بأعلى معايير السلامة المهنية وكود البناء</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-white text-base">ضمان على أعمال الصيانة</h4>
              <p className="text-xs text-slate-400 mt-0.5">تسعير شفاف وفحص دقيق قبل الشروع في التنفيذ</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: About & Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <div className="relative flex items-center justify-center">
                  <Zap className="w-4 h-4 text-amber-400 fill-amber-400 absolute -translate-x-1 -translate-y-1" />
                  <Droplet className="w-4 h-4 text-sky-200 fill-sky-200 translate-x-1 translate-y-1" />
                </div>
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                {siteConfig.name}
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              الوجهة الموثوقة لخدمات صيانة وتأسيس الكهرباء والسباكة في مدينة الرياض. نقدم حلولاً هندسية وفنية متكاملة للشقق، الفلل، القصور، والمحلات التجارية مع سرعة الوصول ودقة التنفيذ.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>الرياض، المملكة العربية السعودية (جميع الأحياء)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>أوقات العمل: {siteConfig.hoursText}</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                id="footer-quick-booking-btn"
                onClick={() => openContactModal()}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition shadow-md"
              >
                <span>طلب موعد زيارة فنية</span>
                <ArrowUpLeft className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Col 2: Electrical Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>خدمات الكهرباء</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {electricalServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.shortTitle} بالرياض</span>
                    <ArrowUpLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Plumbing Services */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 pb-2 border-b border-slate-800 flex items-center gap-2">
              <Droplet className="w-4 h-4 text-sky-400" />
              <span>خدمات السباكة</span>
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {plumbingServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="hover:text-sky-400 transition-colors flex items-center justify-between group"
                  >
                    <span>{service.shortTitle} بالرياض</span>
                    <ArrowUpLeft className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Important Pages & Areas */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 pb-2 border-b border-slate-800">
              روابط مهمة
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/" className="hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">دليل كافة الخدمات</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">المدونة والنصائح الفنية</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">من نحن</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">تواصل معنا</Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Riyadh Districts Tag Cloud in Footer for Local SEO */}
        <div className="mt-12 pt-8 border-t border-slate-900">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <span className="font-bold text-slate-300">أحياء الرياض المغطاة بالخدمة:</span>
            <span>الملقا</span> • <span>الصحافة</span> • <span>الياسمين</span> • <span>النرجس</span> • <span>العارض</span> • <span>النخيل</span> • <span>حطين</span> • <span>الروضة</span> • <span>قرطبة</span> • <span>اشبيلية</span> • <span>الرمال</span> • <span>الخليج</span> • <span>العليا</span> • <span>السليمانية</span> • <span>الملز</span> • <span>لبن</span> • <span>السويدي</span> • <span>العريجاء</span> • <span>الشفا</span> • <span>العزيزية</span> • <span>كافة أحياء ومناطق الرياض</span>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-black/50 py-5 px-4 text-center text-xs text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {currentYear} {siteConfig.name}. جميع الحقوق محفوظة لخدمات الكهرباء والسباكة في الرياض.</p>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <span>المملكة العربية السعودية – الرياض</span>
            <span>•</span>
            <Link href="/privacy-policy" className="hover:underline text-slate-400">الخصوصية</Link>
            <span>•</span>
            <Link href="/terms" className="hover:underline text-slate-400">الشروط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
