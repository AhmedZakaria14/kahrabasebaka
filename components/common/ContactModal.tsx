'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, MapPin, X, CheckCircle2, Clock, Send, ShieldAlert, Wrench } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';

interface ContactModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  defaultService?: string;
}

export function ContactModal({ isOpen: controlledIsOpen, onClose: controlledOnClose, defaultService }: ContactModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    service: defaultService || 'صيانة عامة',
    notes: ''
  });

  // Listen to hash change for #contact-info-modal or programmatic triggers
  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#contact-info-modal') {
        setIsOpen(true);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    
    const handleCustomTrigger = (e: CustomEvent<{ service?: string }>) => {
      const selectedService = e.detail?.service;
      if (selectedService) {
        setFormData(prev => ({ ...prev, service: selectedService }));
      }
      setIsOpen(true);
    };

    window.addEventListener('open-contact-modal' as any, handleCustomTrigger as any);

    return () => {
      window.removeEventListener('hashchange', handleHash);
      window.removeEventListener('open-contact-modal' as any, handleCustomTrigger as any);
    };
  }, []);

  const showModal = controlledIsOpen !== undefined ? controlledIsOpen : isOpen;

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);

  const handleClose = () => {
    if (controlledOnClose) {
      controlledOnClose();
    } else {
      setIsOpen(false);
      if (window.location.hash === '#contact-info-modal') {
        history.replaceState(null, '', window.location.pathname + window.location.search);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
  };

  if (!showModal) return null;

  const isPhoneReady = siteConfig.isPhoneConfigured();
  const isWhatsAppReady = siteConfig.isWhatsAppConfigured();

  return (
    <div
      id="contact-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        id="contact-modal-card"
        className="relative w-full max-w-lg bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-right animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-4 sm:p-6 relative shrink-0">
          <button
            id="close-contact-modal-btn"
            onClick={handleClose}
            aria-label="إغلاق النافذة"
            className="absolute left-3 top-3 sm:left-4 sm:top-4 w-10 h-10 flex items-center justify-center text-slate-300 hover:text-white rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center gap-3 pl-8 sm:pl-0">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 id="contact-modal-title" className="text-lg sm:text-xl font-bold text-white leading-tight">
                طلب فني كهرباء وسباكة بالرياض
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                تغطية شاملة لكافة أحياء الرياض على مدار 24 ساعة
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto overscroll-contain flex-1">
          {formSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">تم تسجيل طلبك بنجاح!</h4>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                شكرًا لتواصلك معنا. سيقوم الفني المختص بالاتصال برقمك <strong>({formData.phone})</strong> للتأكيد والتوجه لموقعك في حي <strong>({formData.district || 'الرياض'})</strong> بأسرع وقت.
              </p>
              <button
                id="reset-form-btn"
                onClick={() => {
                  setFormSubmitted(false);
                  handleClose();
                }}
                className="w-full min-h-[48px] py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 active:scale-98 transition"
              >
                إغلاق
              </button>
            </div>
          ) : (
            <div>
              {/* Phone Status Notice if placeholder */}
              {!isPhoneReady && (
                <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">ملاحظة بشأن أرقام الاتصال المباشر:</span>
                    يتم حالياً ربط خطوط الهاتف والواتساب المباشرة ({siteConfig.placeholderText}). يمكنك إرسال طلبك وسيتواصل معك الفني خلال دقائق.
                  </div>
                </div>
              )}

              {/* Direct Communication Buttons if ready */}
              {isPhoneReady && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-5">
                  <a
                    id="modal-direct-phone-call"
                    href={`tel:${siteConfig.PHONE_NUMBER}`}
                    className="min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 active:scale-98 transition shadow-sm text-sm"
                  >
                    <Phone className="w-5 h-5" />
                    <span>اتصال فوري</span>
                  </a>
                  {isWhatsAppReady && (
                    <a
                      id="modal-direct-whatsapp"
                      href={siteConfig.getWhatsAppHref()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[48px] flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white font-bold rounded-xl hover:bg-[#1EBE5D] active:scale-98 transition shadow-sm text-sm"
                    >
                      <MessageSquare className="w-5 h-5" />
                      <span>محادثة واتساب</span>
                    </a>
                  )}
                </div>
              )}

              {/* Quick Request Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    الاسم الكريم *
                  </label>
                  <input
                    id="modal-input-name"
                    type="text"
                    required
                    placeholder="مثال: فهد الدوسري"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      رقم الجوال *
                    </label>
                    <input
                      id="modal-input-phone"
                      type="tel"
                      required
                      placeholder="05XXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none transition"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      الحي في الرياض *
                    </label>
                    <input
                      id="modal-input-district"
                      type="text"
                      required
                      placeholder="مثال: النرجس، الروضة..."
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    id="modal-select-service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full min-h-[44px] px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none transition"
                  >
                    <option value="كهربائي منازل">كهربائي منازل (إصلاح أعطال / إنارة / قواطع)</option>
                    <option value="سباك منازل">سباك منازل (تسربات / مجاري / تركيب أدوات)</option>
                    <option value="صيانة لوحة كهرباء">صيانة لوحة كهرباء وقواطع</option>
                    <option value="كشف تسربات المياه">كشف وإصلاح تسربات المياه</option>
                    <option value="تسليك مجاري">تسليك مجاري وبالوعات</option>
                    <option value="تركيب سخانات">تركيب أو صيانة سخان مياه</option>
                    <option value="تأسيس وتمديدات">تأسيس وتمديد شبكات كهرباء أو سباكة</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    ملاحظات أو وصف المشكلة (اختياري)
                  </label>
                  <textarea
                    id="modal-input-notes"
                    rows={2}
                    placeholder="اكتب تفاصيل إضافية عن العطل..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-base sm:text-sm focus:bg-white focus:border-blue-600 outline-none transition resize-none"
                  ></textarea>
                </div>

                <button
                  id="submit-contact-modal-btn"
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-800 active:scale-98 transition shadow-md flex items-center justify-center gap-2 text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>إرسال طلب فني الآن</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Global dispatcher helper
export function openContactModal(serviceTitle?: string) {
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('open-contact-modal', {
      detail: { service: serviceTitle }
    });
    window.dispatchEvent(event);
  }
}
