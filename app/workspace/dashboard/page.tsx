// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";

// import {
//   Briefcase,
//   Building2,
//   Users,
//   BrainCircuit,
//   ArrowRight,
// } from "lucide-react";

// import { loadCSV } from "@/data/loader";
// import { getDashboardMetrics } from "@/lib/analytics/metrics";
// import { Job } from "@/types/job";

// export default function DashboardPage() {
//   const [jobs, setJobs] = useState<Job[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchJobs() {
//       try {
//         const data = await loadCSV<Job>("/data/jobs.csv");
//         setJobs(data);
//       } catch (error) {
//         console.error("Failed to load jobs:", error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchJobs();
//   }, []);

//   const metrics = getDashboardMetrics(jobs);

//   const cards = [
//     {
//       title: "Total Jobs",
//       value: metrics.totalJobs,
//       icon: Briefcase,
//     },
//     {
//       title: "Open Jobs",
//       value: metrics.openJobs,
//       icon: Building2,
//     },
//     {
//       title: "Departments",
//       value: metrics.departments,
//       icon: Users,
//     },
//     {
//       title: "AI Jobs",
//       value: metrics.aiJobs,
//       icon: BrainCircuit,
//     },
//   ];

//   return (
//     <div className="space-y-10">

//       {/* Hero */}

//       <div className="rounded-[30px] bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 p-10 text-white">

//         <h1 className="text-4xl font-bold">
//           Welcome Back 👋
//         </h1>

//         <p className="mt-4 max-w-3xl text-lg text-white/80">
//           Monitor hiring trends, analyse recruitment data and ask AI questions
//           using natural language.
//         </p>

//         <Link
//           href="/workspace/analytics"
//           className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700"
//         >
//           Open Analytics

//           <ArrowRight size={18} />
//         </Link>

//       </div>

//       {/* Metric Cards */}

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

//         {cards.map((card) => {

//           const Icon = card.icon;

//           return (
//             <div
//               key={card.title}
//               className="
//                 rounded-[26px]
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 p-7
//                 shadow-lg
//               "
//             >
//               <div className="flex items-center justify-between">

//                 <div>

//                   <p className="text-sm text-[var(--muted)]">
//                     {card.title}
//                   </p>

//                   <h2 className="mt-4 text-5xl font-bold">

//                     {loading ? "--" : card.value}

//                   </h2>

//                 </div>

//                 <div className="rounded-2xl bg-indigo-500/10 p-4">

//                   <Icon
//                     size={30}
//                     className="text-indigo-500"
//                   />

//                 </div>

//               </div>

//             </div>
//           );

//         })}

//       </div>

//       {/* Bottom Section */}

//       <div className="grid gap-6 lg:grid-cols-2">

//         {/* Quick Actions */}

//         <div
//           className="
//             rounded-[26px]
//             border
//             border-[var(--border)]
//             bg-[var(--surface)]
//             p-8
//           "
//         >

//           <h2 className="text-2xl font-bold">
//             Quick Actions
//           </h2>

//           <div className="mt-8 space-y-4">

//             <Link
//               href="/workspace/analytics"
//               className="
//                 block
//                 rounded-xl
//                 border
//                 border-[var(--border)]
//                 p-4
//                 transition
//                 hover:border-indigo-500
//               "
//             >
//               Ask Hiring AI
//             </Link>

//             <button
//               className="
//                 w-full
//                 rounded-xl
//                 border
//                 border-[var(--border)]
//                 p-4
//                 text-left
//                 transition
//                 hover:border-indigo-500
//               "
//             >
//               Upload Dataset
//             </button>

//             <button
//               className="
//                 w-full
//                 rounded-xl
//                 border
//                 border-[var(--border)]
//                 p-4
//                 text-left
//                 transition
//                 hover:border-indigo-500
//               "
//             >
//               Export Analytics
//             </button>

//           </div>

//         </div>

//         {/* Recent Queries */}

//         <div
//           className="
//             rounded-[26px]
//             border
//             border-[var(--border)]
//             bg-[var(--surface)]
//             p-8
//           "
//         >

//           <h2 className="text-2xl font-bold">
//             Recent Queries
//           </h2>

//           <div className="mt-8 space-y-3">

//             {[
//               "Count AI Jobs",
//               "Jobs by Department",
//               "Open Engineering Jobs",
//               "Count Open Jobs",
//             ].map((query) => (

//               <div
//                 key={query}
//                 className="
//                   rounded-xl
//                   border
//                   border-[var(--border)]
//                   px-5
//                   py-4
//                 "
//               >
//                 {query}
//               </div>

//             ))}

//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  Briefcase,
  Building2,
  Users,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

export default function DashboardPage() {

  const [loading, setLoading] = useState(true);

  const [metrics, setMetrics] = useState({
    totalJobs: 0,
    openJobs: 0,
    departments: 0,
    aiJobs: 0,
  });

  useEffect(() => {

    async function loadDashboard() {

      try {

        const response = await fetch("/api/dashboard");

        const data = await response.json();

        setMetrics(data.metrics);

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadDashboard();

  }, []);

  const cards = [

    {
      title: "Total Jobs",
      value: metrics.totalJobs,
      icon: Briefcase,
    },

    {
      title: "Open Jobs",
      value: metrics.openJobs,
      icon: Building2,
    },

    {
      title: "Departments",
      value: metrics.departments,
      icon: Users,
    },

    {
      title: "AI Jobs",
      value: metrics.aiJobs,
      icon: BrainCircuit,
    },

  ];

  return (

    <div className="space-y-10">

      <div className="rounded-[30px] bg-gradient-to-r from-indigo-600 via-violet-600 to-blue-600 p-10 text-white">

        <h1 className="text-4xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-white/80">
          Monitor hiring trends, analyse recruitment data and ask AI questions using natural language.
        </p>

        <Link
          href="/workspace/analytics"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-indigo-700"
        >
          Open Analytics
          <ArrowRight size={18} />
        </Link>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {

          const Icon = card.icon;

          return (

            <div
              key={card.title}
              className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-7 shadow-lg"
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-[var(--muted)]">
                    {card.title}
                  </p>

                  <h2 className="mt-4 text-5xl font-bold">
                    {loading ? "--" : card.value}
                  </h2>

                </div>

                <div className="rounded-2xl bg-indigo-500/10 p-4">

                  <Icon
                    size={30}
                    className="text-indigo-500"
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <h2 className="text-2xl font-bold">
            Quick Actions
          </h2>

          <div className="mt-8 space-y-4">

            <Link
              href="/workspace/analytics"
              className="block rounded-xl border border-[var(--border)] p-4 hover:border-indigo-500"
            >
              Ask Hiring AI
            </Link>

            <button className="w-full rounded-xl border border-[var(--border)] p-4 text-left">
              Upload Dataset
            </button>

            <button className="w-full rounded-xl border border-[var(--border)] p-4 text-left">
              Export Analytics
            </button>

          </div>

        </div>

        <div className="rounded-[26px] border border-[var(--border)] bg-[var(--surface)] p-8">

          <h2 className="text-2xl font-bold">
            Recent Queries
          </h2>

          <div className="mt-8 space-y-3">

            {[
              "Count AI Jobs",
              "Jobs by Department",
              "Open Engineering Jobs",
              "Count Open Jobs",
            ].map((query) => (

              <div
                key={query}
                className="rounded-xl border border-[var(--border)] px-5 py-4"
              >
                {query}
              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

}