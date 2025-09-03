import { cn } from "@/lib/utils";
import { Chip } from "@/components/chip";

type ProjectListItemProps = {
  title: string;
  bullets: string[];
  tags: string[];
  links?: { label: string; href: string }[];
  className?: string;
};

export function ProjectListItem({
  title,
  bullets,
  tags,
  links = [],
  className,
}: ProjectListItemProps) {
  return (
    <article
      className={cn(
        "rounded-xl border border-neutral-200 bg-white px-4 py-2 md:px-5 md:py-2.5 dark:border-neutral-800 dark:bg-neutral-950",
        className
      )}
    >
      <header className="flex flex-wrap items-center gap-2">
        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          {title}
        </h4>
        <div className="ml-auto flex gap-2">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-xs rounded-sm border border-neutral-200 px-2 py-0.5 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {l.label}
            </a>
          ))}
        </div>
      </header>

      <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map(t => (
          <Chip key={t} className="px-2 py-0.5" variant="soft">
            {t}
          </Chip>
        ))}
      </div>
    </article>
  );
}
