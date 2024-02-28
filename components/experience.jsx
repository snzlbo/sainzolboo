"use client";
import React from "react";
import { motion } from "framer-motion";

export const ExperienceSection = () => {
  return (
    <div className="relative mx-8 flex min-h-screen flex-col overflow-hidden">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className={
          "relative z-10 mt-16 bg-zinc-900/[50] bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text py-4 text-center text-5xl font-bold text-transparent"
        }
      >
        Education & Work Experience
      </motion.h1>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.9,
          ease: "easeInOut",
        }}
        className="my-24 grid grid-cols-1 md:grid-cols-3"
      >
        <div className="flex flex-col space-y-4 text-white md:space-y-12">
          <span className="text-sm text-neutral-300">2018</span>
          <ExperienceCard
            title="Bachelor in Information Technology"
            desc="Completed Bachelor's degree in Information Technology from the National University of Mongolia."
            info="National University of Mongolia, 2018-2022"
          />
        </div>
        <div className="flex flex-col space-y-4 text-white md:space-y-12">
          <span className="text-sm text-neutral-300">2021 - 2023</span>
          <div className="flex flex-col space-y-14">
            <ExperienceCard
              title="UI & UX designer"
              info="Stora.mn, 2021 June - 2022 March"
              desc="After successfully completing my internship at Stora Central, I continued my journey with the organization as a full-time employee, assuming the role of a UI&UX designer."
            />
            <ExperienceCard
              title="Front-End Developer"
              info="Stora.mn, 2022 March - 2022 October"
              desc="I have served as a front-end developer at Stora Central throughout the year 2022, while concurrently pursuing my Bachelor's research work."
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 text-white md:space-y-12">
          <span className="text-sm text-neutral-300">2023 - Present</span>
          <ExperienceCard
            title="System Engineer"
            info="Dentsu Data Artist Mongol, 2023 August - Present"
            desc="Currently working as an AI engineer and Front-End developer in a System development team."
          />
        </div>
        {/* <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid> */}
      </motion.div>
    </div>
  );
};

const ExperienceCard = ({ title, info, desc }) => {
  return (
    <div className="flex w-full flex-col text-xl md:w-3/4 md:text-2xl">
      <span className="w-full text-primary">{title}</span>
      <span className="mb-2 mt-6 text-base text-neutral-300">{info}</span>
      <span className="text-base">{desc}</span>
    </div>
  );
};
