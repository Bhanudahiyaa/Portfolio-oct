import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { WorkItem } from "@/components/work-item";
import { ProjectListItem } from "@/components/project-list-item";
import { AchievementItem } from "@/components/achievement-item";
import { Dock } from "@/components/dock";
import { SkillsDraggable } from "@/components/skills-draggable";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  return (
    <main className="min-h-dvh bg-grid pb-28 pt-6 dark:bg-neutral-950">
      <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 md:px-6 lg:px-8 text-xs text-neutral-600 dark:text-neutral-300">
        <Link
          href="#"
          className="font-semibold text-neutral-900 dark:text-neutral-50"
        >
          bhanu.
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#experience"
            className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
          >
            experience
          </a>
          <a
            href="#projects"
            className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
          >
            projects
          </a>
          <a
            href="#achievements"
            className="hover:text-neutral-900 dark:hover:text-neutral-50 text-xs sm:text-xs"
          >
            achievements
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
        <article
          aria-label="Portfolio"
          className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="p-4 md:p-6 lg:p-6">
            {/* Header */}
            <header id="about" className="space-y-2 section-lines p-4">
              <p className="text-xs text-neutral-500">hi there 😊, I'm</p>
              <div className="flex items-center gap-3">
                <Avatar className="h-16 w-16 ring-2  ring-neutral-200 dark:ring-neutral-900">
                  <AvatarImage
                    src="https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU"
                    alt="Bhanu Pratap Singh"
                  />
                  <AvatarFallback>BP</AvatarFallback>
                </Avatar>
                <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
                  Bhanu Pratap Singh
                </h1>
              </div>
              <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
                <span>20, he/him</span>
                <span className="hidden sm:inline">{"||"}</span>
                <span className="max-w-[38ch]">
                  Full Stack Developer from India.
                </span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
                <Button
                  size="sm"
                  asChild
                  className="h-6 w-19 rounded-sm bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <a
                    href="https://drive.google.com/file/d/1m-0VhgvIMA1F-nX1upAT-HbgcDE52LQw/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View Resume"
                  >
                    Resume
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a
                    href="mailto:bhanudahiya8@gmail.com"
                    aria-label="Send email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a
                    href="https://twitter.com/iBhanuDahiya"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a
                    href="https://github.com/bhanudahiyaa"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  asChild
                  className="h-6 w-6 rounded-sm border border-neutral-200 p-0 text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  <a
                    href="https://www.linkedin.com/in/bhanupratap1/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Open LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </header>

            {/* Bio */}
            <section className="mt-4 m-2 justify-center iterms-center  text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
              <p>
                A 20 year-old developer from India who loves building{" "}
                <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
                  efficient, scalable, and intuitive applications.
                </span>{" "}
                With over a year of hands-on experience, I previously worked at
                a US-based startup and am now building a stealth startup as a
                Founding engineer.
              </p>
            </section>

            {/* Work Experience */}
            <section id="experience" className="mt-6 section-lines p-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Work Experience.
              </h3>
              <div className="mt-3 space-y-3">
                <WorkItem
                  icon="shield"
                  company="Stealth"
                  role="Founding Engineer"
                  period="August 2025 – Present"
                  summary="Built the backend from scratch and architected a scalable, production-ready platform, implementing robust development workflows and optimized system architecture."
                  logoUrl="https://media.licdn.com/dms/image/v2/D560BAQGZmytIy-1DPA/company-logo_100_100/B56ZZYBgQTGUAQ-/0/1745233511985/timelyai_logo?e=1759968000&v=beta&t=8s7TdAMSna9DLYYarkHC5TiVmxqvQojuUeKOZTdzYkg"
                />
                <WorkItem
                  icon="building"
                  company="FirstContact"
                  role="Backend Developer Intern"
                  period="June 2025 – August 2025"
                  summary="Maintained backend for dynamic CMS content and workflows, fixed server-side bugs, and optimized data handling to reduce downtime."
                  logoUrl="https://media.licdn.com/dms/image/v2/C4D0BAQHKECKlMF9lJA/company-logo_200_200/company-logo_200_200/0/1674622682688/first_contact_lgbt_logo?e=1759968000&v=beta&t=nWT0dmlKCxa7Sdl2Wq3K5d1xFlclzNANqvS94Cx2Y7s"
                />
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="mt-8 section-lines p-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Projects.
              </h3>
              <div className="space-y-2">
                <ProjectListItem
                  title="Market Pulse"
                  links={[
                    {
                      label: "live preview ↗",
                      href: "https://call2-codecore4.vercel.app/",
                    },
                    {
                      label: "github ↗",
                      href: "https://github.com/Bhanudahiyaa/Call2Code",
                    },
                  ]}
                  bullets={[
                    "Built in 24 hours at Call2Code Hackathon (MUJ) and selected as a finalist among 100+ teams.",
                    "Developed 12+ features: real-time charts, multilingual support (English, Hindi, Spanish),voice navigation using Web Speech API.",
                    "Integrated APIs for real-time financial analytics and sentiment analysis across 50+ tickers.",
                  ]}
                  tags={["React", "TypeScript", "TailwindCSS", "Supabase"]}
                />
                <ProjectListItem
                  title="SQL QueryPilot"
                  links={[
                    {
                      label: "live preview ↗",
                      href: "https://sql-querypilot.streamlit.app/",
                    },
                    {
                      label: "github ↗",
                      href: "https://github.com/Bhanudahiyaa/SQL-QueryPilot",
                    },
                  ]}
                  bullets={[
                    "Converts natural language into SQL, reducing query time by 90% and improving accessibility non-tech users.",
                    "Editable SQL previews with live execution on 20+ databases.",
                    "Deployed on Streamlit Cloud with zero‑downtime CI/CD.",
                  ]}
                  tags={["Python", "Streamlit", "SQLite", "Google Gemini Pro"]}
                />
                <ProjectListItem
                  title="Personal Finance Tracker"
                  links={[
                    {
                      label: "live preview ↗",
                      href: "https://ledger-uwu-znsd.vercel.app/",
                    },
                    {
                      label: "github ↗",
                      href: "https://github.com/Bhanudahiyaa/Ledger-uwu",
                    },
                  ]}
                  bullets={[
                    "Real‑time income/expense tracking used by 30+ users.",
                    "CSV import/export for 1000+ records using custom parsing.",
                    "Responsive Recharts for visualizations.",
                  ]}
                  tags={[
                    "ReactJS",
                    "Firebase",
                    "Firestore",
                    "Recharts",
                    "PapaParse",
                  ]}
                />
              </div>
              <div className="mt-3 flex justify-center">
                <a
                  href="https://github.com/Bhanudahiyaa"
                  className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
                >
                  View all projects →
                </a>
              </div>
            </section>

            <section id="achievements" className="mt-8 section-lines p-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Achievements.
              </h3>
              <ul className="space-y-2">
                <li>
                  <AchievementItem
                    title="Finalist – Call2Code Hackathon, MUJ"
                    date="April 2025"
                    description="AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams."
                  />
                </li>
                <li>
                  <AchievementItem
                    title="Semi‑Finalist – BitBash, NIT Kurukshetra"
                    date="March 2025"
                    description="Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams."
                  />
                </li>
              </ul>
            </section>
            {/* Skills */}
            <section className="mt-5 section-lines p-4">
              <SkillsDraggable />
            </section>

            {/* Education */}
            <section className="mt-8 section-lines p-4">
              <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
                Education.
              </h3>
              <ul className="space-y-2">
                <li>
                  <AchievementItem
                    title="Maharaja Agrasen Institute of Technology"
                    date="2023 – 2027"
                    description="B.Tech in ECE"
                  />
                </li>
                <li>
                  <AchievementItem
                    title="Jankidas Kapur Public School"
                    date="2021 – 2023"
                    description="Class XII (CBSE)"
                  />
                </li>
              </ul>
            </section>

            {/* Get in Touch */}
            <section className="mt-8 text-center section-lines p-6">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
                {"Let's work together."}
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
                {
                  "I'm always interested in new opportunities and exciting projects. Whether you have a project in mind or just want to chat about tech, I'd love to hear from you."
                }
              </p>

              {/* CTAs */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                <Button
                  size="sm"
                  asChild
                  className="h-9 rounded-md bg-neutral-900 px-4 text-white shadow-sm hover:bg-neutral-900/90 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
                >
                  <a
                    href="mailto:bhanudahiya8@gmail.com"
                    aria-label="Get in touch via email"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>Get in touch</span>
                    </span>
                  </a>
                </Button>
              </div>

              {/* Social row */}
              <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
                <a
                  href="https://twitter.com/iBhanuDahiya"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://github.com/bhanudahiyaa"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/bhanupratap1/"
                  aria-label="Open LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50 dark:border-neutral-800 dark:hover:bg-neutral-900"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>

              {/* Availability + response time */}
              <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
                Currently available for freelance work and full‑time
                opportunities
              </p>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Response time: Usually within 24 hours
              </p>

              {/* Divider before footer */}
            </section>
          </div>
        </article>
      </div>

      {/* Floating Dock */}
      <Dock />
    </main>
  );
}
