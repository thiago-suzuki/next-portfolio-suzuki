"use client"

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { Button } from "@/components";
import { 
    linkPdf,
    linkEmail,
    paragraphsAboutUser
} from "@/data";

export function About() {
    const locale = useLocale();
    const t = useTranslations('Pages.About')

    return (
        <motion.div 
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
        >
            <div className="text-white pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
                            <p className="text-gray-400">{t('subtitle')}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="flex justify-center">
                                <div className="w-full max-w-md bg-black rounded-lg overflow-hidden">
                                    <img
                                        src="/images/about-profile.jpg"
                                        alt="Professional portrait"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="text-gray-400">
                                <p className="mb-6 leading-relaxed">
                                    {paragraphsAboutUser.one[locale] || paragraphsAboutUser.one["pt-br"]}
                                </p>

                                <p className="mb-6 leading-relaxed">
                                    {paragraphsAboutUser.two[locale] || paragraphsAboutUser.two["pt-br"]}
                                </p>

                                <p className="mb-6 leading-relaxed">
                                    {paragraphsAboutUser.three[locale] || paragraphsAboutUser.three["pt-br"]}
                                </p>

                                <div className="flex justify-center items-center gap-3">
                                    <Link href={linkEmail} target="_blank">
                                        <Button className="bg-orange-500 hover:bg-orange-600 text-white text-[16px] px-6 py-6 rounded-md transition duration-300">
                                            <MdEmail size={16} /> {t('buttons.contact')}
                                        </Button>
                                    </Link>
                                    <Link href={linkPdf} target="_blank">
                                        <Button className="border border-gray-600 text-white text-[16px] px-6 py-6 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                                           <FaFilePdf size={16} /> {t('buttons.cv')}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}