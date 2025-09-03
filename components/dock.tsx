import {
  Github,
  Home,
  Mail,
  Globe2,
  User,
  Twitter,
  Linkedin,
} from "lucide-react";

export function Dock() {
  const items = [
    { icon: Home, label: "Home", href: "#" },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/iBhanuDahiya",
    },
    { icon: Github, label: "GitHub", href: "https://github.com/bhanudahiyaa" },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/bhanupratap1",
    },
    { icon: Mail, label: "Email", href: "mailto:bhanudahiya8@gmail.com" },
  ];
  return (
    <div className="pointer-events-auto fixed inset-x-0 bottom-6 z-50 flex justify-center">
      <nav
        aria-label="Quick actions"
        className="flex items-center gap-1 rounded-xl border border-neutral-200 bg-white/90 p-1.5 shadow-lg backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80"
      >
        {items.map(it => (
          <a
            key={it.label}
            href={it.href}
            className="group inline-flex items-center gap-1 rounded-xl px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
          >
            <it.icon className="h-4 w-4 opacity-90" aria-hidden="true" />
            <span className="sr-only">{it.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
