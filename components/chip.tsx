import type * as React from "react"
import { cn } from "@/lib/utils"

type ChipProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "soft" | "outline" | "solid"
}

export function Chip({ className, variant = "soft", ...props }: ChipProps) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium"
  const styles =
    variant === "outline"
      ? "border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
      : variant === "solid"
        ? "bg-neutral-900 text-white"
        : "bg-neutral-100 text-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300"
  return <span className={cn(base, styles, className)} {...props} />
}
