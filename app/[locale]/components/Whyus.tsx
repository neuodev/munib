import Image from "next/image";

const Whyus = () => {
    const cards = [
        {
            icon: "/assets/Teachers.svg",
            title: "معلمون ذوو خبرة",
            description: "نخبة من المعلمين والمعلمات, مع خبرة في التعامل مع مختلف الأعمار والمستويات."
        },
        {
            icon: "/assets/Lectures.svg",
            title: "مناهج تعليمية مبتكرة",
            description: "نستخدم أساليب تفاعلية وإبداعية لتسهيل الحفظ والمراجعة، بعيداً عن الطرق التقليدية"
        },
        {
            icon: "/assets/Time.svg",
            title: "مرونة في الأوقات",
            description: "اختر الأوقات التي تناسبك صباحاً أو مساءً تعلم من راحة منزلك."
        },
        {
            icon: "/assets/Feedback.svg",
            title: "متابعة دورية",
            description: "يحصل كل طالب على خطة مخصصة ومتابعة مستمرة من معلمه لضمان أفضل النتائج."
        }
    ];

    return (
    <section>
        <h1 className="title">لماذا نحن</h1>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10 p-6 md:p-10 lg:p-15 lg:max-w-7xl xl:max-w-8xl">
            {cards.map((card, index) => (
                <div key={index} className="card mx-auto flex-1  max-w-75 flex flex-col justify-center items-center text-center gap-1">
                    <Image src={card.icon} alt={card.title} width={100} height={100}/>
                    <h1 className="text-xl font-extrabold text-main">{card.title}</h1>
                    <p className="text-gtext font-medium text-sm">{card.description}</p>
                </div>
            ))}
        </div>
    </section>
    );
}

export default Whyus;
