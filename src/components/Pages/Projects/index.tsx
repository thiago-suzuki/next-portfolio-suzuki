"use client"

import { motion } from "framer-motion";
import Link from "next/link"; 
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";

import { Button } from "@/components";
import { projectsUser } from "@/data";


export function Projects() {
    const t = useTranslations('Pages.Projects')
    const locale = useLocale()

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

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                            {projectsUser.map((value, index) => {
                                return (
                                    <div
                                        key={'project ' + index}
                                        className="relative flex flex-col rounded-2xl bg-[#364153] border-[#364135] overflow-hidden min-h-[400px] group"
                                    >
                                        <div className="overflow-hidden">
                                            <Image
                                                src={value.image}
                                                alt={value.title}
                                                width={500}
                                                height={500}
                                                className="transform transition-transform duration-1000 group-hover:scale-110" 
                                            />
                                        </div>

                                        <div className="flex flex-col justify-between flex-1 px-6 py-6">
                                            <div>
                                                <h3 className="font-bold mb-4 capitalize">{value.title}</h3>
                                                <p className="text-sm text-gray-300">
                                                    {value.description[locale] || value.description["pt-br"]}
                                                </p>
                                            </div>

                                            <div className="mt-6 flex justify-center gap-3">
                                                {value.deploy && (
                                                    <Link href={value.deploy} target="_blank">
                                                        <Button type="button" title="Read more" className="bg-black">
                                                            {t('buttons.deploy')}
                                                        </Button>
                                                    </Link>
                                                )}
                                                <Link href={value.source} target="_blank">
                                                    <Button type="button" title="View Code" variant="outline" className="text-black">
                                                        <FaGithub size={16}/> {t('buttons.source')}
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}