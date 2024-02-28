"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const NavBar = ({ navItems, className }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 inset-x-0 mx-auto border border-white/[0.2] rounded-full bg-black z-[5000] p-4 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
            <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-zinc-100 items-center flex space-x-2 hover:text-zinc-300"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.name}</span>
            {/* <span className='absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-red-500 to-transparent' /> */}
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
