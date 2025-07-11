"use client";

import { useTranslations, useLocale } from "next-intl";
import React, { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

import { usePathname, useRouter, locales as localesData, Link } from "@/i18n/routing";

export function DesktopMenu() {
    const t = useTranslations("Pages.Global.Header.Options");

    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const [langDesktopOpen, setLangDesktopOpen] = useState(false);

    const langDesktopRef = useRef<HTMLDivElement>(null);

    const locales = [
        { code: "en", label: t('languages.en'), flag: "🇺🇸" },
        { code: "es", label: t('languages.es'), flag: "🇪🇸" },
        { code: "pt-br", label: t('languages.pt-br'), flag: "🇧🇷" },
    ];

    const navbarOptions = ["home",  "about", "experience", "projects", "contact"]

    const handleLocaleChange = (newLocale: string) => {
        const localePattern = localesData.map(l => l.replace('-', '\\-')).join('|');
        const regex = new RegExp(`^\\/(${localePattern})(?=\\/|$)`, 'i');

        const pathnameWithoutLocale = pathname.replace(regex, '') || '/';

        router.replace(pathnameWithoutLocale, { locale: newLocale });

        setLangDesktopOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
            !langDesktopRef.current?.contains(target)
        ) {
            setLangDesktopOpen(false);
        }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const currentLang = locales.find((l) => l.code === locale);

    const headerChildrenAnimations: Variants = {
        hidden: {
            opacity: 0,
            x: 20,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 24,
            },
        },
    };

    return (
        <div className="hidden lg:flex items-center justify-between w-full">
            <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
                    Portfolio
                </h1>
            </div>

            <div className="flex space-x-6">
                {navbarOptions.map((key) => (
                    <motion.div
                        variants={headerChildrenAnimations}
                    >
                    <Link
                        href={key === 'home' ? '/' : `/${key}`}
                        className="text-md text-white hover:text-orange-400 transition"
                    >
                        {t(key)}
                    </Link>
                    </motion.div>

                ))}
            </div>

            <motion.div ref={langDesktopRef} className="relative" variants={headerChildrenAnimations}>
                <button
                    onClick={() => setLangDesktopOpen((prev) => !prev)}
                    className="flex items-center gap-2 text-md text-gray-300 hover:text-orange-400"
                >
                    <span>{currentLang?.flag}</span>
                    <span>{currentLang?.label}</span>
                    <IoChevronDown className="text-xs" />
                </button>

                {langDesktopOpen && (
                    <div className="absolute right-0 mt-2 w-40 bg-zinc-800 border border-gray-600 rounded shadow-md z-50">
                        {locales.map((l) => (
                            <button
                                key={l.code}
                                onClick={() => handleLocaleChange(l.code)}
                                className="flex items-center w-full px-4 py-2 text-sm text-gray-200 hover:bg-orange-500/10"
                            >
                            <span className="mr-2">{l.flag}</span>
                                {l.label}
                            </button>
                        ))}
                    </div>
                )}
            </motion.div>
        </div>
    )
}