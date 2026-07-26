"use client";

import { Moon, Bell, User, BrainCircuit } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-3 text-[var(--muted)]">
          Manage your workspace preferences.
        </p>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <div className="flex items-center gap-4">

            <User className="text-indigo-500" />

            <h2 className="text-xl font-semibold">
              Profile
            </h2>

          </div>

          <div className="mt-6 space-y-4">

            <input
              value="Anupama"
              readOnly
              className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4"
            />

            <input
              value="AI Engineer"
              readOnly
              className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4"
            />

          </div>

        </div>

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <div className="flex items-center gap-4">

            <BrainCircuit className="text-indigo-500" />

            <h2 className="text-xl font-semibold">
              AI Provider
            </h2>

          </div>

          <select className="mt-6 h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4">

            <option>Gemini 2.5 Flash</option>

            <option>OpenAI GPT</option>

          </select>

        </div>

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <div className="flex items-center gap-4">

            <Moon className="text-indigo-500" />

            <h2 className="text-xl font-semibold">
              Appearance
            </h2>

          </div>

          <button
            className="
            mt-6
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            text-white
          "
          >
            Toggle Theme
          </button>

        </div>

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <div className="flex items-center gap-4">

            <Bell className="text-indigo-500" />

            <h2 className="text-xl font-semibold">
              Notifications
            </h2>

          </div>

          <label className="mt-6 flex items-center gap-3">

            <input type="checkbox" />

            Email Notifications

          </label>

        </div>

      </div>

    </div>
  );
}