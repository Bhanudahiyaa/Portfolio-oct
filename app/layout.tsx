import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

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
  title: "Devfolio BD",
  description: "Portfolio",
  generator: "Bhanu",
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    apple:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
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
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-dvh">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
