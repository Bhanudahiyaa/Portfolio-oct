"use client";

import { useEffect } from "react";

export default function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Bhanu Pratap Singh",
      jobTitle: "Full Stack Developer",
      description:
        "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications.",
      url: "https://bhanupratap.dev",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
      email: "bhanudahiya8@gmail.com",
      nationality: "Indian",
      birthDate: "2005",
      gender: "Male",
      address: {
        "@type": "PostalAddress",
        addressCountry: "India",
        addressRegion: "Delhi",
        addressLocality: "New Delhi",
      },
      sameAs: [
        "https://www.linkedin.com/in/bhanupratap1/",
        "https://github.com/bhanudahiyaa",
        "https://twitter.com/iBhanuDahiya",
      ],
      knowsAbout: [
        "Full Stack Development",
        "React",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "Python",
        "Web Development",
        "Software Engineering",
        "Portfolio Development",
        "Minimalist Design",
        "Modern Web Design",
        "Student Portfolio",
        "Developer Portfolio",
        "Tech Portfolio",
        "Professional Portfolio",
      ],
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "Maharaja Agrasen Institute of Technology",
          alternateName: "MAIT",
          description: "B.Tech in Computer Science",
          url: "https://mait.ac.in",
        },
      ],
      worksFor: [
        {
          "@type": "Organization",
          name: "Stealth Startup",
          description: "Founding Engineer",
        },
      ],
      award: [
        {
          "@type": "Award",
          name: "Finalist – Call2Code Hackathon, MUJ",
          description:
            "AI‑powered stock market dashboard with multilingual voice commands, real‑time analytics, and sentiment analysis. Selected as a finalist among 100+ teams.",
          dateAwarded: "2025-04",
        },
        {
          "@type": "Award",
          name: "Semi‑Finalist – BitBash, NIT Kurukshetra",
          description:
            "Developed a real‑world solution under 24‑hour constraints; recognized among the top‑performing teams.",
          dateAwarded: "2025-03",
        },
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        description: "Building efficient, scalable, and intuitive applications",
        skills: [
          "React",
          "TypeScript",
          "Node.js",
          "JavaScript",
          "Python",
          "TailwindCSS",
          "Supabase",
          "Firebase",
          "Streamlit",
        ],
      },
    };

    try {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.text = JSON.stringify(structuredData);
      document.head.appendChild(script);

      return () => {
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Error adding structured data:", error);
    }
  }, []);

  return null;
}
