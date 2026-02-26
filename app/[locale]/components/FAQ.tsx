"use client";

import { useState } from "react";

const faqs = [
  {
    question: "هل المعلمون رجال أم نساء؟",
    answer:
      "لدينا معلمون ومعلمات متخصصون، ويمكنك اختيار ما يناسبك عند الحجز وفقاً لتفضيلاتك الشخصية.",
  },
  {
    question: "هل يمكنني تجربة الخدمة قبل الاشتراك؟",
    answer:
      "نعم بالتأكيد! نحن نوفر حصة تجريبية مجانية بالكامل مدتها 20 دقيقة. يمكنك من خلالها التعرف على المعلم، وتجربة طريقتنا في التدريس، وتحديد مستواك، قبل اتخاذ قرار الاشتراك.",
  },
  {
    question: "كيف يتم تحديد مستواي واختيار المنهج المناسب لي؟",
    answer:
      "نُجري اختباراً تحديدياً قصيراً عند تسجيلك، ثم يقوم المعلم بتقييم مستواك خلال الحصة الأولى لاختيار المنهج الأنسب لأهدافك.",
  },
  {
    question: "ماذا لو احتجت لإلغاء حصة أو تغيير موعدها؟",
    answer:
      "يمكنك إلغاء أو إعادة جدولة حصتك بسهولة من لوحة التحكم الخاصة بك، وذلك قبل 12 ساعة على الأقل من موعد الحصة دون أي رسوم.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل البطاقات الائتمانية (Visa, Mastercard)، والدفع عبر Apple Pay وGoogle Pay، بالإضافة إلى التحويل البنكي.",
  },
  {
    question: "هل يمكنني تغيير الباقة بعد الاشتراك؟",
    answer:
      "نعم، يمكنك الترقية أو تخفيض باقتك في أي وقت، وسيتم احتساب الفارق بشكل تناسبي.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div
      dir="rtl"
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
            <h1 className="title">الأسئلة الشائعة</h1>
        </div>

        {/* FAQ Items */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
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
                <div className="flex items-center justify-between gap-4 px-5 py-4">
                  <span
                    className={`text-base font-semibold ${
                      isOpen ? "text-gray-900" : "text-gray-700"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`icon-btn flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold ${
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
                  <p className="px-5 pb-5 text-sm text-gray-500 leading-relaxed">
                    {faq.answer}
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