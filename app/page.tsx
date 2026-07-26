// import { redirect } from "next/navigation";

// export default function Home() {
//   redirect("/chat");
// }
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 font-bold text-white">
              H
            </div>

            <div>
              <h1 className="text-lg font-bold">
                Hiring Intelligence AI
              </h1>

              <p className="text-xs text-[var(--muted)]">
                AI Recruitment Platform
              </p>
            </div>

          </div>

          <nav className="hidden items-center gap-8 md:flex">

            <a href="#features" className="hover:text-indigo-500 transition">
              Features
            </a>

            <a href="#workflow" className="hover:text-indigo-500 transition">
              Workflow
            </a>

            <a href="#demo" className="hover:text-indigo-500 transition">
              Demo
            </a>

          </nav>

          <div className="flex gap-3">

            <Link
              href="/login"
              className="rounded-xl border border-[var(--border)] px-5 py-2 hover:bg-[var(--surface-2)]"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-5 py-2 font-semibold text-white"
            >
              Get Started
            </Link>

          </div>

        </div>

      </header>

      {/* ================= HERO ================= */}

      <section className="mx-auto flex max-w-7xl flex-col items-center px-8 py-28 text-center">

        <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-400">
          AI Powered Hiring Analytics
        </span>

        <h1 className="mt-8 max-w-5xl text-6xl font-extrabold leading-tight">

          Understand your hiring data

          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 bg-clip-text text-transparent">

            {" "}using Natural Language

          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--muted)]">

          Ask questions about recruitment, jobs,
          departments and hiring trends using plain
          English. Powered by Gemini AI, Query IR
          and interactive analytics.

        </p>

        <div className="mt-10 flex gap-5">

          <Link
            href="/signup"
            className="rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-xl"
          >
            Get Started
          </Link>

          <Link
            href="/chat"
            className="rounded-2xl border border-[var(--border)] px-8 py-4 hover:bg-[var(--surface-2)]"
          >
            Live Demo
          </Link>

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="mx-auto max-w-7xl px-8 pb-24"
      >

        <h2 className="mb-12 text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {[
            [
              "AI Analytics",
              "Ask questions naturally and receive instant insights."
            ],
            [
              "Query IR",
              "Natural language converted into structured analytics."
            ],
            [
              "Interactive Charts",
              "Bar charts, metrics and tables generated instantly."
            ],
            [
              "Role Based Access",
              "HR, Recruiter and Admin dashboards."
            ],
            [
              "Secure Validation",
              "Validated queries using Zod schemas."
            ],
            [
              "Lightning Fast",
              "Optimized analytics engine for rapid responses."
            ]
          ].map(([title, desc]) => (

            <div
              key={title}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 transition hover:-translate-y-2 hover:border-indigo-500/40"
            >

              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--muted)]">
                {desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= WORKFLOW ================= */}

      <section
        id="workflow"
        className="mx-auto max-w-7xl px-8 py-20"
      >

        <h2 className="mb-14 text-center text-4xl font-bold">
          How It Works
        </h2>

        <div className="grid gap-8 md:grid-cols-5">

          {[
            "Ask Question",
            "Gemini AI",
            "Query IR",
            "Analytics",
            "Dashboard"
          ].map((step) => (

            <div
              key={step}
              className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center"
            >

              <div className="mb-4 text-3xl font-bold text-indigo-500">
                →
              </div>

              <h3 className="font-semibold">
                {step}
              </h3>

            </div>

          ))}

        </div>

      </section>

      {/* ================= DEMO ================= */}

      <section
        id="demo"
        className="mx-auto max-w-7xl px-8 py-24"
      >

        <div className="rounded-[32px] border border-[var(--border)] bg-[var(--surface)] p-12 text-center">

          <h2 className="text-4xl font-bold">
            Live Demo
          </h2>

          <p className="mt-5 text-[var(--muted)]">
            Explore AI powered hiring analytics with
            charts, metrics and tables.
          </p>

          <Link
            href="/chat"
            className="mt-10 inline-block rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 px-8 py-4 font-semibold text-white"
          >
            Open Demo
          </Link>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="border-t border-[var(--border)] py-10">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-8">

          <div>

            <h3 className="font-bold">
              Hiring Intelligence AI
            </h3>

            <p className="mt-2 text-sm text-[var(--muted)]">
              AI Powered Recruitment Intelligence Platform
            </p>

          </div>

          <p className="text-sm text-[var(--muted)]">
            © 2026 All Rights Reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}