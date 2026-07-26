// // "use client";

// // import { motion } from "framer-motion";
// // import {
// //   Bot,
// //   User,
// //   Copy,
// //   CheckCircle2,
// // } from "lucide-react";

// // import MetricCard from "./MetricCard";
// // import AnalyticsChart from "./Analytics";
// // import DataTable from "./DataTable";

// // type MessageProps = {
// //   sender: "user" | "assistant";
// //   text: string;

// //   metric?: {
// //     value: number;
// //     title: string;
// //   };

// //   chart?: {
// //     label: string;
// //     value: number;
// //   }[];

// //   table?: any[];
// // };

// // export default function Message({
// //   sender,
// //   text,
// //   metric,
// //   chart,
// //   table,
// // }: MessageProps) {
// //   const copy = () => navigator.clipboard.writeText(text);

// //   if (sender === "user") {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, y: 25 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         className="mb-8 flex justify-end"
// //       >
// //         <div className="max-w-2xl rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 text-white shadow-lg">

// //           <div className="mb-2 flex items-center gap-2">

// //             <User size={16} />

// //             <span className="text-sm font-semibold">
// //               You
// //             </span>

// //           </div>

// //           <p className="leading-7">
// //             {text}
// //           </p>

// //         </div>
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 25 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       className="mb-10"
// //     >
// //       <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

// //         {/* Header */}

// //         <div className="flex items-center justify-between border-b border-slate-100 px-7 py-5">

// //           <div className="flex items-center gap-3">

// //             <div className="rounded-full bg-blue-100 p-3">

// //               <Bot
// //                 className="text-blue-600"
// //                 size={20}
// //               />

// //             </div>

// //             <div>

// //               <h3 className="font-semibold text-slate-800">
// //                 Hiring AI
// //               </h3>

// //               <p className="text-sm text-slate-500">
// //                 Analytics Assistant
// //               </p>

// //             </div>

// //           </div>

// //           <button
// //             onClick={copy}
// //             className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100"
// //           >
// //             <Copy size={16} />
// //           </button>

// //         </div>

// //         {/* Body */}

// //         <div className="space-y-8 p-8">

// //           {/* Summary */}

// //           <section>

// //             <h4 className="mb-3 flex items-center gap-2 font-semibold text-slate-700">

// //               <CheckCircle2
// //                 size={18}
// //                 className="text-green-600"
// //               />

// //               Summary

// //             </h4>

// //             <div className="rounded-2xl bg-slate-50 p-5 leading-8 whitespace-pre-wrap text-slate-700">
// //               {text}
// //             </div>

// //           </section>

// //           {/* Metric */}

// //           {metric && (
// //             <section>

// //               <h4 className="mb-4 text-lg font-semibold text-slate-700">
// //                 Metrics
// //               </h4>

// //               <MetricCard
// //                 value={metric.value}
// //                 title={metric.title}
// //               />

// //             </section>
// //           )}

// //           {/* Chart */}

// //           {chart && chart.length > 0 && (
// //             <section>

// //               <h4 className="mb-4 text-lg font-semibold text-slate-700">
// //                 Analytics
// //               </h4>

// //               <AnalyticsChart
// //                 data={chart}
// //               />

// //             </section>
// //           )}

// //           {/* Table */}

// //           {table && table.length > 0 && (
// //             <section>

// //               <h4 className="mb-4 text-lg font-semibold text-slate-700">
// //                 Results
// //               </h4>

// //               <DataTable
// //                 rows={table}
// //               />

// //             </section>
// //           )}

// //         </div>

// //       </div>
// //     </motion.div>
// //   );
// // }
// "use client";

// import { motion } from "framer-motion";
// import {
//   Bot,
//   User,
//   Copy,
//   CheckCircle2,
//   BarChart3,
//   Table2,
//   Sparkles,
// } from "lucide-react";

// import MetricCard from "./MetricCard";
// import AnalyticsChart from "./Analytics";
// import DataTable from "./DataTable";

// type MessageProps = {
//   sender: "user" | "assistant";
//   text: string;

//   metric?: {
//     title: string;
//     value: number;
//   };

//   chart?: {
//     label: string;
//     value: number;
//   }[];

//   table?: any[];
// };

// export default function Message({
//   sender,
//   text,
//   metric,
//   chart,
//   table,
// }: MessageProps) {
//   const copy = () => navigator.clipboard.writeText(text);

