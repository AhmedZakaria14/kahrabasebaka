'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Zap, Droplet, Clock, ShieldCheck, Send } from 'lucide-react';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function QuickCostEstimator() {
  const [category, setCategory] = useState<'electrical' | 'plumbing'>('electrical');
  const [propertyType, setPropertyType] = useState('فيلا سكنية');
  const [issueType, setIssueType] = useState('كشف التماس كهربائي وانقطاع تيار');
  const [district, setDistrict] = useState('شمال الرياض');

  const electricalIssues = [
    'كشف التماس كهربائي وانقطاع تيار',
    'صيانة طبلون وقواطع الكهرباء',
    'تركيب إنارة وثريات وسبوت لايت',
    'تأسيس وتمديد خطوط كهرباء جديدة',
    'فحص الأفياش والمفاتيح والسخونة'
  ];

  const plumbingIssues = [
    'كشف وإصلاح تسربات المياه',
    'تسليك مجاري وبالوعات الصرف',
    'تركيب أو صيانة سخان مياه',
    'تركيب وصيانة الأدوات الصحية والخلاطات',
    'صيانة وتمديد شبكات ومضخات المياه'
  ];

  const currentIssues = category === 'electrical' ? electricalIssues : plumbingIssues;

  const handleDiagnose = (e: React.FormEvent) => {
    e.preventDefault();
    openContactModal(`طلب معاينة: ${issueType} - ${propertyType} (${district})`);
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white text-right relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Information (5 cols) */}
          <ScrollReveal animation="slide-right" className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Calculator className="w-3.5 h-3.5" />
              <span>محدد الخدمة السريعة بالرياض</span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              حدد نوع المشكلة <br />
              <span className="text-sky-400">واحصل على تقدير المعاينة الفورية</span>
            </h2>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              اختر نوع العقار والعطل الذي تواجهه في منزلك بالرياض لنقوم بتجهيز الفني المختص بالمعدات وقطع الغيار المناسبة قبل التوجه لموقعك.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 bg-slate-800/60 rounded-2xl border border-slate-700/60">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold block text-white">زمن الاستجابة المعتاد:</span>
                  <span className="text-[11px] text-slate-300">من 30 إلى 60 دقيقة في أغلب أحياء الرياض</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-800/60 rounded-2xl border border-slate-700/60">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs font-bold block text-white">معاينة وفحص دقيق:</span>
                  <span className="text-[11px] text-slate-300">توضيح أسباب العطل والتكلفة قبل بدء أي عمل</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Interactive Form Card (7 cols) */}
          <ScrollReveal animation="slide-left" className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-100">
              <form onSubmit={handleDiagnose} className="space-y-4">
                
                {/* Category Switch */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    1. المجال الرئيسي للعطل:
                  </label>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setCategory('electrical');
                        setIssueType(electricalIssues[0]);
                      }}
                      className={`min-h-[48px] flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all active:scale-95 ${
                        category === 'electrical'
                          ? 'bg-amber-50 border-amber-400 text-amber-900 shadow-sm ring-2 ring-amber-400/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Zap className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
                      <span>خدمات الكهرباء</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setCategory('plumbing');
                        setIssueType(plumbingIssues[0]);
                      }}
                      className={`min-h-[48px] flex items-center justify-center gap-2 py-3 px-3 sm:px-4 rounded-xl font-bold text-xs sm:text-sm border transition-all active:scale-95 ${
                        category === 'plumbing'
                          ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-sm ring-2 ring-sky-400/20'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Droplet className="w-4 h-4 text-sky-500 fill-sky-500 shrink-0" />
                      <span>خدمات السباكة</span>
                    </button>
                  </div>
                </div>

                {/* Specific Issue Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    2. نوع العطل أو الخدمة المطلوبة:
                  </label>
                  <select
                    value={issueType}
                    onChange={(e) => setIssueType(e.target.value)}
                    className="w-full min-h-[44px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm font-medium focus:bg-white focus:border-blue-600 outline-none transition"
                  >
                    {currentIssues.map((issue) => (
                      <option key={issue} value={issue}>
                        {issue}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Property Type & District */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      3. نوع العقار:
                    </label>
                    <select
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                      className="w-full min-h-[44px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm font-medium focus:bg-white focus:border-blue-600 outline-none transition"
                    >
                      <option value="شقة سكنية">شقة سكنية</option>
                      <option value="فيلا سكنية">فيلا سكنية / دوبلكس</option>
                      <option value="محل تجاري / معرض">محل تجاري / معرض</option>
                      <option value="عمارة سكنية / مجمع">عمارة سكنية / مجمع</option>
                      <option value="استراحة / قصر">استراحة / قصر</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      4. المنطقة في الرياض:
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full min-h-[44px] p-3 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm font-medium focus:bg-white focus:border-blue-600 outline-none transition"
                    >
                      <option value="شمال الرياض">شمال الرياض (الملقا، الياسمين، النرجس...)</option>
                      <option value="شرق الرياض">شرق الرياض (الروضة، قرطبة، الرمال...)</option>
                      <option value="وسط الرياض">وسط الرياض (العليا، السليمانية، الملز...)</option>
                      <option value="غرب الرياض">غرب الرياض (لبن، السويدي، العريجاء...)</option>
                      <option value="جنوب الرياض">جنوب الرياض (الشفا، العزيزية، بدر...)</option>
                    </select>
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <motion.button
                    id="cost-estimator-submit-btn"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 sm:py-4 px-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 active:from-blue-900 active:to-indigo-950 text-white font-black text-sm rounded-xl shadow-lg shadow-blue-700/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-amber-300" />
                    <span>طلب معاينة الفني لهذا العطل الآن</span>
                  </motion.button>
                </div>

              </form>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
