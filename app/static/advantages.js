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

export const advantages = [
  {
    title: "Figma",
    percent: "95%",
    icon: (
      <img
        src="/images/advantages/figma.png"
        className="h-24 align-middle w-auto"
      />
    ),
  },
  {
    title: "Next.js/Nuxt.js",
    percent: "94%",
    icon: <IconBrandNextjs className="h-24 w-auto text-[#222222]" />,
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
