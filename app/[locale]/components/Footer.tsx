'use client';
import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";

const Footer = () => {
    const locale = useLocale();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navItems = [
        { label: 'الرئيسية', id: 'home' },
        { label: 'لماذا نحن', id: 'why' },
        { label: 'الآراء', id: 'reviews' },
        { label: 'الخطط', id: 'plans' },
        { label: 'الأسئلة الشائعة', id: 'faq' },
    ];

    return (
        <footer className="w-full bg-main flex flex-col justify-center items-center pt-9">
            <Link href={"/"}>
            <Image src={"/assets/Munib_BG_Dark.svg"} alt="Logo in footer" height={300} width={300} className="mb-10" />
            </Link>
            <ul className="flex flex-wrap text-white gap-4 pb-10 justify-center">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => scrollToSection(item.id)}
                            className="cursor-pointer hover:text-third transition-colors font-medium"
                        >
                            {item.label}
                        </button>
                    </li>
                ))}
                <li>
                    <Link
                        href={`/${locale}/founder`}
                        className="cursor-pointer hover:text-third transition-colors font-medium"
                    >
                        عن المؤسسة
                    </Link>
                </li>
            </ul>
            <Link href="https://mersal.top/" className="block w-fit bg-third py-7 px-10 rounded-t-2xl text-white font-bold hover:bg-white hover:text-main transition-all">
                Designed & Developed by Mersal
            </Link>
        </footer>
    );
}

export default Footer;