// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import {
//   Plus,
//   MessageSquare,
//   BarChart3,
//   Settings,
//   History,
//   ChevronLeft,
// } from "lucide-react";

// const history = [
//   {
//     title: "Today",
//     chats: [
//       "Count Open Jobs",
//       "Engineering Jobs",
//       "Jobs by Department",
//     ],
//   },
//   {
//     title: "Yesterday",
//     chats: [
//       "Open AI Jobs",
//       "Filled Jobs",
//     ],
//   },
// ];

// export default function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside className="group flex h-screen w-72 flex-col border-r border-slate-200 bg-white transition-all duration-300">

//       {/* Logo */}

//       <div className="flex items-center justify-between px-6 py-6">

//         <div>

//           <h1 className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-2xl font-bold text-transparent">
//             Hiring AI
//           </h1>

//           <p className="mt-1 text-sm text-slate-500">
//             Analytics Workspace
//           </p>

//         </div>

//         <button className="rounded-lg p-2 transition hover:bg-slate-100">

//           <ChevronLeft size={18} />

//         </button>

//       </div>

//       {/* New Chat */}

//       <div className="px-5">

//         <button
//           className="
//           flex
//           w-full
//           items-center
//           justify-center
//           gap-3
//           rounded-xl
//           bg-gradient-to-r
//           from-blue-600
//           to-indigo-600
//           py-3
//           font-medium
//           text-white
//           shadow-lg
//           transition
//           duration-300
//           hover:scale-[1.02]
//           hover:shadow-xl
//         "
//         >
//           <Plus size={18} />

//           New Chat

//         </button>

//       </div>

//       {/* Navigation */}

//       <div className="mt-8 px-5">

//         <Link
//           href="/chat"
//           className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
//             pathname === "/chat"
//               ? "bg-blue-50 text-blue-600"
//               : "hover:bg-slate-100"
//           }`}
//         >
//           <MessageSquare size={18} />

//           Chat

//         </Link>

//         <Link
//           href="/dashboard"
//           className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
//             pathname === "/dashboard"
//               ? "bg-blue-50 text-blue-600"
//               : "hover:bg-slate-100"
//           }`}
//         >
//           <BarChart3 size={18} />

//           Dashboard

//         </Link>

//         <Link
//           href="/history"
//           className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
//             pathname === "/history"
//               ? "bg-blue-50 text-blue-600"
//               : "hover:bg-slate-100"
//           }`}
//         >
//           <History size={18} />

//           History

//         </Link>

//         <Link
//           href="/settings"
//           className={`mb-6 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
//             pathname === "/settings"
//               ? "bg-blue-50 text-blue-600"
//               : "hover:bg-slate-100"
//           }`}
//         >
//           <Settings size={18} />

//           Settings

//         </Link>

//       </div>

//       {/* Divider */}

//       <div className="mx-5 border-t border-slate-200" />

//       {/* Chat History */}

//       <div className="flex-1 overflow-auto px-5 py-6">

//         {history.map((section) => (
//           <div key={section.title} className="mb-7">

//             <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
//               {section.title}
//             </h3>

//             {section.chats.map((chat) => (
//               <button
//                 key={chat}
//                 className="
//                 mb-2
//                 w-full
//                 rounded-xl
//                 px-4
//                 py-3
//                 text-left
//                 text-sm
//                 text-slate-600
//                 transition
//                 duration-300
//                 hover:bg-slate-100
//                 hover:text-blue-600
//               "
//               >
//                 {chat}
//               </button>
//             ))}

//           </div>
//         ))}

//       </div>

//       {/* Footer */}

//       <div className="border-t border-slate-200 p-5">

//         <div className="flex items-center gap-3">

//           <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-lg font-bold text-white">
//             A
//           </div>

//           <div>

//             <p className="font-semibold">
//               Anupama
//             </p>

//             <p className="text-sm text-slate-500">
//               AI Engineer
//             </p>

//           </div>

//         </div>

//       </div>

//     </aside>
//   );
// }
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sparkles,
  Plus,
  MessageSquare,
  LayoutDashboard,
  History,
  Settings,
  PanelLeftClose,
} from "lucide-react";

const history = [
  "Count Open Jobs",
  "Jobs by Department",
  "Engineering Jobs",
  "Jobs in Hyderabad",
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
      flex
      h-screen
      w-[300px]
      flex-col
      border-r
      border-[var(--border)]
      bg-[var(--surface)]
    "
    >
      {/* Logo */}

      <div className="flex items-center justify-between p-6">

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
           text-indigo-500
          "
          >
            <Sparkles size={20} />
          </div>

          <div>

            <h2 className="font-bold text-[18px]">
              Hiring AI
            </h2>

            <p className="text-xs text-[var(--muted)]">
              Analytics Workspace
            </p>

          </div>

        </div>

        <button
          className="
          rounded-xl
          p-2
          hover:bg-[var(--surface-2)]
        "
        >
          <PanelLeftClose size={18} />
        </button>

      </div>

      {/* New Chat */}

      <div className="px-5">

        <button
          className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-2xl
         text-indigo-500
          transition
          hover:scale-[1.02]
        "
        >
          <Plus size={18} />

          New Chat

        </button>

      </div>

      {/* Navigation */}

      <div className="mt-8 space-y-2 px-5">

        <Link
          href="/workspace/dashboard"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
            pathname === "/workspace/dashboard"
              ? "text-indigo-500"
              : "hover:bg-[var(--surface-2)]"
          }`}
        >
          <LayoutDashboard size={18} />

          Dashboard

        </Link>

        <Link
          href="/workspace/analytics"
          className={`flex items-center gap-3 rounded-xl px-4 py-3 transition ${
            pathname === "/workspace/analytics"
              ? "hover:bg-indigo-100 dark:hover:bg-indigo-500/10"
              : "hover:bg-[var(--surface-2)]"
          }`}
        >
          <MessageSquare size={18} />

          Analytics

        </Link>

        <Link
          href="/history"
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-[var(--surface-2)]
        "
        >
          <History size={18} />

          History

        </Link>

        <Link
          href="/workspace/settings"
          className="
          flex
          items-center
          gap-3
          rounded-xl
          px-4
          py-3
          transition
          hover:bg-[var(--surface-2)]
        "
        >
          <Settings size={18} />

          Settings

        </Link>

      </div>

      {/* Divider */}

      <div className="mx-5 my-6 border-t border-[var(--border)]" />

      {/* History */}

      <div className="flex-1 overflow-y-auto px-5">

        <h3 className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[var(--muted)]">
          Recent Chats
        </h3>

        <div className="space-y-2">

          {history.map((item) => (
            <button
              key={item}
              className="
              w-full
              rounded-xl
              px-4
              py-3
              text-left
              text-sm
              transition
              hover:bg-[var(--surface-2)]
            "
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-[var(--border)] p-5">

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
           bg-gradient-to-r
from-indigo-600
to-violet-600
            font-bold
            text-black
          "
          >
            A
          </div>

          <div>

            <p className="font-semibold">
              Anupama
            </p>

            <p className="text-sm text-[var(--muted)]">
              AI Engineer
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}