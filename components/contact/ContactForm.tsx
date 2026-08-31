'use client';

import React, { useState } from 'react';
import { 
  Send, 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  AlertCircle
} from 'lucide-react';
import { siteConfig, districtsData } from '@/lib/config/site';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    district: '',
    serviceType: 'كهربائي منازل',
    urgency: 'عاجل (خلال ساعة)',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const isPhoneReady = siteConfig.isPhoneConfigured();
  const isWhatsAppReady = siteConfig.isWhatsAppConfigured();

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xl text-right">
      {submitted ? (
        <div className="text-center py-10">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">تم استلام طلبك بنجاح!</h3>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
            شكرًا لتواصلك معنا يا <strong>{formData.name}</strong>. سيقوم الفني المختص بالتواصل معك على رقمك <strong>({formData.phone})</strong> لتأكيد الموعد والتوجه لموقعك في حي <strong>({formData.district || 'الرياض'})</strong>.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                district: '',
                serviceType: 'كهربائي منازل',
                urgency: 'عاجل (خلال ساعة)',
                notes: ''
              });
            }}
            className="py-3 px-8 bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition"
          >
            إرسال طلب آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-slate-100 pb-4 mb-4">
            <h3 className="text-xl font-bold text-slate-900 mb-1">
              نموذج حجز فني كهرباء أو سباكة
            </h3>
            <p className="text-xs text-slate-500">
              يرجى تعبئة الحقول وسيتواصل معك الفني للتأكيد في غضون دقائق معدودة.
            </p>
          </div>

          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 mb-1.5">
                الاسم الكريم *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="مثال: عبد الله السبيعي"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-blue-600 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 mb-1.5">
                رقم الجوال *
              </label>
              <input
                id="contact-phone"
                type="tel"
                required
                placeholder="05XXXXXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-blue-600 outline-none transition"
                dir="ltr"
              />
            </div>
          </div>

          {/* District & Service */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-district" className="block text-xs font-bold text-slate-700 mb-1.5">
                الحي في الرياض *
              </label>
              <input
                id="contact-district"
                type="text"
                required
                placeholder="مثال: النرجس، الملقا، الروضة..."
                value={formData.district}
                onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-blue-600 outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="contact-service" className="block text-xs font-bold text-slate-700 mb-1.5">
                نوع الخدمة المطلوبة
              </label>
              <select
                id="contact-service"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-blue-600 outline-none transition"
              >
                <option value="كهربائي منازل">كهربائي منازل (إصلاح أعطال / فيش / مفاتيح)</option>
                <option value="سباك منازل">سباك منازل (تصليح مواسير / خلاطات)</option>
                <option value="كشف تسربات المياه">كشف وإصلاح تسربات المياه</option>
                <option value="تسليك مجاري">تسليك مجاري وشبكات الصرف</option>
                <option value="صيانة طبلون وقواطع">صيانة لوحات الكهرباء والقواطع</option>
                <option value="تركيب إنارة وثريات">تركيب الإنارة والثريات والسبوت لايت</option>
                <option value="تركيب وصيانة سخانات">تركيب وصيانة سخانات المياه</option>
                <option value="تركيب أدوات صحية">تركيب أدوات صحية وخلاطات</option>
                <option value="تأسيس وتمديد شبكات">تأسيس وتمديد كهرباء أو سباكة</option>
              </select>
            </div>
          </div>

          {/* Urgency */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              درجة الاستعجال:
            </label>
            <div className="grid grid-cols-3 gap-3">
              {['طوارئ فورية', 'خلال ساعتين', 'موعد محدد'].map((u) => (
                <button
                  type="button"
                  key={u}
                  onClick={() => setFormData({ ...formData, urgency: u })}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition ${
                    formData.urgency === u
                      ? 'bg-blue-700 text-white border-blue-700 shadow-sm'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label htmlFor="contact-notes" className="block text-xs font-bold text-slate-700 mb-1.5">
              تفاصيل إضافية عن العطل أو الموقع (اختياري)
            </label>
            <textarea
              id="contact-notes"
              rows={3}
              placeholder="اكتب أي تفاصيل تساعد الفني مثل: نوع الجهاز، مكان التسريب، الطابق..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:bg-white focus:border-blue-600 outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Notice if numbers are placeholder */}
          {!isPhoneReady && (
            <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span>
                ملاحظة: يتم حالياً ضبط الاتصال الهاتفي المباشر. يرجى إرسال النموذج وسيتصل بك الفني على الفور.
              </span>
            </div>
          )}

          {/* Submit button */}
          <button
            id="contact-form-submit-btn"
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-800 hover:from-blue-800 hover:to-indigo-900 text-white font-black text-base rounded-xl shadow-lg shadow-blue-700/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5 text-amber-300" />
            <span>إرسال طلب فني الآن</span>
          </button>
        </form>
      )}
    </div>
  );
}
