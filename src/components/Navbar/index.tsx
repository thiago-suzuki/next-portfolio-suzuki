"use client";

import { useTranslations, useLocale } from "next-intl";
import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { motion, Variants } from "framer-motion";

import { usePathname, useRouter, locales as localesData, Link } from "@/i18n/routing";
import { DesktopMenu } from "./Desktop";
import { MobileMenu } from "./Mobile";

export function Navbar() {
  const t = useTranslations("Pages.Global.Header.Options");

  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [langDesktopOpen, setLangDesktopOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);
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

    setMenuOpen(false)
    setLangMenuOpen(false);
    setLangDesktopOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !menuRef.current?.contains(target) &&
        !langMobileRef.current?.contains(target) &&
        !langDesktopRef.current?.contains(target)
      ) {
        setMenuOpen(false);
        setLangMenuOpen(false);
        setLangDesktopOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = locales.find((l) => l.code === locale);

  const headerAnimations: Variants = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5,
        delayChildren: 0.4,
        staggerChildren: 0.1,
      },
    },
  };


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
    <motion.div 
      className="lg:col-span-12 flex justify-between items-center mb-10 relative"
      variants={headerAnimations}
      initial="hidden"
      animate="show"
    >
      <h1 className="flex lg:hidden text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
        Portfolio
      </h1>
      
      <DesktopMenu />

      <MobileMenu />
    </motion.div>
  );
}
