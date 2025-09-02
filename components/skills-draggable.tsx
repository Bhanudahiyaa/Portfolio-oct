"use client"

import type React from "react"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { cn } from "@/lib/utils"

type Skill = {
  label: string
  icon?: React.ReactNode
  accent?: "default" | "yellow" | "blue"
}

function SkillPill({ label, icon, accent = "default" }: Skill) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const xSpring = useSpring(x, { stiffness: 420, damping: 32 })
  const ySpring = useSpring(y, { stiffness: 420, damping: 32 })

  return (
    <motion.div
      className={cn(
        "relative select-none cursor-grab active:cursor-grabbing",
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium",
        "bg-white text-slate-800 border-slate-200 shadow-[0_1px_0_0_rgba(0,0,0,0.05)] ring-1 ring-inset ring-black/[0.02]",
        "dark:bg-slate-900 dark:text-slate-100 dark:border-slate-700 dark:ring-white/[0.04]",
      )}
      style={{ x: xSpring, y: ySpring }}
      drag
      dragElastic={0.2}
      dragMomentum={0.25}
      onDrag={(event, info) => {
        x.set(info.offset.x)
        y.set(info.offset.y)
      }}
      onDragEnd={() => {
        x.set(0)
        y.set(0)
      }}
      whileTap={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 520, damping: 34 }}
      aria-label={label}
      role="button"
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          accent === "yellow" && "bg-yellow-400 dark:bg-yellow-300",
          accent === "blue" && "bg-blue-500 dark:bg-blue-400",
          accent === "default" && "bg-slate-400 dark:bg-slate-300",
        )}
        aria-hidden="true"
      />
      <span className="leading-none">{label}</span>
    </motion.div>
  )
}

export function SkillsDraggable() {
  const skills: Skill[] = [
    { label: "React", accent: "blue" },
    { label: "Next.js" },
    { label: "TypeScript" },
    { label: "Node.js" },
    { label: "MongoDB" },
    { label: "JavaScript", accent: "yellow" },
    { label: "Postman API" },
    { label: "Supabase" },
    { label: "Clerk" },
    { label: "Tailwind CSS" },
    { label: "Express" },
    { label: "PostgreSQL" },
    { label: "Socket.io" },
    { label: "AWS" },
    { label: "Shadcn UI" },
  ]

  return (
    <div className="mt-4">
      <div className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Skills</h3>
        <div className="pointer-events-none hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">
          drag me!
        </div>
      </div>
      <div className={cn("relative flex flex-wrap gap-2")}>
        {skills.map((s) => (
          <SkillPill key={s.label} {...s} />
        ))}
      </div>
    </div>
  )
}

export default SkillsDraggable
