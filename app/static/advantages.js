import {
  IconInfoHexagon,
  IconNotebook,
  IconBrandGithub,
  IconBrandNextjs,
  IconBrandGraphql,
  IconBrandNodejs,
  IconBrandTypescript,
  IconBrandMysql,
  IconBrandPython,
} from "@tabler/icons-react";
import Image from "next/image";

export const advantages = [
  {
    title: "Figma",
    percent: "95%",
    icon: (
      <Image
        src="/images/advantages/figma.png"
        alt="Figma"
        width={64}
        height={96}
        className="h-24 w-auto align-middle"
      />
    ),
  },
  {
    title: "Next.js/Nuxt.js",
    percent: "94%",
    icon: <IconBrandNextjs className="h-24 w-auto text-[#8a7382]" />,
  },
  {
    title: "Graphql",
    percent: "92%",
    icon: <IconBrandGraphql className="h-24 w-auto text-[#E10098]" />,
  },
  {
    title: "Node.js",
    percent: "90%",
    icon: <IconBrandNodejs className="h-24 w-auto text-[#3c873a]" />,
  },
  {
    title: "Typescript",
    percent: "90%",
    icon: <IconBrandTypescript className="h-24 w-auto text-[#3178c6]" />,
  },
  {
    title: "Python",
    percent: "85%",
    icon: <IconBrandPython className="h-24 w-auto text-[#ffd43b]" />,
  },
];
