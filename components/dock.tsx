import { Github, Home, Mail, Globe2, User } from "lucide-react"

export function Dock() {
  const items = [
    { icon: Home, label: "Home", href: "#" },
    { icon: User, label: "About", href: "#about" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Globe2, label: "Website", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@example.com" },
  ]
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-4 z-50 flex justify-center">
      <nav
        aria-label="Quick actions"
        className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/90 p-1.5 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
      >
        {items.map((it) => (
          <a
            key={it.label}
            href={it.href}
            className="group inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            <it.icon className="h-4 w-4 opacity-90" aria-hidden="true" />
            <span className="sr-only">{it.label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}
