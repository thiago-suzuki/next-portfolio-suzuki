"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { technologiesUser } from "@/data";

export function Experience() {
    const t = useTranslations('Pages.Experience')
    
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
            <div className="text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div className="flex justify-center">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                                    {technologiesUser.map((value, index) => {
                                        return (
                                            <div className="flex flex-col items-center" key={'tech ' + index}>
                                                <div className="relative w-24 h-24">
                                                    <div className="w-24 h-24 rounded-full bg-[#364153] flex items-center justify-center">
                                                        <Image
                                                            src={value.icon}
                                                            alt={value.description}
                                                            width={55}
                                                            height={55}
                                                        />
                                                    </div>
                                                </div>
                                                <p className="text-primary-500 text-xl font-bold mt-2">{value.description}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Description */}
                            <div className="text-gray-400">
                                <p className="mb-6 leading-relaxed">
                                    A software engineer, the modern-day architect of digital realms, navigates the
                                    ethereal landscapes of code, sculpting intangible structures that shape our
                                    technological world. With fingers poised over keyboards like virtuoso pianists, they
                                    compose symphonies of logic, their minds a labyrinth of algorithms and
                                    solutions.Their canvas is a screen, a vast expanse where lines of code dance in
                                    intricate patterns, weaving the fabric of programs and applications. Each keystroke
                                    is a brushstroke, crafting intricate architectures and breathing life into
                                    innovative designs.In this digital atelier, they don the mantle of problem solvers,
                                    confronting bugs and glitches like valiant knights in an ever-evolving quest for
                                    perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden
                                    within the tangled webs of code. designs.In this digital atelier.
                                </p>

                                <button className="border border-gray-600 text-white px-6 py-2 rounded-md hover:border-orange-500 hover:bg-orange-500/10 transition">
                                Download CV
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}