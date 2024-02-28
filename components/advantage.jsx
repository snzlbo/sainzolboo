"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/reuseables/bento";

export const AdvantageSection = ({ advantages }) => {
  return (
    <div className="mx-8 my-24 md:my-40 grid">
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
          "bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent text-5xl font-bold relative z-10 text-center mt-40 py-4"
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
        className="my-24 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-12"
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
    <div className="flex group flex-col items-center justify-center space-y-6">
      <div className="bg-zinc-900 border border-zinc-700 w-full rounded-full px-8 pt-16 pb-12 items-center flex flex-col space-y-8">
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.3 },
          }}
          className="flex grayscale-0 md:grayscale  group-hover:grayscale-0 items-end align-middle"
        >
          {icon}
        </motion.div>
        <span className="text-4xl">{percent}</span>
      </div>
      <span className="text-lg">{title}</span>
    </div>
  );
};
