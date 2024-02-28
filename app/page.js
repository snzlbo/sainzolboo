import Image from "next/image";
import { NavBar } from "@/components/navbar";
import { menu } from "@/app/static/menu";
import { advantages } from "@/app/static/advantages";
import { projects } from "@/app/static/projects";
import { HeroSection } from "@/components/hero";
import { ExperienceSection } from "@/components/experience";
import { AdvantageSection } from "@/components/advantage";
import { ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <div className="bg-zinc-950 scroll-smooth">
      <NavBar navItems={menu} />
      <HeroSection />
      <AdvantageSection advantages={advantages} />
      <ExperienceSection />
      <ProjectsSection items={projects} />
    </div>
  );
}
