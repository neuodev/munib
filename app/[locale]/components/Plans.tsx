import { Check, ArrowLeft } from "lucide-react";

const plans = [
{
    name: "باقة الإتقان",
    price: "85",
    featured: false,
    features: [
    "12 حصص في الشهر (3 أسبوعياً)",
    "معلمون متخصصون ومعتمدون",
    "خطة متابعة مخصصة",
    "تقرير أداء أسبوعي",
    "تواصل مباشر مع المعلم",
    "تسجيلات فيديو لجميع الحصص",
    ],
},
{
    name: "باقة مُنيب",
    price: "60",
    featured: true,
    features: [
    "8 حصص في الشهر (حصتان أسبوعياً)",
    "معلمون متخصصون ومعتمدون",
    "خطة متابعة مخصصة",
    "تقرير أداء كل أسبوعين",
    "تواصل مباشر مع المعلم",
    "تسجيلات فيديو لجميع الحصص",
    ],
},
{
    name: "باقة السكينة",
    price: "45",
    featured: false,
    features: [
    "4 حصص في الشهر (حصة أسبوعياً)",
    "معلمون متخصصون ومعتمدون",
    "خطة متابعة مخصصة",
    "تقرير أداء شهري",
    "تواصل مباشر مع المعلم",
    ],
},
];

export default function Plans() {
return (
    <section className="py-16 px-4">
         <h1 className="title mb-8 text-center">
            الخطط والأسعار
          </h1>
    <div dir="rtl" className="max-w-7xl mx-auto py-10">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end justify-items-center">
        {plans.map((plan) => (
            <div
            key={plan.name}
            className={`rounded-2xl p-6 w-full max-w-sm flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.featured ? 'md:-translate-y-5' : ''}`}
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
            className="text-3xl font-extrabold text-right mb-1"
            style={{ color: plan.featured ? "#fff" : "#0D5466" }}
            >
            {plan.name}
            </h2>

            {/* Price label */}
            <p
            className="text-sm text-right mb-1"
            style={{ color: plan.featured ? "rgba(255,255,255,0.75)" : "#888" }}
            >
            للشخص
            </p>

            {/* Price */}
            <p
            className="text-4xl font-extrabold text-right mb-6"
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
            <ul dir="rtl" className="flex flex-col gap-3 mb-8 flex-1 justify-start items-start">
            {plan.features.map((feature) => (
                <li
                key={feature}
                className="flex flex-row-reverse items-center gap-3 text-right text-[15px] font-medium"
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
            أختر الخطة
            <ArrowLeft size={16} strokeWidth={2.5} />
            </button>
            <p className="text-center pt-2 font-bold text-sm">
                        يوجد في أي وقت استرجاع المال</p>
        </div>
        ))}
    </div>
    </div>
</section>
);
}