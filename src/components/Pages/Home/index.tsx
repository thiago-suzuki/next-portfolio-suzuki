"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { 
    linkPdf,
    linkWP,
    metadatasUser, 
    socialMedias 
} from "@/data";

export function Home() {
    const t = useTranslations("Pages.Home");
    
    return (
        <motion.div 
            className="container mx-auto my-0 grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-0 relative"
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
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="text-center lg:text-left">
                    <p className="text-gray-300">{t('hello')}</p>
                    <h2 className="text-xl font-semibold text-gray-200">Thiago Suzuki</h2>
                    <h1 className="text-4xl sm:text-5xl font-bold ext-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                        {t('work')}
                    </h1>
                </div>

                <div className="flex justify-center lg:justify-start space-x-4">
                    {socialMedias.map((value, index) => {
                        return (
                            <a
                                key={'social ' + index}
                                href={value.url}
                                target="_blank"
                                className="w-14 h-14 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition"
                            >
                                {value.icon}
                            </a>
                        )
                    })}
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <Link href={linkWP} target="_blank">
                        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300">
                            {t('buttons.contact')}
                        </button>
                    </Link>
                    <Link href={linkPdf} target="_blank">
                        <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                            {t('buttons.cv')}
                        </button>
                    </Link>
                </div>

                <div className="flex flex-row divide-x divide-gray-800 border-t border-gray-800 pt-5 overflow-x-auto">
                    {metadatasUser.map((value, index) => {
                        return (
                            <div className="flex-shrink-0 px-6" key={'meta ' + index}>
                                <h3 className="text-2xl font-bold text-orange-500">{value.quantity}+</h3>
                                <p className="text-gray-400 text-sm">{t(`metadata.${value.description}`)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
                <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]">
                    <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                        <img
                            src="/images/profile.jpeg"
                            alt="Professional man in black suit"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-full"
                        />
                    </div>
            </div>
      </motion.div>
    )
}