import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Whatsapp = () => {
    return (
        <Link href={"https://mersal.top"} className="bg-main p-5 w-18 h-18 fixed z-100 bottom-4 transition-all right-4 flex justify-center items-center rounded-full hover:bg-third">
            <Image src={"/assets/Whatsapp.svg"} alt="whatsapp" width={50} height={50}/>
        </Link>
    );
}

export default Whatsapp;
