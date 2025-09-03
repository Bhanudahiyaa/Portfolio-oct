import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Bhanu Pratap Singh - Full Stack Developer | Portfolio",
  description:
    "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications. Currently working as Founding Engineer at a stealth startup. Available for opportunities.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Bhanu Pratap Singh",
    "Stealth Startup",
    "Founding Engineer",
    "Call2Code Hackathon",
    "BitBash",
    "MUJ",
    "NIT Kurukshetra",
    "Maharaja Agrasen Institute of Technology",
    "MAIT",
    "Best Portfolio",
    "Minimalist Portfolio",
    "69ftw",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Bhanu Pratap Singh" }],
  creator: "Bhanu Pratap Singh",
  publisher: "Bhanu Pratap Singh",
  generator: "Next.js",
  applicationName: "Bhanu Pratap Singh Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bhanupratap.dev",
    siteName: "Bhanu Pratap Singh Portfolio",
    title: "Bhanu Pratap Singh - Full Stack Developer",
    description:
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications. Currently working as Founding Engineer at a stealth startup.",
    images: [
      {
        url: "https://iili.io/KB9qfG1.png",
        width: 1200,
        height: 630,
        alt: "Bhanu Pratap Singh - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@iBhanuDahiya",
    creator: "@iBhanuDahiya",
    title: "Bhanu Pratap Singh - Full Stack Developer",
    description:
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications. Available for opportunities.",
    images: ["https://iili.io/KB9qfG1.png"],
  },
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    apple:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "bhanudahiya8@gmail.com",
    "contact:phone_number": "+91-9416293757",
    "contact:country_name": "India",
    "contact:region": "Delhi",
    "contact:locality": "New Delhi",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "Bhanu Pratap Singh - Full Stack Developer Portfolio",
    "og:site_name": "Bhanu Pratap Singh Portfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://bhanupratap.dev",
    "og:title": "Bhanu Pratap Singh - Full Stack Developer",
    "og:description":
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications. Currently working as Founding Engineer at a stealth startup.",
    "og:image": "https://iili.io/KB9qfG1.png",
    "twitter:image:alt": "Bhanu Pratap Singh - Full Stack Developer Portfolio",
    "twitter:domain": "bhanupratap.dev",
    "twitter:url": "https://bhanupratap.dev",
    "whatsapp:image": "https://iili.io/KB9qfG1.png",
    "whatsapp:title": "Bhanu Pratap Singh - Full Stack Developer",
    "whatsapp:description":
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
