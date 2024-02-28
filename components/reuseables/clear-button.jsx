"use client";

import Link from "next/link";

export const ClearButton = ({ title, link }) => {
  return (
    <Link href={link} target="_blank">
      <button className="cursor-pointer rounded-full bg-slate-800 p-px text-xs font-semibold leading-6 text-zinc-100 no-underline shadow-2xl shadow-zinc-900">
        <div className="relative z-10 flex items-center space-x-2 rounded-full bg-zinc-950 hover:bg-primary px-4 py-0.5 ring-1 ring-white/10 ">
          <span>{title}</span>
        </div>
      </button>
    </Link>
  );
};
