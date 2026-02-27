"use client";

import Image from "next/image";
import { useState } from "react";
import {useTranslations, useLocale} from 'next-intl';

export default function ContactUs() {
  const t = useTranslations('contact');
  const plans = useTranslations('plans');
  const locale = useLocale();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      className=" bg-white flex items-center justify-center px-4 py-20 ">
      <style>{`

        .input-field {
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          outline: none;
        }
        .input-field:focus {
          border-color: var(--color-second);
          0 4px 16px rgb(16 151 135 / 55%)
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
          0 4px 16px rgb(16 151 135 / 100%);
          transform: translateY(-1px);
        }
        .submit-btn:active {
          transform: translateY(0);
        }
      `}</style>

      <section className="w-full max-w-6xl flex justify-center items-center flex-col">
        <h1 className="title">{t('title')}</h1>
        {/* Form Card */}
        <div className="container flex justify-between  items-center gap-10 flex-col md:flex-row">

        <div className="image">
            <Image src={"/assets/Contactus.svg"} alt="Contact us" height={350} width={350} className="max-w-500"/>
        </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8 grow w-full">
            <form className="flex flex-col gap-4">
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-gray-700">
                    {t('name')} <span className="text-second">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder={t('name')}
                    value={form.name}
                    onChange={handle}
                    className="input-field bg-[##0eb69d08] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                  />
                </div>
                <div className="flex flex-col gap-1.5" dir="auto">
                  <label className="text-sm font-semibold text-gray-700" dir="auto">
                    {t('email')} <span className="text-second">*</span>
                  </label>
                  <input
                  dir="auto"
                    name="email"
                    type="email"
                    required
                    placeholder="example@email.com"
                    value={form.email}
                    onChange={handle}
                    className="input-field bg-[##0eb69d08] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  {t('package')} <span className="text-second">*</span>
                </label>
                <select
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handle}
                  className="input-field bg-[##0eb69d08] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 appearance-none"
                >
                  <option value="" disabled>{t('selectPackage')}</option>
                  <option value="munib">{plans('munib.name')}</option>
                  <option value="serenity">{plans('serenity.name')}</option>
                  <option value="mastery">{plans('mastery.name')}</option>
                </select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-gray-700">
                  {t('message')} <span className="text-main">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={t('message')}
                  value={form.message}
                  onChange={handle}
                  className="input-field bg-[##0eb69d08] rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="submit-btn bg-main text-white font-bold text-base rounded-xl py-3.5 mt-1 cursor-pointer"
              >
                {t('send')} ←
              </button>
            </form>
          </div>
                </div>
      </section>
    </div>
  );
}