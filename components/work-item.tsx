import { Badge } from "@/components/ui/badge";
import { Building2, Shield } from "lucide-react";
import Image from "next/image";

type WorkItemProps = {
  company: string;
  role: string;
  period: string;
  summary: string;
  icon?: "shield" | "building";
  logoUrl?: string;
};

export function WorkItem({
  company,
  role,
  period,
  summary,
  icon = "building",
  logoUrl,
}: WorkItemProps) {
  const Icon = icon === "shield" ? Shield : Building2;
  return (
    <div className="rounded-xl border border-neutral-200 bg-white px-4 py-2 md:px-5 md:py-2.5 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="flex gap-3">
        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 overflow-hidden">
          {logoUrl ? (
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              width={28}
              height={28}
              className="h-full w-full object-cover"
            />
          ) : (
            <Icon className="h-4 w-4" aria-hidden="true" />
          )}
        </div>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
              {company}
            </h4>
            <span className="text-xs rounded-sm border border-neutral-200 px-1 py-0.25 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 whitespace-nowrap flex-shrink-0">
              {period}
            </span>
          </div>
          <p className="text-xs text-neutral-600 dark:text-neutral-300">
            {role}
          </p>
          <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
            {summary}
          </p>
        </div>
      </div>
    </div>
  );
}
