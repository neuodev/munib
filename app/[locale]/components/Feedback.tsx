import Image from "next/image";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `Je m'appelle Jamila et j'habite en France. Je prends des cours de mémorisation avec la soeur Sarah depuis quelques mois et je trouve que je m'améliore de plus en plus. la soeur Sarah est très douce à l'écoute et m'encourage à aller en avant. Baraka Allah fiki.`,
    isRTL: false
  },
  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `أستاذة سارة.. أحبك جدا في الله وأتمنى أن يكون حبي لك سببا في أن يشملنا الله في ظله يوم لا ظل إلا ظله. حضرتك من الأشخاص الملتزمين جدا بالمواعيد والساعين إلى الخير والاستكثار من العلم النافع، على قدر كبير من التواضع ومن يتعامل معك بألفك وكأنه معك من زمن بعيد، لا تبخلين بعلمك ووقتك على من يحتاج... لا تنسي أبدا من له عليك ولو مثقال ذرة من فضل، ودائما ما تدعين الله عز وجل لأحبابك ومن لهم حق عليك.`,
    isRTL: true
  },
  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `بفضل الله وحده ثم معلمتي سارة تلاوتي اتحسنت جدًا بعد ما كان عندي أخطاء ولحون كثيرة وأخذت على أستاذة سارة إجازة بروايتي شعبة وحفص عن عاصم، وهي الآن تعلمني رواية ابن كثير من طريق الشاطبية. لما كنت أخطئ في حكم أو كلمة صعبة أعيد عليها وتصحح لي بكل صبر.`,
    isRTL: true
  },
  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `أستاذة سارة ممتازة جدا في التجويد، ومخارج الحروف لديها واضحة، وطريقتها في التعليم ممتازة، و أخلاقها عالية جدا.`,
    isRTL: true
  },
  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `جزاكم الله خير يا أ/ ساره ع جهودكم وعملكم، اللهم بارك اسلوبك في الشرح ممتاز ويسير، ربنا يتقبل منكم ويبارك فيكم.`,
    isRTL: true
  },

  {
    name: "طالبة مُنيب",
    location: "السعودية",
    rating: 5,
    text: `أستاذة سارة شخصية مهذبة قيادية طموحة ذكية لديها طاقة وهمة عالية للتعلم والتعليم حافظة جامعة متقنة لما تعلمته من كتاب الله. تمتلك المهارة وحب التطوير والتعلم فيما يخدم علمها وفقها الله وبارك بها وبمن علمها.`,
    isRTL: true
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mt-3">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          fill={star <= rating ? "#FCD34D" : "#E0E0E0"}
          strokeWidth={0}
          className="w-5 h-5"
        />
      ))}
    </div>
  );
}

function ReviewCard({ name, location, rating, text, isRTL }: (typeof reviews)[0]) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow duration-300 h-fit">
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center  border border-second">
            <Image src={"/assets/Niqab-icon.svg"} alt="Women icon" width={50} height={50} className="w-5"></Image>
          </div>
          <span className="font-bold text-gray-800 text-sm">{name}</span>
        </div>
        <span className="text-gray-500 text-sm font-medium">{location}</span>
      </div>

      <p className={`text-gray-600 text-sm leading-relaxed grow ${isRTL ? 'text-right' : 'text-left'}`} dir={isRTL ? 'rtl' : 'ltr'}>{text}</p>

      <div className="text-center flex justify-center flex-col items-center mt-auto">
        <p className="text-xs text-gray-400 mt-2" dir="rtl">التقييم</p>
        <StarRating rating={rating} />
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16 px-4" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="title">
            آراء طلابنا
          </h1>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {reviews.map((review, i) => (
            <div key={i} className="break-inside-avoid mb-6">
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}