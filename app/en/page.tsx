import type { Metadata } from "next";
import { LandingShell } from "@/app/components/landing/LandingShell";

export const metadata: Metadata = {
  title: "EA Product Studios | MVP Builder / Product Engineer",
  description:
    "Building MVPs that turn ideas into real products. MVP Builder & Product Engineer helping early-stage startups go from idea to production — fast, focused, and scalable.",
};

export default function Page() {
  const copy = {
    lang: "en",
    nav: {
      switchTo: { label: "HE", href: "/he" },
      cta: "Schedule a free intro call",
    },
    header: {
      tagline: "Building MVPs that turn ideas into real products",
    },
    hero: {
      eyebrow: "MVP Builder / Product Engineer",
      title: "Building MVPs that turn ideas into real products",
      subtitle:
        "MVP Builder & Product Engineer helping early-stage startups go from idea to production — fast, focused, and scalable.",
      primaryCta: "Schedule a free intro call",
      secondaryCta: "See services",
    },
    trust: [
      {
        title: "Fast to market",
        text: "Build an MVP in weeks, not months — with clear scope and milestones.",
        icon: "zap",
      },
      {
        title: "Product mindset",
        text: `I focus on shipping the right thing — not just "more code".`,
        icon: "sparkles",
      },
      {
        title: "Production-ready",
        text: "Clean architecture and a strong foundation for growth.",
        icon: "shield",
      },
    ],
    trustBadge: "Product-grade delivery",
    problem: {
      title: "Problem → Solution",
      p1: "You have an idea — but getting to a real product feels hard.",
      bullets: [
        "You know what you want to build, but not how",
        "Development feels slow, messy, or overwhelming",
        "You're unsure what should actually be built first",
      ],
      p2Title: "That's where I come in",
      p2: (
        <>
          I work as a <strong>Product Engineer</strong>, not just a developer —
          helping you build the <strong>right MVP</strong>, not just write code.
        </>
      ),
      outcomeLabel: "Outcome:",
      outcomeText:
        "MVP you can demo, sell, and grow — with a clean foundation.",
    },
    services: {
      title: "Services",
      subtitle:
        "What I help you build — from a first MVP to ongoing product growth.",
      cards: [
        {
          title: "MVP Sprint",
          text: "From idea to a production-ready MVP in weeks, not months.",
          forWho: "Early-stage founders validating a new product",
        },
        {
          title: "Product Extension",
          text: "Build major features, dashboards, or internal tools for existing products.",
          forWho: "Teams that need a meaningful feature shipped",
        },
        {
          title: "Product Retainer",
          text: "Ongoing product & engineering support as your startup grows.",
          forWho: "Startups that need steady velocity and ownership",
        },
      ],
    },
    why: {
      title: "Why me",
      bullets: [
        "Product mindset — not just development",
        "Backend-oriented Fullstack engineer",
        "Real startup experience",
        "End-to-end ownership: idea → code → production",
      ],
      note: "I care about shipping the right thing, cleanly and sustainably.",
    },
    process: {
      title: "How it works",
      steps: [
        "Short discovery call",
        "Clear scope & milestones",
        "Build, iterate & launch",
        "Optional ongoing support",
      ],
      note: "Simple, transparent, and focused.",
    },
    proof: {
      title: "Experience / Proof",
      text: "I've worked on production backend systems, internal dashboards, scalable architectures, and end-to-end MVPs used by real users.",
      items: [
        "Dashboards & admin tools",
        "Production APIs & auth",
        "Clean architecture for growth",
      ],
    },
    finalCta: {
      title: "Ready to build your MVP?",
      subtitle: "Let’s talk and see if we’re a good fit.",
      primary: "Schedule a free intro call",
      switchLang: "עברית",
      closing: "Free 15-minute intro call. I usually reply within 24 hours.",
    },
    footer: "",
  } as const;

  return <LandingShell copy={copy} />;
}
