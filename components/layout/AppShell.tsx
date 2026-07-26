// "use client";

// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";

// type Props = {
//   children: React.ReactNode;
// };

// export default function AppShell({ children }: Props) {
//   return (
// <div className="flex h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">      <Sidebar />

//       <div className="flex flex-1 flex-col overflow-hidden">
//         <Navbar />

//         <main className="flex-1 overflow-auto p-8">
//               {children}
//         </main>
//       </div>
//     </div>
//   );
// }
"use client";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export default function AppShell({ children }: Props) {
  return (
    <div className="flex h-screen bg-[var(--bg)] text-[var(--text)]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar />

        <main
          className="
            flex-1
            overflow-auto
            bg-[var(--bg)]
            p-8
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}