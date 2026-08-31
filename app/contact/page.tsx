import React from 'react';
import type { Metadata } from 'next';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Mail 
} from 'lucide-react';
import { siteConfig, districtsData } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'تواصل معنا | حجز فني كهرباء وسباكة في الرياض',
  description: 'تواصل مع فريق صيانة الكهرباء والسباكة في الرياض لطلب فني فوري أو حجز موعد معاينة لمنزلك أو منشأتك في كافة أحياء الرياض.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('contact')
  }
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'تواصل معنا', url: '/contact' }
            ]}
          />

          <div className="max-w-3xl space-y-4 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-300 text-xs font-bold">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>استقبال الطلبات على مدار 24 ساعة</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              تواصل معنا واطلب فني كهرباء أو سباكة بالرياض
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              يسعدنا خدمتك في أي حي من أحياء الرياض. املأ النموذج وسيتواصل معك الفني فوراً، أو تواصل معنا عبر القنوات المباشرة.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                معلومات الاتصال والتغطية
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5">نطاق التغطية:</h4>
                    <p className="text-slate-500">مدينة الرياض، المملكة العربية السعودية (شمال، شرق، غرب، جنوب، ووسط الرياض).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5">أوقات العمل:</h4>
                    <p className="text-slate-500">{siteConfig.hoursText} (خدمة طوارئ مستمرة طوال أيام الأسبوع).</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-0.5">الضمان والمعاينة:</h4>
                    <p className="text-slate-500">فحص دقيق وتقديم كشف فني بالقطع المطلوبة قبل البدء في الإصلاح.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-white">هل تواجه عطلاً طارئاً؟</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                في حالات التماس الكهرباء الحاد أو انفجار مواسير المياه، ننصحك بفصل القاطع الرئيسي أو محبس المياه العمومي وطلب الفني فوراً.
              </p>

              <div className="pt-2 flex flex-col gap-3">
                <a
                  href={siteConfig.getWhatsAppHref('طلب طوارئ كهرباء / سباكة بالرياض')}
                  target={siteConfig.isWhatsAppConfigured() ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>تواصل عبر واتساب للطوارئ</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
