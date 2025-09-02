import { cn } from "@/lib/utils"

type AchievementItemProps = {
  title: string
  date: string
  description: string
  href?: string
  className?: string
}

export function AchievementItem({ title, date, description, href, className }: AchievementItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white p-4 md:p-5 dark:border-neutral-800 dark:bg-neutral-950",
        className,
      )}
    >
      <div className="flex items-baseline gap-2">
        <h4 className="font-semibold text-neutral-900 dark:text-neutral-50">{title}</h4>
        <span className="text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300">
          {date}
        </span>
        {href ? (
          <a
            href={href}
            className="ml-auto text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            Read more
          </a>
        ) : null}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">{description}</p>
    </article>
  )
}
