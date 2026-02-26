'use client';
import Image from 'next/image';
import {useLocale} from 'next-intl';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

const SimpleNavbar = () => {
    const locale = useLocale();
    const router = useRouter();

    const toggleLanguage = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        router.push(`/${newLocale}/founder`);
    };

    return (
       <nav className="nav__bar fixed w-full z-10 bg-background shadow-xl flex justify-center items-center py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link href={`/${locale}`}>
              <Image src="/assets/Munib_BG_White.svg" alt="Logo" width={150} height={150} className="md:w-[200px] cursor-pointer" />
            </Link>
            
            <button onClick={toggleLanguage} className="bg-background text-main px-3 py-2 md:px-4 rounded-md cursor-pointer flex items-center gap-2 border border-main hover:bg-main hover:text-white transition-all">
              <h4 className="font-bold text-sm md:text-base">{locale === 'ar' ? 'العربية' : 'English'}</h4>
              <Image src="/assets/Language.svg" alt='Language-icon' width={20} height={20} className="md:w-6 md:h-6" />
            </button>
        </div>
        </nav>  
    );
}

export default SimpleNavbar;
