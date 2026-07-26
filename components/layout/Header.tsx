// "use client";

// import {
//   Bell,
//   Search,
//   Moon,
//   Sun,
// } from "lucide-react";

// import { useTheme } from "next-themes";

// export default function Header() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <header
//       className="
//       sticky
//       top-0
//       z-50
//       flex
//       h-20
//       items-center
//       justify-between
//       border-b
//       border-[var(--border)]
//       bg-[var(--surface)]
//       px-8
//       backdrop-blur-xl
//     "
//     >
//       {/* Left */}

//       <div>

//         <h1
//           className="
//           text-2xl
//           font-bold
//           text-[var(--text)]
//         "
//         >
//           Hiring Analytics
//         </h1>

//         <p
//           className="
//           mt-1
//           text-sm
//           text-[var(--muted)]
//         "
//         >
//           AI Powered Recruitment Intelligence
//         </p>

//       </div>

//       {/* Right */}

//       <div
//         className="
//         flex
//         items-center
//         gap-5
//       "
//       >

//         {/* Search */}

//         <div
//           className="
//           relative
//           w-80
//         "
//         >

//           <Search
//             size={18}
//             className="
//             absolute
//             left-4
//             top-3.5
//             text-[var(--muted)]
//           "
//           />

//           <input
//             placeholder="Search..."
//             className="
//             h-11
//             w-full
//             rounded-full
//             border
//             border-[var(--border)]
//             bg-[var(--surface-2)]
//             pl-11
//             pr-5
//             text-sm
//           "
//           />

//         </div>

//         {/* Theme */}

//         <button
//           onClick={() =>
//             setTheme(
//               theme === "dark"
//                 ? "light"
//                 : "dark"
//             )
//           }
//           className="
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[var(--border)]
//           bg-[var(--surface)]
//           transition
//           hover:bg-[var(--surface-2)]
//         "
//         >
//           {theme === "dark" ? (
//             <Sun size={18} />
//           ) : (
//             <Moon size={18} />
//           )}
//         </button>

//         {/* Notification */}

//         <button
//           className="
//           flex
//           h-11
//           w-11
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[var(--border)]
//           bg-[var(--surface)]
//           transition
//           hover:bg-[var(--surface-2)]
//         "
//         >
//           <Bell size={18} />
//         </button>

//         {/* Avatar */}

//         <div
//           className="
//           flex
//           items-center
//           gap-3
//           rounded-full
//           border
//           border-[var(--border)]
//           bg-[var(--surface)]
//           px-3
//           py-2
//         "
//         >

//           <div
//             className="
//             flex
//             h-10
//             w-10
//             items-center
//             justify-center
//             rounded-full
//             bg-lime-400
//             font-bold
//             text-black
//           "
//           >
//             A
//           </div>

//           <div>

//             <p
//               className="
//               text-sm
//               font-semibold
//             "
//             >
//               Anupama
//             </p>

//             <p
//               className="
//               text-xs
//               text-[var(--muted)]
//             "
//             >
//               AI Engineer
//             </p>

//           </div>

//         </div>

//       </div>

//     </header>
//   );
// }
"use client";

import {
  Bell,
  Search,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "next-themes";

export default function Header() {
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
      shadow-sm
      backdrop-blur-xl
      transition-all
      duration-300
    "
    >
      {/* Left */}

      <div>

        <h1
          className="
          text-3xl
          font-bold
          tracking-tight
          text-[var(--text)]
        "
        >
          Hiring Analytics
        </h1>

        <p
          className="
          mt-1
          text-sm
          text-[var(--muted)]
        "
        >
          AI Powered Recruitment Intelligence
        </p>

      </div>

      {/* Right */}

      <div
        className="
        flex
        items-center
        gap-4
      "
      >

        {/* Search */}

        <div
          className="
          relative
          w-80
        "
        >

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
            placeholder="Search..."
            className="
            h-11
            w-full
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface-2)]
            pl-11
            pr-5
            text-sm
            text-[var(--text)]
            placeholder:text-[var(--muted)]
            outline-none
            transition-all
            duration-300
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-500/10
          "
          />

        </div>

        {/* Theme */}

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
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--surface)]
          transition-all
          duration-300
          hover:border-indigo-500/30
          hover:bg-indigo-500/10
          hover:text-indigo-400
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
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--surface)]
          transition-all
          duration-300
          hover:border-indigo-500/30
          hover:bg-indigo-500/10
          hover:text-indigo-400
        "
        >
          <Bell size={18} />

          <span
            className="
            absolute
            right-2
            top-2
            h-2.5
            w-2.5
            rounded-full
            bg-indigo-500
          "
          />

        </button>

        {/* Avatar */}

        <div
          className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--surface)]
          px-3
          py-2
          transition-all
          duration-300
          hover:border-indigo-500/30
          hover:shadow-md
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
            bg-gradient-to-r
            from-indigo-600
            via-violet-600
            to-blue-600
            font-bold
            text-white
            shadow-md
          "
          >
            A
          </div>

          <div>

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

        </div>

      </div>

    </header>
  );
}