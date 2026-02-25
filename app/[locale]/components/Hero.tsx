import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="hero__section bg-main">
            <div className="h-[calc(100vh-100px)] w-full bg-main scroll-pt-12.5 flex justify-center items-center flex-col ">
                <h1 className="font-bold text-white text-center text-5xl w-100 leading-15">اجعل القرآن ربيع قلبك مع 
                    <span className="hero__highlight"> مُنيــــب </span>
                </h1>
                <Image src={"/assets/Line-Hero.svg"} alt="Title line" height={320} width={320} className="mt-5"></Image>
                <p className="text-white font-bold w-[400] text-center ">انضم إلى آلاف الطلاب الذين بدأوا رحلتهم معنا. معلمين متخصصين، ومناهج مبتكرة، ومتابعة شخصية</p>
                <div className="btns flex gap-2 mt-2 ">
                    <Link href={"#"} className="bg-white hover:bg-third  transition-all px-6 py-3 text-main font-bold rounded">تواصل معنا</Link>
                    <Link href={"#"} className=" text-white px-5 py-3 font-bold rounded">تصفح خططنا</Link>
                </div>
            </div>
        </section>
    );
}

export default Hero;
