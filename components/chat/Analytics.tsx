// // "use client";

// // import {
// //   ResponsiveContainer,
// //   BarChart,
// //   CartesianGrid,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   Bar,
// // } from "recharts";

// // type Props = {
// //   data: {
// //     label: string;
// //     value: number;
// //   }[];
// // };

// // export default function AnalyticsChart({
// //   data,
// // }: Props) {
// //   return (
// //     <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

// //       <div className="mb-6">

// //         <h3 className="text-xl font-bold text-slate-800">
// //           Analytics
// //         </h3>

// //         <p className="text-sm text-slate-500">
// //           Visual representation of grouped results
// //         </p>

// //       </div>

// //       <ResponsiveContainer
// //         width="100%"
// //         height={350}
// //       >
// //         <BarChart data={data}>

// //           <CartesianGrid strokeDasharray="3 3" />

// //           <XAxis dataKey="label" />

// //           <YAxis />

// //           <Tooltip />

// //           <Bar
// //             dataKey="value"
// //             radius={[8, 8, 0, 0]}
// //             fill="#2563eb"
// //           />

// //         </BarChart>
// //       </ResponsiveContainer>

// //     </div>
// //   );
// // }
// "use client";

// import {
//   ResponsiveContainer,
//   CartesianGrid,
//   XAxis,
//  YAxis,
//   Tooltip,
//   BarChart,
//   Bar,
// } from "recharts";

// type Props = {
//   data: {
//     label: string;
//     value: number;
//   }[];
// };

// export default function AnalyticsChart({
//   data,
// }: Props) {
//   return (
//     <div
//       className="
//       overflow-hidden
//       rounded-[26px]
//       border
//       border-[var(--border)]
//       bg-[var(--surface)]
//       shadow-lg
//     "
//     >
//       {/* Header */}

//       <div
//         className="
//         flex
//         items-center
//         justify-between
//         border-b
//         border-[var(--border)]
//         px-8
//         py-6
//       "
//       >
//         <div>

//           <h2
//             className="
//             text-xl
//             font-semibold
//             text-[var(--text)]
//           "
//           >
//             Analytics
//           </h2>

//           <p
//             className="
//             mt-1
//             text-sm
//             text-[var(--muted)]
//           "
//           >
//             Visual representation of your hiring data
//           </p>

//         </div>

//         <div
//           className="
//           rounded-full
//           bg-lime-400/10
//           px-4
//           py-2
//           text-sm
//           font-medium
//           text-lime-400
//         "
//         >
//           Live
//         </div>

//       </div>

//       {/* Chart */}

//       <div className="h-[380px] p-8">

//         <ResponsiveContainer
//           width="100%"
//           height="100%"
//         >

//           <BarChart data={data}>

//             <CartesianGrid
//               stroke="#2B3648"
//               strokeDasharray="3 3"
//             />

//             <XAxis
//               dataKey="label"
//               tick={{
//                 fill: "#94A3B8",
//               }}
//               axisLine={false}
//               tickLine={false}
//             />

//             <YAxis
//               tick={{
//                 fill: "#94A3B8",
//               }}
//               axisLine={false}
//               tickLine={false}
//             />

//             <Tooltip
//               cursor={{
//                 fill: "#1F2937",
//               }}
//               contentStyle={{
//                 background: "#111827",
//                 border: "1px solid #334155",
//                 borderRadius: "18px",
//                 color: "#fff",
//               }}
//             />

//             <Bar
//               dataKey="value"
//               fill="#6366F1"
//               radius={[12, 12, 0, 0]}
//               maxBarSize={70}
//             />

//           </BarChart>

//         </ResponsiveContainer>

//       </div>
//     </div>
//   );
// }
"use client";

import {
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

type Props = {
  data: {
    label: string;
    value: number;
  }[];
};

export default function AnalyticsChart({
  data,
}: Props) {
  return (
    <div
      className="
      overflow-hidden
      rounded-[30px]
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
        <div>

          <h2
            className="
            text-2xl
            font-bold
            text-[var(--text)]
          "
          >
            Analytics
          </h2>

          <p
            className="
            mt-1
            text-sm
            text-[var(--muted)]
          "
          >
            Visual representation of your hiring insights
          </p>

        </div>

        <div
          className="
          rounded-full
          border
          border-indigo-500/20
          bg-indigo-500/10
          px-4
          py-2
          text-sm
          font-semibold
          text-indigo-300
        "
        >
          Live Analytics
        </div>

      </div>

      {/* Chart */}

      <div className="h-[400px] p-8">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 5,
            }}
          >

            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="label"
              tick={{
                fill: "#94A3B8",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis
              tick={{
                fill: "#94A3B8",
                fontSize: 13,
              }}
              axisLine={false}
              tickLine={false}
            />

            <Tooltip
              cursor={{
                fill: "rgba(99,102,241,.08)",
              }}
              contentStyle={{
                background: "#111827",
                border: "1px solid #4F46E5",
                borderRadius: "18px",
                color: "#F8FAFC",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,.35)",
              }}
            />

            <Bar
              dataKey="value"
              fill="#6366F1"
              radius={[12, 12, 0, 0]}
              maxBarSize={60}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}