"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("Pages.NotFound");

  return (
    <motion.div 
      className="mb-20 md:mt-20 md:mb-0 grid grid-rows-2 md:grid-cols-2"
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
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-center text-6xl mb-4">
          {t("title")}
        </h1>
        <p className="text-lg text-center">
          {t("subtitle")}
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <img
          src="/images/cry-man.png"
          alt="Professional portrait"
          className="w-80 h-80 md:w-[500px] md:h-[500px] object-cover rounded-xl"
        />
      </div>
    </motion.div>
  );
}