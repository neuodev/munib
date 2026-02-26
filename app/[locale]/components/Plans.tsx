import { Check, ArrowLeft } from "lucide-react";
import {useTranslations, useLocale} from 'next-intl';

export default function Plans() {
const t = useTranslations('plans');
const locale = useLocale();

const plans = [
{
    name: t('mastery.name'),
    price: "85",
    featured: false,
    features: t.raw('mastery.features') as string[],
},
{
    name: t('munib.name'),
    price: "60",
    featured: true,
    features: t.raw('munib.features') as string[],
},
{
    name: t('serenity.name'),
    price: "45",
    featured: false,
    features: t.raw('serenity.features') as string[],
},
];

return (
    <section className="py-16 px-4">
         <h1 className="title mb-8 text-center">
            {t('title')}
          </h1>
    <div dir={locale === 'ar' ? 'rtl' : 'ltr'} className="max-w-7xl mx-auto py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end justify-items-center">
        {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-6 w-full max-w-sm flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'md:-translate-y-5' : ''} ${locale === 'ar' ? 'text-right' : 'text-left'}`}
            style={
                plan.featured
                ? {
                    backgroundColor: "#129786",
                    color: "#fff",
                    boxShadow: "0 20px 50px rgba(18,151,134,0.35)",
                } 
                : {
                    backgroundColor: "#fff",
                    color: "#1a1a1a",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
                }
            }
            >
            {/* Title */}
            <h2
            className={`text-3xl font-extrabold mb-1 ${locale === 'ar' ? 'text-right' : 'text-left'}`}
            style={{ color: plan.featured ? "#fff" : "#0D5466" }}
            >
            {plan.name}
            </h2>

            {/* Price label */}
            <p
            className={`text-sm mb-1 ${locale === 'ar' ? 'text-right' : 'text-left'}`}
            style={{ color: plan.featured ? "rgba(255,255,255,0.75)" : "#888" }}
            >
            {t('perPerson')}
            </p>

            {/* Price */}
            <p
            className={`text-4xl font-extrabold mb-6 ${locale === 'ar' ? 'text-right' : 'text-left'}`}
            style={{ color: plan.featured ? "#fff" : "#0D5466" }}
            >
            € {plan.price}
            </p>

            {/* Divider */}
            <div
            className="h-px mb-6"
            style={{
                backgroundColor: plan.featured
                ? "rgba(255,255,255,0.25)"
                : "#e5eaec",
            }}
            />

            {/* Features */}
            <ul dir={locale === 'ar' ? 'rtl' : 'ltr'} className="flex flex-col gap-3 mb-8 flex-1 justify-start items-start">
            {plan.features.map((feature) => (
                <li
                key={feature}
                className={`flex flex-row-reverse items-center gap-3 ${locale === 'ar' ? 'text-right' : 'text-left'} text-[15px] font-medium`}
                style={{ color: plan.featured ? "#fff" : "#333" }}
                >
                    <span>{feature}</span>
                <span
                    className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{
                        backgroundColor: plan.featured
                        ? "rgba(255,255,255,0.25)"
                        : "#0DB59D",
                    }}
                    >
                    <Check
                    size={13}
                    strokeWidth={2.8}
                    color="#fff"
                    />
                </span>
                </li>
            ))}
            </ul>

            {/* CTA Button */}
            <button
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-base font-bold transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            style={
                plan.featured
                ? {
                    backgroundColor: "#fff",
                    color: "#129786",
                }
                : {
                    backgroundColor: "#129786",
                    color: "#fff",
                }
            }
            >
            {t('choosePlan')}
            <ArrowLeft size={16} strokeWidth={2.5} />
            </button>
            <p className="text-center pt-2 font-bold text-sm">
                        {t('moneyBack')}</p>
        </div>
        ))}
    </div>
    </div>
</section>
);
}