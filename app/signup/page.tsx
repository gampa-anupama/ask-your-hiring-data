"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  User,
  Mail,
  Lock,
  ArrowRight,
} from "lucide-react";

export default function SignupPage() {
    const router = useRouter();

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "HR",
});
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6">

      <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-[var(--border)] bg-[var(--surface)] shadow-2xl lg:grid-cols-2">

        {/* Left */}

        <div className="hidden bg-gradient-to-br from-indigo-600 via-violet-600 to-blue-600 p-14 text-white lg:flex lg:flex-col lg:justify-between">

          <div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-2xl font-bold">
              H
            </div>

            <h1 className="mt-10 text-5xl font-bold leading-tight">
              Create Account
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Join Hiring Intelligence AI and start exploring recruitment
              analytics powered by AI.
            </p>

          </div>

          <div className="space-y-4">

            {[
              "AI Recruitment Analytics",
              "Role Based Workspace",
              "Interactive Dashboard",
              "Gemini Powered Insights",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-white" />
                <span>{item}</span>
              </div>
            ))}

          </div>

        </div>

        {/* Right */}

        <div className="p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-[var(--text)]">
            Sign Up
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            Create your workspace in less than a minute.
          </p>

          <form className="mt-8 space-y-5">

            {/* Name */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Full Name
              </label>

              <div className="relative">

                <User
                  size={18}
                  className="absolute left-4 top-4 text-[var(--muted)]"
                />

                <input
  type="text"
  placeholder="John Doe"
  value={form.name}
  onChange={(e) =>
    setForm({
      ...form,
      name: e.target.value,
    })
  }
  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] pl-12 pr-4 outline-none focus:border-indigo-500"
/>

              </div>

            </div>

            {/* Email */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Email
              </label>

              <div className="relative">

                <Mail
                  size={18}
                  className="absolute left-4 top-4 text-[var(--muted)]"
                />

                <input
  type="email"
  placeholder="john@gmail.com"
  value={form.email}
  onChange={(e) =>
    setForm({
      ...form,
      email: e.target.value,
    })
  }
  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] pl-12 pr-4 outline-none focus:border-indigo-500"
/>

              </div>

            </div>

            {/* Password */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-4 text-[var(--muted)]"
                />

                <input
  type="password"
  placeholder="Create password"
  value={form.password}
  onChange={(e) =>
    setForm({
      ...form,
      password: e.target.value,
    })
  }
  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] pl-12 pr-4 outline-none focus:border-indigo-500"
/>

              </div>

            </div>

            {/* Confirm */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Confirm Password
              </label>

              <div className="relative">

                <Lock
                  size={18}
                  className="absolute left-4 top-4 text-[var(--muted)]"
                />

                <input
  type="password"
  placeholder="Confirm password"
  value={form.confirmPassword}
  onChange={(e) =>
    setForm({
      ...form,
      confirmPassword: e.target.value,
    })
  }
  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] pl-12 pr-4 outline-none focus:border-indigo-500"
/>

              </div>

            </div>

            {/* Role */}

            <div>

              <label className="mb-2 block text-sm font-semibold">
                Select Role
              </label>

              <select
  value={form.role}
  onChange={(e) =>
    setForm({
      ...form,
      role: e.target.value,
    })
  }
  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-2)] px-4 outline-none focus:border-indigo-500"
>
                <option>HR</option>
                <option>RECRUITER</option>
                <option>ADMIN</option>
              </select>

            </div>

            <button
  type="button"
  disabled={loading}
  onClick={async () => {

    // Validation

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {

      setLoading(true);

      const response = await fetch("/api/signup", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          role: form.role,
        }),

      });

      const data = await response.json();

      alert(data.message);

      if (response.ok) {
        router.push("/login");
      }

    } catch (error) {

      console.error(error);

      alert("Something went wrong.");

    } finally {

      setLoading(false);

    }

  }}
  className="
    flex
    h-12
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-gradient-to-r
    from-indigo-600
    via-violet-600
    to-blue-600
    font-semibold
    text-white
    transition
    hover:scale-[1.02]
    disabled:opacity-50
  "
>
  {loading ? "Creating..." : "Create Account"}

  <ArrowRight size={18} />
</button>
          </form>

          <div className="mt-8 text-center text-sm text-[var(--muted)]">

            Already have an account?{" "}

            <Link
              href="/login"
              className="font-semibold text-indigo-500 hover:underline"
            >
              Login
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}