//   /* ---------------- USER ---------------- */

//   if (sender === "user") {
//     return (
//       <motion.div
//         initial={{ opacity: 0, x: 30 }}
//         animate={{ opacity: 1, x: 0 }}
//         className="mb-8 flex justify-end"
//       >
//         <div
//           className="
//           max-w-2xl
//           rounded-[30px]
//           bg-lime-400
//           px-6
//           py-4
//           text-black
//           shadow-2xl
//           hover:shadow-indigo-500/10
//           transition-all
//           duration-300
//         "
//         >
//           <div className="mb-2 flex items-center gap-2">

//             <User size={16} />

//             <span className="font-semibold tracking-wide text-[var(--text)]">
//               You
//             </span>

//           </div>

//           <p className="leading-8 whitespace-pre-wrap">
//             {text}
//           </p>

//         </div>
//       </motion.div>
//     );
//   }

//   /* ---------------- ASSISTANT ---------------- */

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: .35 }}
//       className="mb-10"
//     >
//       <div
//         className="
//         overflow-hidden
//         rounded-[32px]
//         border
//         border-[var(--border)]
//         bg-[var(--surface)]
//         shadow-xl
//       "
//       >
//         {/* HEADER */}

//         <div
//           className="
//           flex
//           items-center
//           justify-between
//           border-b
//           border-[var(--border)]
//           px-8
//           py-6
//         "
//         >
//           <div className="flex items-center gap-4">

//             <div
//               className="
//               flex
//               h-12
//               w-12
//               items-center
//               justify-center
//               rounded-2xl
//               bg-lime-400
//               text-black
//             "
//             >
//               <Bot size={22} />
//             </div>

//             <div>

//               <h2 className="font-bold text-lg">
//                 Hiring AI
//               </h2>

//               <p className="text-sm text-[var(--muted)]">
//                 Analytics Assistant
//               </p>

//             </div>

//           </div>

//           <button
//             onClick={copy}
//             className="
//             rounded-xl
//             border
//             border-[var(--border)]
//             p-3
//             transition
//             hover:bg-gradient-to-br
//               from-[var(--surface-2)]
//               to-slate-900/40
//               border
//               border-[var(--border)]
//           "
//           >
//             <Copy size={18} />
//           </button>

//         </div>

//         {/* BODY */}

//         <div className="space-y-8 p-8">

//           {/* Summary */}

//           <section>

//             <div className="mb-4 flex items-center gap-2">

//               <CheckCircle2
//                 size={18}
//                 className="text-indigo-400"
//               />

//               <h3 className="font-semibold">
//                 Summary
//               </h3>

//             </div>

//             <div
//               className="
//               rounded-2xl
//               bg-[var(--surface-2)]
//               p-6
//               leading-8
//               whitespace-pre-wrap
//             "
//             >
//               {text}
//             </div>

//           </section>

//           {/* Metric */}

//           {metric && (

//             <section>

//               <div className="mb-5 flex items-center gap-2">

//                 <Sparkles
//                   size={18}
//                   className="text-indigo-400"
//                 />

//                 <h3 className="font-semibold">
//                   Key Metric
//                 </h3>

//               </div>

//               <MetricCard
//                 title={metric.title}
//                 value={metric.value}
//               />

//             </section>

//           )}

//           {/* Chart */}

//           {chart && chart.length > 0 && (

//             <section>

//               <div className="mb-5 flex items-center gap-2">

//                 <BarChart3
//                   size={18}
//                   className="tetext-indigo-400"
//                 />

//                 <h3 className="font-semibold">
//                   Visualization
//                 </h3>

//               </div>

//               <AnalyticsChart
//                 data={chart}
//               />

//             </section>

//           )}

//           {/* Table */}

//           {table && table.length > 0 && (

//             <section>

//               <div className="mb-5 flex items-center gap-2">

//                 <Table2
//                   size={18}
//                   className="text-indigo-400"
//                 />

//                 <h3 className="font-semibold">
//                   Results
//                 </h3>

//               </div>

//               <DataTable
//                 rows={table}
//               />

//             </section>

//           )}

//         </div>

//       </div>
//     </motion.div>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Bot,
  User,
  Copy,
  CheckCircle2,
  BarChart3,
  Table2,
  Sparkles,
} from "lucide-react";

