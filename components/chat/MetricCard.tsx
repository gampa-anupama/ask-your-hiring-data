// type Props = {
//   value: number;
//   title: string;
// };

// export default function MetricCard({
//   value,
//   title,
// }: Props) {
//   return (
//     <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">
//       <p className="text-sm uppercase tracking-widest text-blue-100">
//         {title}
//       </p>

//       <h1 className="mt-3 text-6xl font-bold">
//         {value}
//       </h1>

//       <div className="mt-6 h-1 rounded-full bg-white/30" />

//       <p className="mt-3 text-blue-100">
//         Updated just now
//       </p>
//     </div>
//   );
// }
"use client";

import { TrendingUp } from "lucide-react";

type Props = {
  value: number;
  title: string;
};

export default function MetricCard({
  value,
  title,
}: Props) {
  return (
    <div
      className="
      overflow-hidden
      rounded-[26px]
      border
      border-[var(--border)]
      bg-[var(--surface)]
      shadow-xl
    "
    >
      {/* Top Accent */}

      <div
        className="
        h-1
        w-full
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-blue-600
      "
      />

      <div className="p-8">

        <div className="flex items-center justify-between">

          <div>

            <p
              className="
              text-sm
              uppercase
              tracking-[3px]
              text-[var(--muted)]
            "
            >
              {title}
            </p>

            <h1
              className="
              mt-5
              text-6xl
              font-bold
              text-[var(--text)]
            "
            >
              {value}
            </h1>

          </div>

          <div
            className="
            rounded-2xl
            bg-indigo-500/15
            p-4
          "
          >
            <TrendingUp
              size={32}
              className="text-indigo-400"
            />
          </div>

        </div>

        <div
          className="
          mt-8
          flex
          items-center
          justify-between
        "
        >
          <span
            className="
            rounded-full
            bg-indigo-500/10
            border
            border-indigo-500/20
            px-4
            py-2
            text-sm
            font-medium
            text-indigo-300
          "
          >
            Live Analytics
          </span>

          <span
            className="
            text-sm
            text-[var(--muted)]
          "
          >
            Updated just now
          </span>

        </div>

      </div>

    </div>
  );
}