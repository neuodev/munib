import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
       <nav className="nav__bar bg-background shadow-xl h-25 flex justify-center items-center">
        <div className="container mx-auto flex justify-between items-center ">
            <Image src="/assets/Munib_BG_White.svg" alt="Logo" width={200} height={200} className="p-5" />
            <ul className="flex space-x-4 text-center">
              <li><a href="#" className="text-main hover:text-gray-200 font-bold">الرئيسية</a></li>
              <li><a href="#" className="text-main hover:text-gray-200 font-bold">لماذ نحن</a></li>
              <li><a href="#" className="text-main hover:text-gray-200 font-bold ">الآراء</a></li>
              <li><a href="#" className="text-main hover:text-gray-200 font-bold">الخطط</a></li>
              <li><a href="#" className="text-main hover:text-gray-200 font-bold">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-main hover:text-gray-200 font-bold">تواصل معنا</a></li>
            </ul>
            <button className="bg-background text-foreground px-4 py-2 rounded-md cursor-pointer flex items-center justify-between">
              <h4>العربية</h4>
              <span><Image src={"./assets/Language.svg"} alt='Language-icon' width={40} height={40}></Image></span>
            </button>
        </div>
        </nav>  
    );
}

export default Navbar;
