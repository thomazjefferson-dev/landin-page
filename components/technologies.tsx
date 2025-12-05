"use client";

import { Badge } from "@/components/ui/badge";
import LogoLoop, { type LogoItem } from "@/components/ui/logo-loop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
  SiAmazon,
  SiVercel,
  SiFigma,
  SiGit,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Vercel",
  "Figma",
  "Git",
  "Docker",
  "REST APIs",
  "GraphQL",
];

const techLogos: LogoItem[] = [
  {
    node: <SiReact className="h-12 w-12" />,
    title: "React",
    href: "https://react.dev",
    ariaLabel: "React",
  },
  {
    node: <SiNextdotjs className="h-12 w-12" />,
    title: "Next.js",
    href: "https://nextjs.org",
    ariaLabel: "Next.js",
  },
  {
    node: <SiTypescript className="h-12 w-12" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
    ariaLabel: "TypeScript",
  },
  {
    node: <SiNodedotjs className="h-12 w-12" />,
    title: "Node.js",
    href: "https://nodejs.org",
    ariaLabel: "Node.js",
  },
  {
    node: <SiTailwindcss className="h-12 w-12" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
    ariaLabel: "Tailwind CSS",
  },
  {
    node: <SiPostgresql className="h-12 w-12" />,
    title: "PostgreSQL",
    href: "https://www.postgresql.org",
    ariaLabel: "PostgreSQL",
  },
  {
    node: <SiMongodb className="h-12 w-12" />,
    title: "MongoDB",
    href: "https://www.mongodb.com",
    ariaLabel: "MongoDB",
  },
  {
    node: <SiAmazon className="h-12 w-12" />,
    title: "AWS",
    href: "https://aws.amazon.com",
    ariaLabel: "AWS",
  },
  {
    node: <SiVercel className="h-12 w-12" />,
    title: "Vercel",
    href: "https://vercel.com",
    ariaLabel: "Vercel",
  },
  {
    node: <SiFigma className="h-12 w-12" />,
    title: "Figma",
    href: "https://figma.com",
    ariaLabel: "Figma",
  },
  {
    node: <SiGit className="h-12 w-12" />,
    title: "Git",
    href: "https://git-scm.com",
    ariaLabel: "Git",
  },
  {
    node: <SiDocker className="h-12 w-12" />,
    title: "Docker",
    href: "https://www.docker.com",
    ariaLabel: "Docker",
  },
  {
    node: <SiGraphql className="h-12 w-12" />,
    title: "GraphQL",
    href: "https://graphql.org",
    ariaLabel: "GraphQL",
  },
];

export function Technologies() {
  return (
    <section id="tecnologias" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tecnologias Modernas
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Utilizamos as ferramentas mais avançadas do mercado
          </p>
        </div>

        <div className="mx-auto mt-12 overflow-hidden">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            fadeOut
            scaleOnHover
            className="w-full"
            ariaLabel="Tecnologias utilizadas"
          />
        </div>
      </div>
    </section>
  );
}
