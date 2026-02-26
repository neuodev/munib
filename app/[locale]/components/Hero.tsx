import Image from "next/image";
import Link from "next/link";
import {useTranslations} from 'next-intl';

const Hero = () => {
    const t = useTranslations('hero');
    
    return (
        <section className="hero__section bg-main">
            <div className="container__hero min-h-[calc(100vh-80px)] w-full bg-main flex justify-center items-center flex-col px-4 py-8 pt-20">
                <div className="flex flex-col justify-center items-center scale-80 md:scale-100 lg:scale-120 xl:scale-140">
                <h1 className="font-bold text-white text-center text-5xl  max-w-110 leading-15 ">
                    {t('title')} <span className="hero__highlight">{t('highlight')}</span>
                </h1>
                <Image src="/assets/Line-Hero.svg" alt="Title line" height={200} width={200} className="mt-5 md:w-[320px]" />
                <p className="text-white font-bold max-w-87.5 text-center text-sm mt-4">{t('description')}</p>
                <div className="btns flex gap-2 mt-3 ">
                    <Link href="#" className="bg-white  hover:bg-third hover:text-white transition-all  px-6 py-3 text-main font-bold rounded text-center">{t('contactBtn')}</Link>
                    <Link href="#" className="text-white hover:bg-white hover:text-main transition-all px-6 py-3 font-bold rounded text-center">{t('plansBtn')}</Link>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
