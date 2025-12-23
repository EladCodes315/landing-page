"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Zap, Shield } from "lucide-react";
import { CALENDLY_URL } from "@/app/lib/links";

type Lang = "en" | "he";

type Copy = {
  lang: Lang;
  nav: {
    switchTo: { label: string; href: string };
    cta: string;
  };
  header: {
    tagline: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  trust: ReadonlyArray<{
    title: string;
    text: string;
    icon: "zap" | "sparkles" | "shield";
    badge: string;
  }>;
  problem: {
    title: string;
    p1: string;
    bullets: readonly string[];
    p2Title: string;
    p2: React.ReactNode;
    outcomeLabel: string;
    outcomeText: string;
  };
  services: {
    title: string;
    subtitle: string;
    cards: ReadonlyArray<{
      title: string;
      text: string;
      forWho: string;
    }>;
  };
  why: {
    title: string;
    bullets: readonly string[];
    note: string;
  };
  process: {
    title: string;
    steps: readonly string[];
    note: string;
  };
  proof: {
    title: string;
    text: string;
    items: readonly string[];
  };
  finalCta: {
    title: string;
    subtitle: string;
    primary: string;
    closing: string;
  };
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: 0.08 * i,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

function Icon({ name }: { name: "zap" | "sparkles" | "shield" }) {
  const cls = "h-5 w-5";
  if (name === "zap") return <Zap className={cls} />;
  if (name === "sparkles") return <Sparkles className={cls} />;
  return <Shield className={cls} />;
}

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-6xl px-6 ${className}`}>{children}</div>
  );
}

function SectionTitle({
  title,
  subtitle,
  align = "left",
}: {
  title: string;
  subtitle?: string;
  align?: "left" | "right";
}) {
  return (
    <div className={align === "right" ? "text-right" : "text-left"}>
      <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-neutral-900 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function Card({
  title,
  text,
  extra,
}: {
  title: string;
  text: string;
  extra?: React.ReactNode;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="group rounded-2xl border border-neutral-200/70 bg-white/80 p-6 shadow-sm backdrop-blur hover:shadow-md"
    >
      <h3 className="text-base font-semibold tracking-tight text-neutral-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{text}</p>
      {extra ? (
        <div className="mt-4 text-sm text-neutral-700">{extra}</div>
      ) : null}
      <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-neutral-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </motion.div>
  );
}

export function LandingShell({ copy }: { copy: Copy }) {
  const isHe = copy.lang === "he";

  return (
    <main
      dir={isHe ? "rtl" : "ltr"}
      className={`min-h-screen text-neutral-950 ${
        isHe ? "text-right" : "text-left"
      }`}
    >
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-neutral-50">
        <div className="absolute inset-0 bg-grid opacity-[0.35]" />
        <div className="absolute -top-24 left-1/2 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-teal-300/40 via-sky-300/30 to-indigo-300/35 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-300/25 via-sky-300/25 to-teal-300/25 blur-3xl" />
      </div>

      {/* Sticky Header */}
      <header className="sticky top-0 z-40 border-b border-neutral-200/60 bg-white/70 backdrop-blur shadow-sm">
        <Container className="py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-xl border border-neutral-200 bg-white shadow-sm">
                <span className="text-sm font-bold tracking-tight text-neutral-900">
                  EA
                </span>
              </div>

              <div className="leading-tight">
                <div className="text-sm font-semibold">EA Product Studios</div>
                <div className="text-xs text-neutral-600">
                  {copy.header.tagline}
                </div>
              </div>
            </div>

            <nav className="flex items-center gap-3 text-sm">
              <Link
                className="rounded-xl px-3 py-2 text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
                href={copy.nav.switchTo.href}
              >
                {copy.nav.switchTo.label}
              </Link>

              <Link
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-neutral-900 px-4 py-2 text-sm text-white shadow-sm transition hover:bg-neutral-800 active:scale-[0.99] sm:rounded-2xl sm:px-6 sm:py-3 sm:text-base"
              >
                {copy.nav.cta}
              </Link>
            </nav>
          </div>
        </Container>
      </header>

      {/* Hero */}
      <section className="pb-12 pt-12 sm:pb-16 sm:pt-20">
        <Container>
          <motion.div initial="hidden" animate="show" className="max-w-3xl">
            <motion.div custom={0} variants={fadeUp} className="mb-4">
              <Pill>
                <CheckCircle2 className="h-4 w-4 text-teal-600" />
                {copy.hero.eyebrow}
              </Pill>
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl"
            >
              <span className="bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-800 bg-clip-text text-transparent">
                {copy.hero.title}
              </span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              className="mt-5 text-lg leading-7 text-neutral-700"
            >
              {copy.hero.subtitle}
            </motion.p>

            <motion.div
              custom={3}
              variants={fadeUp}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:bg-neutral-800 active:scale-[0.99]"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.hero.primaryCta}
              </a>
              <a
                className="inline-flex items-center justify-center text-neutral-700 underline-offset-4 hover:underline"
                href="#services"
              >
                {copy.hero.secondaryCta}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-12 grid gap-6 sm:mt-10 sm:grid-cols-3 sm:gap-4"
          >
            {copy.trust.map((t, idx) => (
              <motion.div key={t.title} custom={idx} variants={fadeUp}>
                <Card
                  title={t.title}
                  text={t.text}
                  extra={
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                        <Icon name={t.icon} />
                      </span>
                      <span className="text-sm text-neutral-700">
                        {t.badge}
                      </span>
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Problem */}
      <section className="py-16 sm:py-14">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid gap-10 md:grid-cols-2"
          >
            <motion.div custom={0} variants={fadeUp}>
              <SectionTitle
                title={copy.problem.title}
                align={isHe ? "right" : "left"}
              />
              <p className="mt-4 text-base leading-7 text-neutral-700">
                {copy.problem.p1}
              </p>
              <ul
                className={`mt-4 space-y-2 text-sm text-neutral-700 ${
                  isHe ? "pr-5" : "pl-5"
                } list-disc`}
              >
                {copy.problem.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div custom={1} variants={fadeUp}>
              <div className="rounded-3xl border border-neutral-200/70 bg-white/80 p-7 shadow-sm backdrop-blur">
                <h3 className="text-lg font-semibold text-neutral-950">
                  {copy.problem.p2Title}
                </h3>
                <div className="mt-3 text-sm leading-6 text-neutral-700">
                  {copy.problem.p2}
                </div>

                <div className="mt-6 rounded-2xl bg-gradient-to-r from-teal-50 via-sky-50 to-indigo-50 p-4 text-sm text-neutral-800">
                  <span className="font-semibold">
                    {copy.problem.outcomeLabel}
                  </span>{" "}
                  {copy.problem.outcomeText}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* Services */}
      <section id="services" className="py-16 sm:py-14">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
            variants={fadeUp}
          >
            <SectionTitle
              title={copy.services.title}
              subtitle={copy.services.subtitle}
              align={isHe ? "right" : "left"}
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="mt-8 grid gap-4 md:grid-cols-3"
          >
            {copy.services.cards.map((c, idx) => (
              <motion.div key={c.title} custom={idx} variants={fadeUp}>
                <Card
                  title={c.title}
                  text={c.text}
                  extra={
                    <div className="mt-2 text-xs text-neutral-500">
                      <span className="font-semibold text-neutral-700">
                        {isHe ? "למי מתאים:" : "Ideal for:"}
                      </span>{" "}
                      {c.forWho}
                    </div>
                  }
                />
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Why + Process + Proof */}
      <section className="py-14">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={0}
              variants={fadeUp}
              className="rounded-3xl border border-neutral-200/70 bg-white/80 p-7 shadow-sm backdrop-blur md:col-span-1"
            >
              <SectionTitle
                title={copy.why.title}
                align={isHe ? "right" : "left"}
              />
              <ul
                className={`mt-4 space-y-2 text-sm text-neutral-700 ${
                  isHe ? "pr-5" : "pl-5"
                } list-disc`}
              >
                {copy.why.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-neutral-600">{copy.why.note}</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={1}
              variants={fadeUp}
              className="rounded-3xl border border-neutral-200/70 bg-white/80 p-7 shadow-sm backdrop-blur md:col-span-1"
            >
              <SectionTitle
                title={copy.process.title}
                align={isHe ? "right" : "left"}
              />
              <ol
                className={`mt-4 space-y-2 text-sm text-neutral-700 ${
                  isHe ? "pr-5" : "pl-5"
                } list-decimal`}
              >
                {copy.process.steps.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
              <p className="mt-4 text-sm text-neutral-600">
                {copy.process.note}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
              variants={fadeUp}
              className="rounded-3xl border border-neutral-200/70 bg-white/80 p-7 shadow-sm backdrop-blur md:col-span-1"
            >
              <SectionTitle
                title={copy.proof.title}
                align={isHe ? "right" : "left"}
              />
              <p className="mt-4 text-sm leading-6 text-neutral-700">
                {copy.proof.text}
              </p>

              <div className="mt-6 grid gap-3">
                {copy.proof.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-neutral-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-teal-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="pb-20 pt-10">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-3xl border border-neutral-200/70 bg-white/80 p-8 shadow-sm backdrop-blur"
          >
            <motion.div custom={0} variants={fadeUp}>
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
                {copy.finalCta.title}
              </h2>
              <p className="mt-2 max-w-2xl text-base leading-7 text-neutral-600">
                {copy.finalCta.subtitle}
                <br />
                {copy.finalCta.closing}
              </p>
            </motion.div>

            <motion.div
              custom={1}
              variants={fadeUp}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
            >
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-neutral-900 px-6 py-3 text-white shadow-sm transition hover:bg-neutral-800"
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                {copy.finalCta.primary}
              </a>
            </motion.div>
          </motion.div>

          <div className="mt-10 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} EA Product Studios
          </div>
        </Container>
      </section>
    </main>
  );
}
