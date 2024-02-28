import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import { ClearButton } from "./clear-button";
import Image from "next/image";

export const BentoGrid = ({ className, children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const BentoGridItem = ({
  className,
  header,
  title,
  description,
  link,
  img,
  width,
  height,
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento p-6 bg-zinc-900 border border-zinc-700 justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="text-zinc-100 transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex h-40 w-auto items-center px-2">
          <Image
            width={width}
            height={height}
            src={img}
            alt={title}
            className="h-24 object-contain"
          />
        </div>
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col">
            <div className="my-2 text-lg font-medium text-zinc-100">
              {title}
            </div>
            <div className="text-sm font-normal text-zinc-100">
              {description}
            </div>
          </div>
          <ClearButton title="Learn More" link={link} />
        </div>
      </div>
    </div>
  );
};
