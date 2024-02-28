import {
  IconInfoHexagon,
  IconNotebook,
  IconBrandGithub,
} from "@tabler/icons-react";

export const menu = [
  {
    name: "About",
    link: "/about",
    icon: <IconInfoHexagon className="size-4 text-zinc-100" />,
  },
  {
    name: "Projects",
    link: "/projects",
    icon: <IconBrandGithub className="size-4 text-zinc-100" />,
  },
  {
    name: "Education",
    link: "/education",
    icon: <IconNotebook className="size-4 text-zinc-100" />,
  },
];
