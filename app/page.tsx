import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/section-heading"
import { WorkItem } from "@/components/work-item"
import { ProjectListItem } from "@/components/project-list-item"
import { AchievementItem } from "@/components/achievement-item"
import { Dock } from "@/components/dock"
import { SkillsDraggable } from "@/components/skills-draggable"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-28 pt-6 dark:bg-neutral-950">
      <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 dark:text-neutral-300">
        <Link href="#" className="font-semibold text-neutral-900 dark:text-neutral-50">
          bhanu.
        </Link>
        <div className="flex items-center gap-4">
          <a href="#experience" className="hover:underline">
            experience
          </a>
          <a href="#projects" className="hover:underline">
            projects
          </a>
          <a href="#achievements" className="hover:underline">
            achievements
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <div className="mx-auto max-w-xl px-4">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-6 md:p-8">
            {/* Header */}
            <header id="about" className="space-y-2">
              <p className="text-xs text-neutral-500">hi there 😊, I'm</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 ring-2 ring-neutral-200 dark:ring-neutral-800">
                  <AvatarImage src="/profile-avatar.png" alt="Profile avatar" />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                  Bhanu Pratap Singh
                </h1>
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-600 dark:text-neutral-300">
                <span>20, he/him</span>
                <span className="hidden sm:inline">•</span>
                <span className="max-w-[38ch]">
                  Full‑stack developer who loves building efficient, scalable, and intuitive applications.
                </span>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <Button
                  size="sm"
                  className="h-8 rounded-full bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  Resume
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-8 w-8 rounded-md border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a href="mailto:hello@example.com" aria-label="Send email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-8 w-8 rounded-md border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a href="https://twitter.com/your_handle" target="_blank" rel="noreferrer" aria-label="Open Twitter">
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-8 w-8 rounded-md border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Open GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-8 w-8 rounded-md border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Open LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </header>

            {/* Bio */}
            <section className="mt-4 text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
              <p>
                A 19-year-old self-taught developer from India who loves building things, primarily using{" "}
                <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                  JavaScript
                </span>{" "}
                and modern frameworks. With over a year of hands-on experience, I previously worked at a US-based
                startup and am now building a stealth startup as a Founding engineer.
              </p>
            </section>

            {/* Skills */}
            <section className="mt-5">
              <SkillsDraggable />
            </section>

            {/* Work Experience */}
            <section id="experience" className="mt-6">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Work Experience</h3>
              <div className="mt-3 space-y-4">
                <WorkItem
                  icon="shield"
                  company="Stealth"
                  role="Founding Engineer"
                  period="April 2025 – Aug 2025"
                  summary="Building the company’s core systems, analytics, and customer-facing experiences with a focus on reliability, accessibility, and speed."
                />
                <WorkItem
                  icon="building"
                  company="Userology"
                  role="Frontend Developer Intern"
                  period="Jan 2025 – Mar 2025"
                  summary="Worked on maintaining their user research platform, implementing responsive UI improvements and new features."
                />
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="mt-8">
              <SectionHeading title="My Projects" subtitle="From frontend magic to backend systems" />
              <div className="space-y-4">
                <ProjectListItem
                  title="Market Pulse"
                  links={[
                    { label: "live preview ↗", href: "#" },
                    { label: "github ↗", href: "#" },
                  ]}
                  bullets={[
                    "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                    "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish), and voice navigation using Web Speech API.",
                    "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                  ]}
                  tags={["React", "TypeScript", "TailwindCSS", "Supabase", "Web Speech API"]}
                />
                <ProjectListItem
                  title="SQL QueryPilot"
                  links={[
                    { label: "live preview ↗", href: "#" },
                    { label: "github ↗", href: "#" },
                  ]}
                  bullets={[
                    "Converts natural language into SQL, reducing query time by 90% and improving accessibility for 250+ non-tech users.",
                    "Integrated editable SQL previews with live execution on 20+ databases.",
                    "Deployed on Streamlit Cloud with zero‑downtime CI/CD, sub‑2s results.",
                  ]}
                  tags={["Python", "Streamlit", "SQLite", "Google Gemini Pro"]}
                />
                <ProjectListItem
                  title="Personal Finance Tracker"
                  links={[
                    { label: "live preview ↗", href: "#" },
                    { label: "github ↗", href: "#" },
                  ]}
                  bullets={[
                    "Real‑time income/expense tracking used by 30+ users.",
                    "CSV import/export for 1000+ records using custom parsing.",
                    "Responsive Recharts for visualizations.",
                  ]}
                  tags={["ReactJS", "Firebase", "Firestore", "Recharts", "PapaParse"]}
                />
              </div>
              <div className="mt-3 flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  View all projects →
                </a>
              </div>
            </section>

            <section id="achievements" className="mt-8">
              <SectionHeading title="Achievements" />
              <ul className="space-y-4">
                <li>
                  <AchievementItem
                    title="Finalist – Call2Code Hackathon, MUJ"
                    date="April 2025"
                    description="AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams."
                    href="#"
                  />
                </li>
                <li>
                  <AchievementItem
                    title="Semi‑Finalist – BritBash Hackathon, NIT Kurukshetra"
                    date="March 2025"
                    description="Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams."
                    href="#"
                  />
                </li>
              </ul>
            </section>

            {/* Education */}
            <section className="mt-8">
              <SectionHeading title="Education" />
              <ul className="space-y-3 text-sm">
                <li className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">Maharaja Agrasen Institute of Technology</p>
                    <p className="text-neutral-500">B.Tech in Computer Science</p>
                  </div>
                  <span className="text-neutral-500">2023 – 2027</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">Siddhartha Public School</p>
                    <p className="text-neutral-500">Class XII (CBSE)</p>
                  </div>
                  <span className="text-neutral-500">2021 – 2023</span>
                </li>
                <li className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium">D.A.V. Public School</p>
                    <p className="text-neutral-500">Class X (CBSE)</p>
                  </div>
                  <span className="text-neutral-500">2010 – 2021</span>
                </li>
              </ul>
            </section>

            {/* Get in Touch */}
            <section className="mt-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                {"Let’s work together."}
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm text-neutral-500 dark:text-neutral-400">
                {
                  "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                }
              </p>

              {/* CTAs */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                <Button
                  size="sm"
                  asChild
                  className="h-9 rounded-md bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <a href="mailto:hello@example.com" aria-label="Get in touch via email">
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Get in touch</span>
                    </span>
                  </a>
                </Button>
              </div>

              {/* Social row */}
              <div className="mt-5 flex items-center justify-center gap-4 text-neutral-600 dark:text-neutral-300">
                <a
                  href="https://twitter.com/your_handle"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="mailto:hello@example.com"
                  aria-label="Email"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              {/* Availability + response time */}
              <p className="mt-6 text-xs text-neutral-500 dark:text-neutral-400">
                Currently available for freelance work and full‑time opportunities
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Response time: Usually within 24 hours
              </p>

              {/* Divider before footer */}
              <hr className="mx-auto mt-8 w-full border-t border-neutral-200 dark:border-neutral-800" />
            </section>
          </div>
        </article>
      </div>

      {/* Floating Dock */}
      <Dock />
    </main>
  )
}
