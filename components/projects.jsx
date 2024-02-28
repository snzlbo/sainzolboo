"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { BentoGrid, BentoGridItem } from "@/components/reuseables/bento";

export function ProjectsSection({ items }) {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={
          "bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-transparent text-5xl font-bold relative z-10 text-center mt-16 py-4"
        }
      >
        My Latest Projects
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="my-24"
      >
        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              header={item.position}
              title={item.title}
              description={item.description}
              img={item.imageSrc}
              link={item.link}
              className={i === 0 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </motion.div>
    </>
  );
}