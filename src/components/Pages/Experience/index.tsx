"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

import { enterprisesUser, technologiesUser } from "@/data";

export function Experience() {
    const locale = useLocale();
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
            <div className="text-white pb-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold mb-2">{t('title')}</h1>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                            <div 
                                className={`flex justify-center ${enterprisesUser.length > 1 ? 'lg:max-h-[400px]' : 'lg:max-h-[100%]' }`}
                            >
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

                            <div className="block lg:hidden border-t border-gray-700 my-6" />

                            <div className="flex border-gray-700 lg:border-l lg:pl-8">
                                <div className="grid grid-cols-1 gap-8">
                                    {enterprisesUser.map((value, index) => {
                                        const isLast = index === enterprisesUser.length - 1;
                                        const hasMultiple = enterprisesUser.length > 1;

                                        return (
                                            <div 
                                                key={'enterprise ' + index}
                                                className={`pb-8 ${hasMultiple && !isLast ? 'border-b border-gray-700' : ''}`}
                                            >
                                                <div className="ml-[18px] flex items-center gap-4">
                                                    <Image
                                                        src={value.imageEnterprise}
                                                        alt={value.nameEnterprise}
                                                        width={70}
                                                        height={70}
                                                        className="rounded-[6px] object-contain"
                                                    />
                                                    <div className="flex flex-col">
                                                        <a 
                                                            href={value.linkEnterprise}
                                                            className="text-[18px] lg:text-[22px] text-ce text-white font-bold"
                                                            style={{ textDecoration: "none" }}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            {value.nameEnterprise}
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="relative flex flex-col gap-7 p-8">
                                                    <div className="absolute left-12 top-12 bottom-[28px] w-[0.22rem] bg-[#ccc]" />
                                                        {value.positions.map((value, indexPP) => {
                                                            return (
                                                                <div
                                                                    key={`postion ${index}${indexPP}`} 
                                                                    className="relative flex gap-3 items-start"
                                                                >
                                                                    <div  
                                                                        className={`absolute left-[1.1rem] top-[7px] h-3.5 w-3.5 ${value.actualPosition ? 'bg-orange-400' : 'bg-gray-300'} rounded-full transform -translate-x-1/2`}
                                                                    />

                                                                    <div className="ml-10 overflow-hidden text-ellipsis">
                                                                        <strong className="text-[16px] lg:text-[20px]">
                                                                            {value.namePosition[locale] || value.namePosition["pt-br"]}
                                                                        </strong>
                                                                        <div className="text-[14px] lg:text-[18px] text-gray-300">
                                                                            {value.timeAtPosition[locale] || value.timeAtPosition["pt-br"]}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}