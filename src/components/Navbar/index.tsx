"use client";

import { motion, Variants } from "framer-motion";

import { DesktopMenu } from "./Desktop";
import { MobileMenu } from "./Mobile";

export function Navbar() {
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

  return (
    <motion.div 
      className="lg:col-span-12 flex justify-between items-center mb-10 relative p-6 sm:p-12"
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
