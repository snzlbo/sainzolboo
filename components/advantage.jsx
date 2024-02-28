"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/reuseables/bento";

export const AdvantageSection = ({ advantages }) => {
  return (
    <div className="mx-8 my-24 grid md:my-40">
      <hr className="border border-zinc-700" />
      <motion.h1
        initial={{ opacity: 0.5, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={
          "relative z-10 mt-40 bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-5xl font-bold text-transparent"
        }
      >
        My Advantage
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
          ease: "easeInOut",
        }}
        className="my-24 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-6 lg:gap-12"
      >
        {advantages.map((advantage, idx) => (
          <AdvantageCard
            title={advantage.title}
            percent={advantage.percent}
            icon={advantage.icon}
            key={idx}
          />
        ))}
      </motion.div>
      <hr className="mt-40 border border-zinc-700" />
    </div>
  );
};

const AdvantageCard = ({ icon, title, percent }) => {
  return (
    <div className="group flex flex-col items-center justify-center space-y-6">
      <div className="flex w-full flex-col items-center space-y-8 rounded-full border border-zinc-700 bg-zinc-900 px-8 pb-12 pt-16">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="flex items-end align-middle  grayscale-0 group-hover:grayscale-0 md:grayscale"
        >
          {icon}
        </motion.div>
        <span className="text-4xl">{percent}</span>
      </div>
      <span className="text-lg">{title}</span>
    </div>
  );
};
