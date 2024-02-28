"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconQuote,
} from "@tabler/icons-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex w-full max-w-full flex-col bg-gradient-to-b from-zinc-800 to-zinc-950 pt-32 md:pt-60">
      <div className="mx-8 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.15,
            duration: 0.35,
            ease: "easeInOut",
          }}
          className="relative z-10 flex flex-col bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-2 text-center text-4xl font-bold leading-loose text-transparent md:text-7xl"
        >
          <span className="mb-2">Sainzolboo Anujin</span>
          <span>
            UI/UX designer & <br /> Software Engineer.
          </span>
        </motion.div>
        <div className="grid grid-cols-1 pt-20 md:grid-cols-3 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <div className="relative flex h-full flex-col justify-center space-y-6 md:space-y-16">
              <InfoCard
                title="BioGraphy"
                desc="Coding with Passion, Designing with Love. I'm Sainzolboo Full-Stack Software Engineer based in Mongolia."
              />
              <div className="flex flex-col items-start space-y-2 text-white md:space-y-6">
                <span className="text-sm text-neutral-300">Contact</span>
                <div className="flex w-full flex-col space-y-2 text-start md:w-2/3 md:text-2xl">
                  <span>Sainzolboo@gmail.com</span>
                  <span>+976 91990388</span>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.55,
              ease: "easeInOut",
            }}
            className="h-fit rounded-full border border-white/[0.2] p-6"
          >
            <div className="relative rounded-full">
              <Image
                src="/images/profile.jpg"
                alt="hero"
                width={500}
                height={500}
                className="rounded-full brightness-75"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.45,
              ease: "easeInOut",
            }}
          >
            <div className="relative flex h-full flex-col justify-center space-y-6 md:space-y-16">
              <InfoCard
                title="Total Projects Contributed To"
                desc="30"
                directionStart={false}
              />
              <InfoCard
                title="Bachelor's Degree GPA"
                desc="3.8"
                directionStart={false}
              />
              <InfoCard
                title="Years of Working Experience"
                desc="2.5"
                directionStart={false}
              />
            </div>
          </motion.div>
        </div>
        <hr className="my-40 border border-zinc-700" />
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className={
            "relative flex w-full justify-center font-bold leading-relaxed"
          }
        >
          <IconQuote className="size-8 text-primary" />
          <span className="w-3/4 bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl text-transparent">
            `I&apos;m a full-stack software engineer and UI/UX designer with 2.5
            years of experience, specializing in user-friendly web applications
            and AI projects like chatbot development. My background includes
            impactful work in startup and AI-based enterprise environments,
            particularly in Japan. I&apos;m skilled in data manipulation for
            reliable systems.`
          </span>
          <IconQuote className="size-8 self-end text-primary" />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="mt-24 flex flex-row items-center justify-center space-x-4"
        >
          <div className="rounded-lg bg-primary p-2">
            <Link target="_blank" href="https://github.com/snzlbo">
              <IconBrandGithub className="size-8" />
            </Link>
          </div>
          <div className="rounded-lg bg-primary p-2">
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sainzolboo-anujin-531358282/"
            >
              <IconBrandLinkedin className="size-8" />
            </Link>
          </div>
          <div
            className="rounded-lg bg-primary p-2 hover:cursor-pointer"
            onClick={() => {
              window.location.href = "mailto:sainzolboo@gmail.com";
            }}
          >
            <IconBrandGmail className="size-8" />
          </div>
          <div className="rounded-lg bg-primary p-2">
            <Link target="_blank" href="https://www.facebook.com/Snzolbo/">
              <IconBrandFacebook className="size-8" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const InfoCard = ({ className, title, desc, directionStart = true }) => {
  return (
    <div
      className={cn(
        className,
        directionStart ? "items-start" : "items-end",
        "text-white flex flex-col space-y-2 md:space-y-6"
      )}
    >
      <span className="text-sm text-neutral-300">{title}</span>
      <span
        className={cn(
          directionStart ? "text-start md:text-2xl" : "text-end md:text-6xl",
          "w-full md:w-2/3"
        )}
      >
        {desc}
      </span>
    </div>
  );
};
