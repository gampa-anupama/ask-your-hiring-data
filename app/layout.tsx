// // import type { Metadata } from "next";
// // import { Geist, Geist_Mono } from "next/font/google";
// // import "./globals.css";

// // const geistSans = Geist({
// //   variable: "--font-geist-sans",
// //   subsets: ["latin"],
// // });

// // const geistMono = Geist_Mono({
// //   variable: "--font-geist-mono",
// //   subsets: ["latin"],
// // });

// // export const metadata: Metadata = {
// //   title: "Hiring Intelligence",
// //   description: "AI Hiring Analytics Assistant",
// // };

// // export default function RootLayout({
// //   children,
// // }: Readonly<{
// //   children: React.ReactNode;
// // }>) {
// //   return (
// //     <html lang="en">
// //       <body
// //         className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
// //       >
// //         {children}
// //       </body>
// //     </html>
// //   );
// // }
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import ThemeProvider from "@/components/ThemeProvider";

// import "./globals.css";

// const inter = Inter({
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Hiring AI",
//   description: "AI Hiring Analytics",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html
//       lang="en"
//       suppressHydrationWarning
//     >
//       <body
// className={inter.className}
// >
// <ThemeProvider>

// {children}

// </ThemeProvider>

// </body>
//     </html>
//   );
// }
import "./globals.css";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}