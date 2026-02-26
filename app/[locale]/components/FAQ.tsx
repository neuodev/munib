"use client";

import { useState } from "react";
import {useTranslations, useLocale} from 'next-intl';

export default function FAQ() {
  const t = useTranslations('faq');
  const locale = useLocale();
  const questions = t.raw('questions') as Array<{q: string; a: string}>;
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className=" bg-gray-50 flex items-center justify-center px-4 py-20"
    >
      <style>{`
        .faq-item {
          transition: box-shadow 0.25s ease, background 0.25s ease;
        }
        .faq-item:hover {
          box-shadow: 0 4px 24px 0 rgba(0,0,0,0.07);
        }
        .faq-answer {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease;
        }
        .icon-btn {
          transition: transform 0.3s ease, background 0.2s;
        }
      `}</style>

      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
            <h1 className="title">{t('title')}</h1>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {questions.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`faq-item rounded-2xl border cursor-pointer select-none ${
                  isOpen
                    ? "bg-white border-gray-200 shadow-md"
                    : "bg-white border-gray-100"
                }`}
                onClick={() => toggle(i)}
              >
                <div className={`flex items-center justify-between gap-4 px-5 py-4 ${locale === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <span
                    className={`text-base font-semibold flex-1 ${locale === 'ar' ? 'text-right' : 'text-left'} ${
                      isOpen ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`icon-btn shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
                      isOpen
                        ? "bg-second text-white rotate-45"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    +
                  </span>
                </div>

                <div
                  className="faq-answer"
                  style={{
                    maxHeight: isOpen ? "300px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className={`px-5 pb-5 text-sm text-gray-500 leading-relaxed ${locale === 'ar' ? 'text-right' : 'text-left'}`}>
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}