'use client';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {useState} from 'react';

const Navbar = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleLanguage = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    return (
       <nav className="nav__bar bg-background shadow-xl flex justify-center items-center py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Image src="/assets/Munib_BG_White.svg" alt="Logo" width={150} height={150} className="md:w-[200px]" />
            
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-main">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>

            <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-20 md:top-0 left-0 right-0 bg-background md:bg-transparent gap-4 md:gap-6 p-4 md:p-0 shadow-lg md:shadow-none z-50`}>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('home')}</a></li>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('why')}</a></li>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('reviews')}</a></li>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('plans')}</a></li>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('faq')}</a></li>
              <li><a href="#" className="text-main hover:text-second font-bold block">{t('contact')}</a></li>
            </ul>
            
            <button onClick={toggleLanguage} className="bg-background text-main px-3 py-2 md:px-4 rounded-md cursor-pointer flex items-center gap-2 border border-main hover:bg-main hover:text-white transition-all">
              <h4 className="font-bold text-sm md:text-base">{t('language')}</h4>
              <Image src="/assets/Language.svg" alt='Language-icon' width={20} height={20} className="md:w-6 md:h-6" />
            </button>
        </div>
        </nav>  
    );
}

export default Navbar;
