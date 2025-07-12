"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";

import { 
    linkPdf,
    linkWP
} from "@/data";

export function About() {
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
            <div className="text-white py-8">
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
                                        src="https://images.unsplash.com/photo-1586528116493-a029325540fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                                        alt="Professional portrait"
                                        className="w-full h-auto"
                                    />
                                </div>
                            </div>

                            <div className="text-gray-400">
                                <p className="mb-6 leading-relaxed">
                                    {t('paragraphOne')}
                                </p>

                                <p className="mb-6 leading-relaxed">
                                    {t('paragraphTwo')}
                                </p>

                                <Link href={linkWP} target="_blank">
                                    <button className="mr-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300">
                                        {t('buttons.contact')}
                                    </button>
                                </Link>
                                <Link href={linkPdf} target="_blank">
                                    <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                                        {t('buttons.cv')}
                                    </button>
                                </Link>
                            </div>
                        </div>

                        {/* Skills Section */}

                    </div>
                </div>
            </div>
        </motion.div>
    )
}