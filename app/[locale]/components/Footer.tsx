import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full bg-main flex flex-col justify-center items-center pt-9">
                <Image src={"/assets/Munib_BG_Dark.svg"} alt="Logo in footer" height={300} width={300} className="p-4" />
                <ul className="flex flex-wrap text-white gap-4 pb-5">
                    <li>الرئيسية</li>
                    <li>لماذا نحن</li>
                    <li>الآراء </li>
                    <li>الخطط</li>
                    <li>الآسئلةالشائعة </li>
                    <li>عن المؤسسة</li>
                </ul>
                <Link href="https://mersal.top/" className="block w-fit bg-third py-7 px-10 rounded-t-2xl text-white font-bold hover:bg-white hover:text-main transition-all" >Designed & Developed by Mersal</Link>
        </footer>
    );
}

export default Footer;
