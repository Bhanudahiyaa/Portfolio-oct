import { Badge } from "@/components/ui/badge"
import { Building2, Shield } from "lucide-react"

type WorkItemProps = {
  company: string
  role: string
  period: string
  summary: string
  icon?: "shield" | "building"
}

export function WorkItem({ company, role, period, summary, icon = "building" }: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2
  return (
    <div className="flex gap-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-medium text-neutral-900 dark:text-neutral-50">{company}</p>
          <Badge variant="secondary" className="rounded-full">
            {period}
          </Badge>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300">{role}</p>
        <p className="mt-1 text-[13px] leading-5 text-neutral-500">{summary}</p>
      </div>
    </div>
  )
}