import MetricCard from "./MetricCard";
import AnalyticsChart from "./Analytics";
import DataTable from "./DataTable";

type MessageProps = {
  sender: "user" | "assistant";
  text: string;

  metric?: {
    title: string;
    value: number;
  };

  chart?: {
    label: string;
    value: number;
  }[];

  table?: any[];
};

export default function Message({
  sender,
  text,
  metric,
  chart,
  table,
}: MessageProps) {
  const copy = () => navigator.clipboard.writeText(text);

  /* ---------------- USER ---------------- */

  if (sender === "user") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="mb-8 flex justify-end"
      >
        <div
          className="
          max-w-2xl
          rounded-[30px]
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-blue-600
          px-6
          py-4
          text-white
          shadow-2xl
        "
        >
          <div className="mb-2 flex items-center gap-2">

            <User size={16} />

            <span className="font-semibold tracking-wide text-white">
              You
            </span>

          </div>

          <p className="leading-8 whitespace-pre-wrap">
            {text}
          </p>

        </div>
      </motion.div>
    );
  }

  /* ---------------- ASSISTANT ---------------- */

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="mb-10"
    >
      <div
        className="
        overflow-hidden
        rounded-[32px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        shadow-2xl
      "
      >

        {/* Header */}

        <div
          className="
          flex
          items-center
          justify-between
          border-b
          border-[var(--border)]
          bg-gradient-to-r
          from-[var(--surface)]
          to-[var(--surface-2)]
          px-8
          py-6
        "
        >

          <div className="flex items-center gap-4">

            <div
              className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-r
              from-indigo-600
              via-violet-600
              to-blue-600
              text-white
              shadow-lg
            "
            >
              <Bot size={22} />
            </div>

            <div>

              <h2 className="text-lg font-bold text-[var(--text)]">
                Hiring AI
              </h2>

              <p className="text-sm text-[var(--muted)]">
                Analytics Assistant
              </p>

            </div>

          </div>

          <button
            onClick={copy}
            className="
            rounded-xl
            border
            border-[var(--border)]
            bg-[var(--surface)]
            p-3
            transition-all
            duration-300
            hover:border-indigo-500/40
            hover:bg-indigo-500/10
          "
          >
            <Copy size={18} />
          </button>

        </div>

        {/* BODY */}

        <div className="space-y-8 p-8">
                  {/* Summary */}

          <section>

            <div className="mb-4 flex items-center gap-2">

              <CheckCircle2
                size={18}
                className="text-indigo-400"
              />

              <h3
                className="
                font-semibold
                tracking-wide
                text-[var(--text)]
              "
              >
                Summary
              </h3>

            </div>

            <div
              className="
              rounded-2xl
              border
              border-[var(--border)]
              bg-gradient-to-br
              from-[var(--surface-2)]
              to-slate-900/30
              p-6
              leading-8
              whitespace-pre-wrap
              text-[var(--text)]
            "
            >
              {text}
            </div>

          </section>

          {/* Metric */}

          {metric && (

            <section>

              <div className="mb-5 flex items-center gap-2">

                <Sparkles
                  size={18}
                  className="text-indigo-400"
                />

                <h3
                  className="
                  font-semibold
                  tracking-wide
                  text-[var(--text)]
                "
                >
                  Key Metric
                </h3>

              </div>

              <MetricCard
                title={metric.title}
                value={metric.value}
              />

            </section>

          )}

          {/* Chart */}

          {chart && chart.length > 0 && (

            <section>

              <div className="mb-5 flex items-center gap-2">

                <BarChart3
                  size={18}
                  className="text-indigo-400"
                />

                <h3
                  className="
                  font-semibold
                  tracking-wide
                  text-[var(--text)]
                "
                >
                  Analytics
                </h3>

              </div>

              <AnalyticsChart
                data={chart}
              />

            </section>

          )}

          {/* Table */}

          {table && table.length > 0 && (

            <section>

              <div className="mb-5 flex items-center gap-2">

                <Table2
                  size={18}
                  className="text-indigo-400"
                />

                <h3
                  className="
                  font-semibold
                  tracking-wide
                  text-[var(--text)]
                "
                >
                  Results
                </h3>

              </div>

              <DataTable
                rows={table}
              />

            </section>

          )}

        </div>

      </div>

    </motion.div>
  );
}