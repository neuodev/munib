"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      dir="rtl"
      className=" bg-white flex items-center justify-center px-4 py-20 ">
      <style>{`

        .input-field {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        .input-field:focus {
          border-color: var(--color-main);
        }
        .contact-card {
          transition: box-shadow 0.25s ease, transform 0.2s ease;
        }
        .contact-card:hover {
          box-shadow: 0 6px 28px 0 rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .submit-btn {
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
        }
        .submit-btn:hover {
          background: var(--color-second);
          box-shadow: 0 4px 16px rgba(245,158,11,0.35);
          transform: translateY(-1px);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
      `}</style>

      <section className="w-full max-w-6xl flex justify-center items-center flex-col">
        <h1 className="title">تواصل معنا</h1>
        {/* Form Card */}
        <div className="container flex justify-between  items-center gap-10 flex-col md:flex-row">

        <div className="image">
            <Image src={"/assets/Contactus.svg"} alt="Contact us" height={350} width={350} className="max-w-500"/>
        </div>
        {!submitted ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 grow w-full">
            <form onSubmit={submit} className="flex flex-col gap-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    الاسم الكامل <span className="text-second">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="أدخل اسمك"
                    value={form.name}
                    onChange={handle}
                    className="input-field bg-[#f7f6f2] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    البريد الإلكتروني <span className="text-second">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handle}
                    className="input-field bg-[#f7f6f2] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                    style={{ direction: "ltr", textAlign: "right" }}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  الموضوع <span className="text-second">*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handle}
                  className="input-field bg-[#f7f6f2] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 appearance-none"
                >
                  <option value="" disabled>اختر موضوع رسالتك</option>
                  <option value="support">الدعم الفني</option>
                  <option value="billing">الاشتراكات والدفع</option>
                  <option value="teachers">استفسار عن المعلمين</option>
                  <option value="other">أخرى</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  رسالتك <span className="text-main">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="اكتب رسالتك هنا..."
                  value={form.message}
                  onChange={handle}
                  className="input-field bg-[#f7f6f2] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="submit-btn bg-main text-white font-bold text-base rounded-xl py-3.5 mt-1 cursor-pointer"
              >
                إرسال الرسالة ←
              </button>
            </form>
          </div>
        ) : (
          /* Success State */
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-10 flex flex-col items-center gap-4 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-3xl">
              ✅
            </div>
            <h3 className="text-xl font-bold text-gray-900">تم إرسال رسالتك بنجاح!</h3>
            <p className="text-gray-500 text-sm max-w-sm">
              شكراً لتواصلك معنا. سيقوم فريقنا بمراجعة رسالتك والرد عليك في أقرب وقت ممكن.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
              className="mt-2 text-main font-semibold text-sm hover:underline cursor-pointer"
            >
              إرسال رسالة أخرى
            </button>
          </div>
        )}
                </div>
      </section>
    </div>
  );
}