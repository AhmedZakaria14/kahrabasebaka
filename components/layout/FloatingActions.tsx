'use client';

import React, { useState } from 'react';
import { Phone, MessageSquare, Wrench, X } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { openContactModal } from '@/components/common/ContactModal';

export function FloatingActions() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    if (!siteConfig.isWhatsAppConfigured()) {
      e.preventDefault();
      openContactModal('طلب عبر واتساب (الرياض)');
    }
  };

  const handlePhoneClick = (e: React.MouseEvent) => {
    if (!siteConfig.isPhoneConfigured()) {
      e.preventDefault();
      openContactModal('اتصال هاتفي مباشر (الرياض)');
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button (Hidden on Mobile, Visible on Desktop/Tablet) */}
      <div 
        id="floating-whatsapp-container"
        className="hidden md:flex fixed bottom-6 left-6 z-40 flex-col items-start gap-2 select-none"
      >
        {/* Helper Tooltip Badge */}
        {showTooltip && (
          <div className="bg-slate-900 text-white text-xs py-1.5 px-3 rounded-xl shadow-lg border border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-150 flex items-center gap-2">
            <span>تواصل معنا فورياً عبر الواتساب</span>
            <button 
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
              aria-label="إغلاق التنبيه"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          id="floating-whatsapp-btn"
          href={siteConfig.getWhatsAppHref()}
          onClick={handleWhatsAppClick}
          target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
          rel="noopener noreferrer"
          aria-label="تواصل عبر واتساب لخدمات الكهرباء والسباكة بالرياض"
          onMouseEnter={() => setShowTooltip(true)}
          className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-white"></span>
          </span>
          <MessageSquare className="w-7 h-7 fill-white/10 group-hover:rotate-12 transition-transform" />
        </a>
      </div>

      {/* Floating Bottom Bar on Mobile for Quick Call & Booking */}
      <div 
        id="mobile-bottom-floating-bar"
        className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2.5 shadow-2xl flex items-center gap-3"
      >
        <button
          id="mobile-sticky-order-btn"
          onClick={() => openContactModal()}
          className="flex-1 py-3 bg-gradient-to-r from-blue-700 to-indigo-800 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 active:scale-98 transition"
        >
          <Wrench className="w-4 h-4 text-amber-300" />
          <span>اطلب فني للرياض</span>
        </button>

        <a
          id="mobile-sticky-phone-btn"
          href={siteConfig.getPhoneHref()}
          onClick={handlePhoneClick}
          className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-1.5 active:scale-98 transition"
          aria-label="اتصال مباشر"
        >
          <Phone className="w-4 h-4" />
          <span>اتصال</span>
        </a>
      </div>
    </>
  );
}
