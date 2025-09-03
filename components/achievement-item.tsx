import { cn } from "@/lib/utils";

type AchievementItemProps = {
  title: string;
  date: string;
  description: string;
  href?: string;
  className?: string;
};

export function AchievementItem({
  title,
  date,
  description,
  href,
  className,
}: AchievementItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white px-4 py-2 md:px-5 md:py-2.5 dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
          {title}
        </h4>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs rounded-sm border border-neutral-200 px-1 py-0.25 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300 whitespace-nowrap">
            {date}
          </span>
          {href ? (
            <a
              href={href}
              className="text-xs rounded-full border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900 whitespace-nowrap"
            >
              Read more
            </a>
          ) : null}
        </div>
      </div>
      <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
        {description}
      </p>
    </article>
  );
}
