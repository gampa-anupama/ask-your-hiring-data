"use client";

import {
  Search,
  Moon,
  Sun,
  Bell,
  Sparkles,
  ChevronDown,
} from "lucide-react";

import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="
      sticky
      top-0
      z-50
      flex
      h-20
      items-center
      justify-between
      border-b
      border-[var(--border)]
      bg-[var(--surface)]
      px-8
      backdrop-blur-xl
    "
    >
      {/* Left */}

      <div>

        <div className="flex items-center gap-3">

          <Sparkles
            size={22}
            className="text-lime-400"
          />

          <h1
            className="
            text-3xl
            font-bold
            text-[var(--text)]
          "
          >
            Ask Your Hiring Data
          </h1>

        </div>

        <p
          className="
          mt-1
          text-sm
          text-[var(--muted)]
        "
        >
          AI Powered Hiring Analytics
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="
            absolute
            left-4
            top-3.5
            text-[var(--muted)]
          "
          />

          <input
            placeholder="Search chats..."
            className="
            h-11
            w-80
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface-2)]
            pl-11
            pr-4
            text-sm
            text-[var(--text)]
            placeholder:text-[var(--muted)]
            transition
            focus:border-lime-400
            focus:outline-none
          "
          />

        </div>

        {/* Theme Toggle */}

        <button
          onClick={() =>
            setTheme(
              theme === "dark"
                ? "light"
                : "dark"
            )
          }
          className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          transition
          hover:bg-[var(--surface-2)]
        "
        >
          {theme === "dark" ? (
            <Sun size={18} />
          ) : (
            <Moon size={18} />
          )}
        </button>

        {/* Notification */}

        <button
          className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          transition
          hover:bg-[var(--surface-2)]
        "
        >
          <Bell size={18} />

          <span
            className="
            absolute
            right-2
            top-2
            h-2
            w-2
            rounded-full
            bg-red-500
          "
          />

        </button>

        {/* User */}

        <button
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-3
          py-2
          transition
          hover:bg-[var(--surface-2)]
        "
        >

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-lime-400
            font-bold
            text-black
          "
          >
            A
          </div>

          <div className="text-left">

            <p
              className="
              text-sm
              font-semibold
              text-[var(--text)]
            "
            >
              Anupama
            </p>

            <p
              className="
              text-xs
              text-[var(--muted)]
            "
            >
              AI Engineer
            </p>

          </div>

          <ChevronDown
            size={16}
            className="text-[var(--muted)]"
          />

        </button>

      </div>

    </header>
  );
}