'use client';
import Image from 'next/image';
import {useTranslations, useLocale} from 'next-intl';
import {useRouter, usePathname} from 'next/navigation';
import {useState, useEffect} from 'react';
import Link from 'next/link';

const Navbar = () => {
    const t = useTranslations('nav');
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const sections = ['home', 'why', 'reviews', 'plans', 'faq', 'contact'];

    // ✅ Intersection Observer - يتتبع الـ section الظاهرة تلقائياً
    useEffect(() => {
        const sections = ['home', 'why', 'reviews', 'plans', 'faq', 'contact'];
        const observers: IntersectionObserver[] = [];

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (!element) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(id);
                    }
                },
                { threshold: 0.4 } // لما 40% من الـ section تبان → يتفعل
            );

            observer.observe(element);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    const toggleLanguage = () => {
        const newLocale = locale === 'ar' ? 'en' : 'ar';
        const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
        router.push(newPath);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
            // مش محتاج تضبط activeSection هنا، الـ Observer هيعملها تلقائياً
        }
    };

    return (
       <nav className="nav__bar bg-background shadow-xl flex justify-center items-center py-4 sticky top-0 z-50">
        <style>{`
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes slideUp {
            from {
              opacity: 1;
              transform: translateY(0);
            }
            to {
              opacity: 0;
              transform: translateY(-10px);
            }
          }
          
          @keyframes rotateOpen {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(180deg);
            }
          }
          
          .burger-menu-open {
            animation: slideDown 0.3s ease-out forwards;
          }
          
          .burger-menu-close {
            animation: slideUp 0.3s ease-out forwards;
          }
          
          .burger-icon {
            transition: all 0.3s ease;
          }
          
          .burger-icon.open {
            animation: rotateOpen 0.3s ease forwards;
          }
        `}</style>
        
        <div className="container mx-auto flex justify-between items-center px-4">
            <Link href={`/${locale}`}>
              <Image src="/assets/Munib_BG_White.svg" alt="Logo" width={150} height={150} className="w-[120px] md:w-[150px] lg:w-[200px] cursor-pointer" />
            </Link>
            
            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center">
              {sections.map((section, i) => (
                <li key={section} className="flex items-center">
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`font-bold cursor-pointer transition-colors px-2 ${
                      activeSection === section
                        ? 'text-second'          
                        : 'text-main hover:text-second'
                    }`}
                  >
                    {t(section)}
                  </button>
                  {i !== sections.length - 1 && (
                    <span className="hidden lg:inline-block w-px h-6 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-3" aria-hidden />
                  )}
                </li>
              ))}
            </ul>
            
            {/* Desktop Language Button */}
            <button onClick={toggleLanguage} className="hidden lg:flex bg-background text-main px-4 py-2 rounded-md cursor-pointer items-center gap-2 border border-main hover:bg-main hover:text-white transition-all">
              <h4 className="font-bold text-base">{t('language')}</h4>
              <Image src="/assets/Language.svg" alt='Language-icon' width={20} height={20} />
            </button>
            
            {/* Burger Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-main cursor-pointer"
            >
              <svg className="burger-icon w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'}}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`absolute top-full left-0 right-0 bg-background shadow-lg flex flex-col gap-0 p-4 lg:hidden burger-menu-open`}>
            {sections.map((section, i) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`font-bold block w-full ${locale === 'ar' ? 'text-right' : 'text-left'} cursor-pointer py-3 transition-colors ${
                    activeSection === section
                      ? 'text-second'          
                      : 'text-main hover:text-second'
                  }`}
                >
                  {t(section)}
                </button>
                {i !== sections.length - 1 && (
                  <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-1" aria-hidden />
                )}
              </li>
            ))}
            
            {/* Language Button in Mobile Menu */}
            <li className="border-t border-gray-200 pt-4 mt-2">
              <button 
                onClick={toggleLanguage} 
                className="w-full bg-background text-main px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 border border-main hover:bg-main hover:text-white transition-all justify-center"
              >
                <h4 className="font-bold text-base">{t('language')}</h4>
                <Image src="/assets/Language.svg" alt='Language-icon' width={20} height={20} />
              </button>
            </li>
          </ul>
        )}
        </nav>  
    );
}

export default Navbar;