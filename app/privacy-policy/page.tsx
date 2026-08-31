import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'سياسة الخصوصية | حماية بيانات العملاء',
  description: 'سياسة الخصوصية وسرية البيانات الخاصة بخدمات الصيانة المنزلية للكهرباء والسباكة في الرياض.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('privacy-policy')
  }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            { name: 'سياسة الخصوصية', url: '/privacy-policy' }
          ]}
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">سياسة الخصوصية</h1>
              <p className="text-xs text-slate-500">آخر تحديث: {new Date().getFullYear()}</p>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. مقدمة</h2>
            <p>
              نحن في {siteConfig.name} نولي خصوصية عملائنا في مدينة الرياض بالغ الأهمية. توضح هذه السياسة كيفية جمع البيانات واستخدامها وحمايتها عند حجز خدمات فني الكهرباء أو السباكة عبر موقعنا.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. المعلومات التي نجمعها</h2>
            <p>
              نقوم بجمع المعلومات الأساسية الضرورية لتقديم الخدمة والتواصل فقط، مثل: الاسم، رقم الجوال للتواصل، الحي والمنطقة داخل الرياض، وتفاصيل العطل أو الخدمة المطلوبة.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. كيفية استخدام المعلومات</h2>
            <ul className="list-disc pr-5 space-y-1">
              <li>تنسيق موعد وصول الفني المختص إلى موقعك في الرياض.</li>
              <li>التواصل معك لتأكيد تفاصيل العطل وتقديم عروض الأسعار والتقارير الفنية.</li>
              <li>متابعة جودة الخدمة وضمان رضا العملاء بعد إتمام أعمال الصيانة.</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. حماية وسرية البيانات</h2>
            <p>
              نلتزم بعدم بيع أو تأجير أو مشاركة بياناتك الشخصية مع أي أطراف ثالثة لأغراض دعائية أو تسويقية. يتم استخدام معلوماتك حصرياً لتنفيذ طلبات الصيانة وتسهيل التواصل بين العميل والفني.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">5. التواصل والاستفسار</h2>
            <p>
              إذا كان لديك أي استفسار حول سياسة الخصوصية، يسعدنا تواصلك معنا عبر صفحة الاتصال بالموقع.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
