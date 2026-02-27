'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";

const VideoSection = () => {
    const t = useTranslations();
    
    return (
        <section className="bg-main video__section">
                <h1 className="title__white text-white pt-10 text-lg mb-1">{t('video.title')} <span className="text-third"></span></h1>
                <div className="container mx-auto p-2 max-w-7xl ">
                    <div className="video__box px-2 py-2">
                        <video className="rounded-2xl border-2 border-white" src="/assets/Munib-Video.mp4" controls preload="true"></video>
                    </div>
                    <Link href={"/founder"} className="bg-white rounded font-bold px-10 py-5 block w-fit my-5 text-center mx-auto text-main hover:bg-third hover:text-white transition-all ">{t('video.infoBtn')}</Link>
                </div>
        </section>
    );
}

export default VideoSection;
