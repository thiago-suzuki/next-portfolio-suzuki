"use client";

import { useTranslations, useLocale } from "next-intl";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

import { usePathname, useRouter, locales as localesData, Link } from "@/i18n/routing";
import { navbarOptions } from "@/data";

export function MobileMenu() {
    const t = useTranslations("Components.Navbar.Options");
    
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePathname();

    const [menuOpen, setMenuOpen] = useState(false);
    const [langMenuOpen, setLangMenuOpen] = useState(false);

    const menuRef = useRef<HTMLDivElement>(null);
    const langMobileRef = useRef<HTMLDivElement>(null);

    const locales = [
        { code: "en", label: t('languages.en'), flag: "🇺🇸" },
        { code: "es", label: t('languages.es'), flag: "🇪🇸" },
        { code: "pt-br", label: t('languages.pt-br'), flag: "🇧🇷" },
    ];

    const handleLocaleChange = (newLocale: string) => {
        const localePattern = localesData.map(l => l.replace('-', '\\-')).join('|');
        const regex = new RegExp(`^\\/(${localePattern})(?=\\/|$)`, 'i');

        const pathnameWithoutLocale = pathname.replace(regex, '') || '/';

        router.replace(pathnameWithoutLocale, { locale: newLocale });

        setMenuOpen(false)
        setLangMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Node;
            if (
                !menuRef.current?.contains(target) &&
                !langMobileRef.current?.contains(target)
            ) {
                setMenuOpen(false);
                setLangMenuOpen(false);
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
        <motion.div className="lg:hidden relative" variants={headerChildrenAnimations}>
            <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-orange-500 text-2xl focus:outline-none"
            >
                <FaBars />
            </button>

            <div
                ref={menuRef}
                className={`absolute top-10 right-0 bg-zinc-900 border border-gray-700 rounded-md shadow-lg w-52 z-50 transform transition-all duration-300 ease-in-out origin-top-right ${
                    menuOpen
                    ? "opacity-100 scale-100 translate-y-0"
                    : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                }`}
            >
                <ul className="flex flex-col p-2 space-y-1">
                    {navbarOptions.map((key) => (
                        <li key={key}>
                            <Link
                                href={key === 'home' ? '/' : `/${key}`}
                                onClick={() => setMenuOpen(false)}
                                className={`block px-4 py-2 text-sm text-white hover:text-orange-400 focus:text-orange-400 rounded`}
                            >
                                {t(key)}
                            </Link>
                        </li>
                    ))}

                    <li>
                        <div ref={langMobileRef} className="relative">
                            <button
                                onClick={() => setLangMenuOpen((prev) => !prev)}
                                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-300 hover:bg-orange-500/10 rounded"
                            >
                                <span className="flex items-center gap-2">
                                    <span>{currentLang?.flag}</span>
                                    <span>{currentLang?.label}</span>
                                </span>
                                <IoChevronDown className="text-xs" />
                            </button>

                            {langMenuOpen && (
                                <div className="absolute right-2 top-10 z-50 w-40 bg-zinc-800 border border-gray-600 rounded shadow-md">
                                    {locales.map((l) => (
                                        <button
                                            key={l.code}
                                            onClick={() => handleLocaleChange(l.code)}
                                            className="text-sm text-gray-200 hover:bg-orange-500/10 focus:bg-orange-500/10 active:bg-orange-500/20 flex items-center w-full px-4 py-2"
                                        >
                                            <span className="mr-2">{l.flag}</span>
                                            {l.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}