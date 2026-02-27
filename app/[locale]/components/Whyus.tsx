import Image from "next/image";
import {useTranslations} from 'next-intl';

const Whyus = () => {
    const t = useTranslations('whyus');
    const nav = useTranslations('nav');
    
    const cards = [
        {
            icon: "/assets/Teachers.svg",
            title: t('teachers'),
            description: t('teachersDesc')
        },
        {
            icon: "/assets/Lectures.svg",
            title: t('curriculum'),
            description: t('curriculumDesc')
        },
        {
            icon: "/assets/Time.svg",
            title: t('flexibility'),
            description: t('flexibilityDesc')
        },
        {
            icon: "/assets/Feedback.svg",
            title: t('followup'),
            description: t('followupDesc')
        }
    ];

    return (
    <section>
        <h1 className="title">{nav('why')}</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 p-6 md:p-10 lg:p-15 lg:max-w-7xl xl:max-w-8xl">
            {cards.map((card, index) => (
                <div key={index} className="card mx-auto flex-1  max-w-75 flex flex-col text-main hover:text-second  transition-all justify-center items-center text-center gap-1">
                    <Image src={card.icon} alt={card.title} width={100} height={100} className="hover:scale-105 transition-all"/>
                    <h1 className="text-xl font-extrabold ">{card.title}</h1>
                    <p className="text-gtext font-medium text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Whyus;
