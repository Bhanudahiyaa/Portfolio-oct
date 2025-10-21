"use client";

import type React from "react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiFramer,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiVercel,
  SiGit,
  SiGithub,
  SiDocker,
  SiSocketdotio,
  SiAmazonwebservices,
  SiNeo4J,
  SiStreamlit,
  SiPostman,
  SiClerk,
  SiShadcnui,
  SiRedis,
  SiPrisma,
  SiGraphql,
  SiWebpack,
  SiFigma,
} from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

type Skill = {
  label: string;
  icon?: React.ReactNode;
};

function SkillPill({ label, icon }: Skill) {
  return (
    <motion.div
      className={cn(
        "relative select-none",
        "inline-flex items-center gap-1.5 rounded-sm border px-1 py-0.25 text-xs font-medium",
        "bg-white text-neutral-600 border-neutral-200",
        "dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
      )}
      whileHover={{ scale: 1.15 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      <div
        className="h-3 w-3 flex items-center justify-center"
        aria-hidden="true"
      >
        {icon}
      </div>
      <span className="leading-none">{label}</span>
    </motion.div>
  );
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "Python", icon: <SiPython className="h-3 w-3" /> },
    { label: "JavaScript", icon: <SiJavascript className="h-3 w-3" /> },
    { label: "TypeScript", icon: <SiTypescript className="h-3 w-3" /> },
    { label: "React.js", icon: <SiReact className="h-3 w-3" /> },
    { label: "PostgreSQL", icon: <SiPostgresql className="h-3 w-3" /> },
    { label: "Firebase", icon: <SiFirebase className="h-3 w-3" /> },
    { label: "Supabase", icon: <SiSupabase className="h-3 w-3" /> },
    { label: "Next.js", icon: <SiNextdotjs className="h-3 w-3" /> },
    { label: "Node.js", icon: <SiNodedotjs className="h-3 w-3" /> },
    { label: "Express.js", icon: <SiExpress className="h-3 w-3" /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss className="h-3 w-3" /> },
    { label: "Framer Motion", icon: <SiFramer className="h-3 w-3" /> },
    { label: "MongoDB", icon: <SiMongodb className="h-3 w-3" /> },
    { label: "Vercel", icon: <SiVercel className="h-3 w-3" /> },
    { label: "Git", icon: <SiGit className="h-3 w-3" /> },
    { label: "GitHub", icon: <SiGithub className="h-3 w-3" /> },
    { label: "Docker", icon: <SiDocker className="h-3 w-3" /> },
    { label: "Socket.io", icon: <SiSocketdotio className="h-3 w-3" /> },
    { label: "AWS", icon: <SiAmazonwebservices className="h-3 w-3" /> },
    { label: "Neo4j", icon: <SiNeo4J className="h-3 w-3" /> },
    { label: "Streamlit", icon: <SiStreamlit className="h-3 w-3" /> },
    { label: "Postman API", icon: <SiPostman className="h-3 w-3" /> },
    { label: "Clerk", icon: <SiClerk className="h-3 w-3" /> },
    { label: "Shadcn UI", icon: <SiShadcnui className="h-3 w-3" /> },
    { label: "Redis", icon: <SiRedis className="h-3 w-3" /> },
    { label: "Prisma", icon: <SiPrisma className="h-3 w-3" /> },
    { label: "GraphQL", icon: <SiGraphql className="h-3 w-3" /> },
    { label: "Webpack", icon: <SiWebpack className="h-3 w-3" /> },
    { label: "Figma", icon: <SiFigma className="h-3 w-3" /> },
    { label: "Shitposter", icon: <FaTwitter className="h-3 w-3" /> },
  ];

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
          Skills
        </h3>
        <div className="pointer-events-none hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">
          hover on this 🤭
        </div>
      </div>
      <div className={cn("relative flex flex-wrap gap-2")}>
        {skills.map(s => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>
    </div>
  );
}

export default SkillsDraggable;
