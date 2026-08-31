import React from 'react';
import type { Metadata } from 'next';
import { FileText } from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'الشروط والأحكام | معايير تقديم خدمات الصيانة',
  description: 'الشروط والأحكام والضمانات الخاصة بخدمات صيانة وتأسيس الكهرباء والسباكة في مدينة الرياض.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('terms')
  }
};

export default function TermsPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <Breadcrumbs
          items={[
            { name: 'الشروط والأحكام', url: '/terms' }
          ]}
        />

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900">الشروط والأحكام</h1>
              <p className="text-xs text-slate-500">سارية على جميع طلبات الخدمات في مدينة الرياض</p>
            </div>
          </div>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">1. طبيعة الخدمات</h2>
            <p>
              يقدم موقع {siteConfig.name} خدمات فنية متخصصة في صيانة وتأسيس شبكات الكهرباء والسباكة للمنازل والفلل والمحلات التجارية داخل النطاق الجغرافي لمدينة الرياض.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">2. المعاينة وتقدير التكلفة</h2>
            <p>
              يقوم الفني عند وصوله بفحص العطل وتحديد سببه بدقة، ويتم إبلاغ العميل بتقرير الفحص وتكلفة العمل وقطع الغيار المطلوبة قبل البدء بالتنفيذ.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">3. الضمان وجودة التنفيذ</h2>
            <p>
              تخضع جميع أعمال الصيانة والتركيب للضمان الفني المتفق عليه وفق طبيعة الخدمة ونوع قطع الغيار المستخدمة، مما يضمن حق العميل في الحصول على خدمة متقنة ومطابقة لمعايير السلامة المهنية.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-base font-bold text-slate-900">4. التزامات السلامة</h2>
            <p>
              يلتزم الفنيون باتباع بروتوكولات الأمان والعزل الكهربائي وحماية المنشأة أثناء العمل. يرجى من العميل تيسير الوصول إلى لوحات القواطع ومحابس المياه الرئيسية عند الحاجة.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
