import {useTranslations, useLocale} from 'next-intl';
import Image from 'next/image';

export default function Founder() {
  const t = useTranslations('founder');
  const locale = useLocale();
  
  const sections = [
    {
      id: "hifz",
      icon: "/assets/hifz.svg",
      title: t('hifz.title'),
      items: t.raw('hifz.items') as string[],
    },
    {
      id: "tajweed",
      icon: "/assets/tajweed.svg",
      title: t('tajweed.title'),
      items: t.raw('tajweed.items') as string[],
    },
    {
      id: "qiraat",
      icon: "/assets/qiraat.svg",
      title: t('qiraat.title'),
      items: t.raw('qiraat.items') as string[],
    },
    {
      id: "languages",
      icon: "/assets/languages.svg",
      title: t('languages.title'),
      items: t.raw('languages.items') as string[],
    },
    {
      id: "activities",
      icon: "/assets/Activites.svg",
      title: t('activities.title'),
      items: t.raw('activities.items') as string[],
    },
  ];

  return (
    <section className="min-h-screen bg-white py-16 px-4" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="bg-main h-75 flex justify-center items-center text-white py-16 px-6 rounded-3xl mb-12 max-w-6xl mx-auto">
        <div className="text-center min-h-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 relative left-20 md:left-35 top-5 text-third">{t('title')}</h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3">{t('name')}</h1>
          <p className="text-white/90 text-lg">{t('subtitle')}</p>
        </div>
      </div>

      {/* Sections Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-6">
        <div className='text-center max-w-160 mx-auto'>
            <span className='text-second text-2xl font-black sm:ms-[-350]'>{t('teacher')} </span>
            <h1 className='text-main text-4xl font-black'> {t('fullName')} <span className='text-sm'>{t('nickname')}</span> </h1>
            <p className='text-md text-gtext mt-2'>{t('description')}</p>
        </div>
        {sections.map((section) => (
          <div
            key={section.id}
            className="bg-white rounded-2xl p-6 border border-main/10 hover:border-third hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Section Header */}
            <div className={`flex items-center gap-3 mb-5 transition-all ${locale === 'ar' ? '' : 'flex-row-reverse'}`}>
              <div className="w-12 h-12 bg-main hover:bg-second transition-all rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-md">
                <Image className='p-3' src={section.icon} alt={section.id} width={50} height={50}/>
              </div>
              <h3 className="text-xl font-bold text-main">{section.title}</h3>
            </div>

            {/* Items */}
            <ul className="space-y-3">
              {section.items.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 text-gtext text-sm font-medium leading-relaxed ${locale === 'ar' ? '' : 'flex-row-reverse text-left'}`}>
                  <span className={`w-2 h-2 bg-main rounded-full mt-2 shrink-0 ${locale === 'ar' ? '' : 'order-first'}`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
