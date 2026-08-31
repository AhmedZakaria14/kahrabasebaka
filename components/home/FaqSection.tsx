'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { faqList } from '@/lib/config/site';
import { getFAQSchema } from '@/lib/seo';
import { ScrollReveal } from '@/components/common/ScrollReveal';

export function FaqSection({ customFaqs }: { customFaqs?: { question: string; answer: string }[] }) {
  const list = customFaqs || faqList;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = list.filter(item => 
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const schema = getFAQSchema(list);

  return (
    <section id="faq-section" className="py-16 sm:py-24 bg-slate-50 text-right border-t border-slate-200/80 overflow-hidden">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-xs font-bold mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>إجابات واضحة ومباشرة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-950 tracking-tight mb-4">
            الأسئلة الشائعة حول خدماتنا
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            تعرف على تفاصيل طلب فني الكهرباء والسباكة في الرياض، طرق الفحص، وتغطية الأحياء والمناطق.
          </p>

          {/* Quick FAQ Search */}
          <div className="relative max-w-md mx-auto mt-6">
            <input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full min-h-[44px] pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-base sm:text-sm focus:border-blue-600 outline-none shadow-sm transition"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          </div>
        </ScrollReveal>

        {/* Accordion list */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 0.05}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  id={`faq-toggle-btn-${index}`}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full min-h-[52px] p-4 sm:p-5 text-right flex items-center justify-between gap-3 sm:gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-blue-700 active:bg-slate-50 transition"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-blue-100 text-blue-700' : 'text-slate-500'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 sm:px-6 pb-5 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-8 text-slate-500 text-sm">
              لم يتم العثور على سؤال مطابق. يسعدنا الإجابة على أي استفسار عند تواصلك معنا مباشرة.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
