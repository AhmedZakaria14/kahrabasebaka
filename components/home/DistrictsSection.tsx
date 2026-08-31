'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Navigation, CheckCircle2, Search } from 'lucide-react';
import { districtsData } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function DistrictsSection() {
  const [selectedZone, setSelectedZone] = useState<string>(districtsData[0].zone);
  const [searchQuery, setSearchQuery] = useState('');

  const currentZoneData = districtsData.find(z => z.zone === selectedZone) || districtsData[0];

  const filteredDistricts = searchQuery.trim() === ''
    ? currentZoneData.districts
    : districtsData.flatMap(z => z.districts).filter(d => d.includes(searchQuery.trim()));

  const handleDistrictClick = (districtName: string) => {
    openContactModal(`طلب فني لحي ${districtName} بالرياض`);
  };

  return (
    <section id="districts-section" className="py-16 sm:py-24 bg-white text-right border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <ScrollReveal animation="fade-up" className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold mb-3">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            <span>تغطية شاملة وفورية لكافة مناطق الرياض</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            نخدم مختلف أحياء الرياض
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            يتوزع فنيو الكهرباء والسباكة في نقاط استراتيجية داخل مدينة الرياض لضمان سرعة الوصول لمنزلك أو منشأتك في وقت قياسي وبأعلى جاهزية.
          </p>

          {/* Quick Search for Riyadh District */}
          <div className="relative max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="ابحث عن حيك في الرياض (مثال: الياسمين، النرجس، الروضة...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] pl-10 pr-4 py-3 bg-slate-50 border border-slate-300 rounded-2xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none shadow-sm transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </ScrollReveal>

        {/* Zones Tabs */}
        {searchQuery.trim() === '' && (
          <ScrollReveal animation="fade-up" delay={0.1} className="flex items-center justify-center gap-2 mb-8 flex-wrap">
            {districtsData.map((zone) => (
              <button
                key={zone.zone}
                onClick={() => setSelectedZone(zone.zone)}
                className={`min-h-[44px] px-3.5 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-sm flex items-center gap-1.5 sm:gap-2 active:scale-95 ${
                  selectedZone === zone.zone
                    ? 'bg-blue-700 text-white shadow-blue-700/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{zone.zone}</span>
              </button>
            ))}
          </ScrollReveal>
        )}

        {/* Districts Chips Container */}
        <ScrollReveal animation="scale-up" delay={0.15}>
          <div className="bg-slate-50 rounded-3xl p-4 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-5 pb-4 border-b border-slate-200 flex-wrap">
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  {searchQuery.trim() !== '' ? `نتائج البحث عن: "${searchQuery}"` : `أحياء ${selectedZone}`}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  انقر على اسم الحي لطلب فني مباشرة إلى موقعك
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-100/70 px-3 py-1.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4" />
                <span>فنيون متواجدون ومتاحون الآن</span>
              </div>
            </div>

            {/* District Interactive Buttons */}
            <motion.div 
              layout
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3"
            >
              <AnimatePresence mode="popLayout">
                {filteredDistricts.map((district) => (
                  <motion.button
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    key={district}
                    onClick={() => handleDistrictClick(district)}
                    className="min-h-[44px] group p-2.5 sm:p-3 bg-white hover:bg-blue-600 active:bg-blue-700 text-slate-800 hover:text-white active:text-white rounded-xl border border-slate-200 hover:border-blue-600 shadow-sm hover:shadow-md transition-all text-right flex items-center justify-between"
                  >
                    <span className="text-xs sm:text-sm font-semibold truncate">
                      حي {district}
                    </span>
                    <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-300 group-active:text-amber-300 shrink-0" />
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>

            {filteredDistricts.length === 0 && (
              <div className="text-center py-8 text-slate-500 text-sm">
                لم نجد حياً مطابقاً لبحثك، لكننا نخدم كافة أحياء ومناطق الرياض بدون استثناء!
                <div className="mt-3">
                  <button
                    onClick={() => openContactModal('طلب فني لحي في الرياض')}
                    className="px-5 py-2.5 bg-blue-700 text-white text-xs font-bold rounded-xl hover:bg-blue-800 transition"
                  >
                    اطلب فني لحيّك الآن
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
