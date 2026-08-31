import React from 'react';
import type { Metadata } from 'next';
import { BlurredImage } from '@/components/common/BlurredImage';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  MapPin, 
  Wrench, 
  CheckCircle2, 
  HeartHandshake, 
  Zap, 
  Droplet 
} from 'lucide-react';
import { siteConfig } from '@/lib/config/site';
import { Breadcrumbs } from '@/components/common/Breadcrumbs';

export const metadata: Metadata = {
  title: 'من نحن | رواد خدمات صيانة الكهرباء والسباكة في الرياض',
  description: 'تعرف على رؤيتنا ومعاييرنا الفنية في تقديم خدمات الكهرباء والسباكة المنزلية والتجارية بمدينة الرياض على أيدي فنيين محترفين.',
  alternates: {
    canonical: siteConfig.getCanonicalUrl('about')
  }
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50 min-h-screen text-right pb-20">
      
      {/* Banner */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              { name: 'من نحن', url: '/about' }
            ]}
          />

          <div className="max-w-3xl space-y-4 mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-700 text-blue-300 text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>خبرة فنية ومعايير هندسية متقدمة</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              من نحن – رواد صيانة الكهرباء والسباكة بالرياض
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              نلتزم بتقديم حلول صيانة وتأسيس ذكية وآمنة لجميع العقارات في العاصمة الرياض، مدعومة بفريق فني متخصص وأحدث أدوات الفحص الرقمية.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 space-y-16">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950">
              خدمة موثوقة تلبي احتياجات منازل ومشاريع الرياض
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              انطلقنا برؤية واضحة تهدف إلى الارتقاء بمستوى خدمات الصيانة المنزلية في مدينة الرياض. ندرك تماماً أن أعطال الكهرباء وتسربات المياه تتطلب سرعة فائقة في التدخل وأعلى درجات الدقة الفنية لتجنب الخسائر والأضرار في الممتلكات.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              لذا جهزنا فرقنا الميدانية بأجهزة الكشف الصوتي والرقمي المتطورة، وحرصنا على انتقاء فنيين معتمدين يتمتعون بالخبرة في التعامل مع مختلف الأنظمة الكهربائية وشبكات التغذية والصرف للفلل الحديثة والمباني القائمة.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <h3 className="font-bold text-sm text-slate-900">سلامة كهربائية تامة</h3>
                </div>
                <p className="text-xs text-slate-500">التزام صارم بمعايير عزل وتوزيع الأحمال وكود البناء.</p>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 mb-1">
                  <Droplet className="w-4 h-4 text-sky-500" />
                  <h3 className="font-bold text-sm text-slate-900">حماية من الهدر والرطوبة</h3>
                </div>
                <p className="text-xs text-slate-500">معالجة فورية للتسربات والانسدادات بأساليب غير مدمرة.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <BlurredImage
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1000&auto=format&fit=crop"
                alt="فريق الصيانة الفنية بالرياض"
                fill
                sizes="(max-width: 768px) 100vw, 500px"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Pillars / Values */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 text-center mb-10">
            ركائز التميز في عملنا
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">الأمان والموثوقية</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                سلامة العملاء ومنازلهم هي أولويتنا الأولى. نستخدم قطع غيار معتمدة وأسلاك وقواطع مطابقة للمواصفات السعودية.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-black">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">سرعة الاستجابة</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                تواجد فنيينا في مختلف قطاعات الرياض يمكننا من تلبية طلبات الطوارئ والمواعيد الدورية في الوقت المحدد دون تأخير.
              </p>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-black">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">الشفافية والضمان</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                شرح تفصيلي للمشكلة والتكلفة قبل الشروع في العمل، مع تقديم ضمان فعلي على جودة أعمال الصيانة والتركيب.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
