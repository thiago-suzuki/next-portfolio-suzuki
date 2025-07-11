"use client"

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Home() {
    const t = useTranslations("Pages.Global.Content");
    
    return (
        <motion.div 
            className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 relative"
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
            {/* Content */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
                <div className="text-center lg:text-left">
                    <p className="text-gray-300">{t('hello')}</p>
                    <h2 className="text-xl font-semibold text-gray-200">Thiago Suzuki</h2>
                    <h1 className="text-4xl sm:text-5xl font-bold ext-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-500">
                    {t('work')}
                    </h1>
                </div>

                <div className="flex justify-center lg:justify-start space-x-4">
                    <a
                        href="#"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition"
                    >
                        <FaGithub />
                    </a>
                </div>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md transition duration-300">
                        Contact me
                    </button>
                    <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                        Download CV
                    </button>
                </div>

                <div className="flex flex-row divide-x divide-gray-800 border-t border-gray-800 pt-5 overflow-x-auto">
                    <div className="flex-shrink-0 pr-6">
                        <h3 className="text-2xl font-bold text-orange-500">5+</h3>
                        <p className="text-gray-400 text-sm">Experiences</p>
                    </div>
                    <div className="flex-shrink-0 px-6">
                        <h3 className="text-2xl font-bold text-orange-500">20+</h3>
                        <p className="text-gray-400 text-sm">Project done</p>
                    </div>
                    <div className="flex-shrink-0 pl-6">
                        <h3 className="text-2xl font-bold text-orange-500">80+</h3>
                        <p className="text-gray-400 text-sm">Happy Clients</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7 flex justify-center lg:justify-end">
                <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px]">
                    <div className="absolute inset-0 bg-gray-900 rounded-full"></div>
                        <img
                            src="https://github.com/thiago-suzuki.png"
                            alt="Professional man in black suit"
                            className="absolute inset-0 w-full h-full object-cover object-center rounded-full"
                        />
                    </div>
            </div>
      </motion.div>
    )
}