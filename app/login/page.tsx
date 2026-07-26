"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { Mail, Lock, ArrowRight } from "lucide-react";

export default function LoginPage() {
    const router = useRouter();

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
  email: "",
  password: "",
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
              Welcome Back
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/80">
              Continue exploring your AI powered recruitment analytics
              platform.
            </p>

          </div>

          <div className="space-y-4">

            {[
              "Natural Language Analytics",
              "Interactive Dashboards",
              "Role Based Access",
              "Gemini Powered AI",
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
            Sign In
          </h2>

          <p className="mt-3 text-[var(--muted)]">
            Login to continue to your workspace.
          </p>

          <form className="mt-10 space-y-6">

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
  placeholder="Enter your email"
  value={form.email}
  onChange={(e) =>
    setForm({
      ...form,
      email: e.target.value,
    })
  }
  className="
  h-12
  w-full
  rounded-xl
  border
  border-[var(--border)]
  bg-[var(--surface-2)]
  pl-12
  pr-4
  outline-none
  transition
  focus:border-indigo-500
"
/>

              </div>

            </div>

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
  placeholder="Enter password"
  value={form.password}
  onChange={(e) =>
    setForm({
      ...form,
      password: e.target.value,
    })
  }
  className="
  h-12
  w-full
  rounded-xl
  border
  border-[var(--border)]
  bg-[var(--surface-2)]
  pl-12
  pr-4
  outline-none
  transition
  focus:border-indigo-500
"
/>
              </div>

            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-sm">

                <input type="checkbox" />

                Remember me

              </label>

              <button
                type="button"
                className="text-sm text-indigo-500 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

           <button
  type="button"
  disabled={loading}
  onClick={async () => {

    setLoading(true);

    const result = await signIn("credentials", {

      email: form.email,

      password: form.password,

      redirect: false,

    });

    setLoading(false);

    if (result?.error) {

      alert("Invalid Email or Password.");

      return;

    }

    router.push("/workspace/dashboard");

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
"
>
  {loading ? "Signing In..." : "Login"}

  <ArrowRight size={18} />
</button>

          </form>

          <div className="mt-8 text-center text-sm text-[var(--muted)]">

            Don't have an account?{" "}

            <Link
              href="/signup"
              className="font-semibold text-indigo-500 hover:underline"
            >
              Create one
            </Link>

          </div>

        </div>

      </div>

    </main>
  );
}