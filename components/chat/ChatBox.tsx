// // "use client";

// // import { useState } from "react";
// // import ChatInput from "./ChatInput";
// // import Message from "./Message";

// // type ChatMessage = {
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

// // export default function ChatBox() {
// //   const [loading, setLoading] = useState(false);
// //   const [messages, setMessages] = useState<ChatMessage[]>([
// //     {
// //       sender: "assistant",
// //       text: "Hello! Ask me anything about your hiring data.",
// //     },
// //   ]);

// //   async function sendMessage(text: string) {
// //     // Add user message
// //     setMessages((prev) => [
// //       ...prev,
// //       {
// //         sender: "user",
// //         text,
// //       },
// //     ]);

// //     // Call backend
// //     setLoading(true);
// //     const response = await fetch("/api/chat", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify({
// //         message: text,
// //       }),
// //     });
// //     const data = await response.json();

// // if (!response.ok) {
// //   setMessages((prev) => [
// //     ...prev,
// //     {
// //       sender: "assistant",
// //       text: data.answer || "Something went wrong.",
// //     },
// //   ]);

// //   return;
// // }
// //     // Add backend response
// //     setMessages((prev) => [
// //   ...prev,
// //   {
// //     sender: "assistant",
// //     text:
// //       typeof data.answer === "string"
// //         ? data.answer
// //         : JSON.stringify(data.answer, null, 2),
// //     metric: data.metric,

// //     chart: data.chart,

// //     table: data.table,
// //   },
// // ]);
// // setLoading(false);
// //   }

// //   return (
// //   <div className="mx-auto flex h-[calc(100vh-130px)] max-w-6xl flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">

// //     <div className="flex-1 overflow-y-auto bg-slate-50 p-10">      {messages.map((message, index) => (
// //         <Message
// //           key={index}
// //           sender={message.sender}
// //           text={message.text}
// //           metric={message.metric}
// //           chart={message.chart}
// //           table={message.table}
// //         />
// //       ))}

// //       {loading && (
// //         <div className="mt-6 flex items-center gap-3">
// //           <div className="h-5 w-5 animate-spin rounded-full border-4 border-blue-600 border-t-transparent"></div>

// //           <span className="text-gray-500">
// //             Thinking...
// //           </span>
// //         </div>
// //       )}
// //     </div>

// //     <div className="border-t border-slate-200 bg-white p-8">
// //       <ChatInput onSend={sendMessage} />
// //     </div>

// //   </div>
// // );
// // }
// "use client";

// import { useEffect, useRef, useState } from "react";

// import ChatInput from "./ChatInput";
// import Message from "./Message";

// type ChatMessage = {
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

// export default function ChatBox() {
//   const bottomRef = useRef<HTMLDivElement>(null);

//   const [loading, setLoading] = useState(false);

//   const [messages, setMessages] = useState<ChatMessage[]>([
//     {
//       sender: "assistant",
//       text:
//         "👋 Welcome to Hiring AI.\n\nAsk anything about your recruitment data.\n\nExamples:\n• Count Open Jobs\n• Jobs by Department\n• List AI Jobs\n• Count Engineering Jobs",
//     },
//   ]);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }, [messages, loading]);

//   async function sendMessage(message: string) {
//     if (!message.trim()) return;

//     setMessages((prev) => [
//       ...prev,
//       {
//         sender: "user",
//         text: message,
//       },
//     ]);

//     setLoading(true);

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",

//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           message,
//         }),
//       });

//       const data = await response.json();

//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "assistant",
//           text: data.answer,

//           metric: data.metric,

//           chart: data.chart,

//           table: data.table,
//         },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           sender: "assistant",
//           text: "Something went wrong.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div
//       className="
//       flex
//       h-full
//       flex-col
//       bg-[var(--bg)]
//     "
//     >
//       {/* Conversation */}

//       <div
//         className="
//         flex-1
//         overflow-y-auto
//         px-10
//         py-10
//       "
//       >
//         <div
//           className="
//           mx-auto
//           w-full
//           max-w-6xl
//         "
//         >
//           {messages.map((message, index) => (
//             <Message
//               key={index}
//               sender={message.sender}
//               text={message.text}
//               metric={message.metric}
//               chart={message.chart}
//               table={message.table}
//             />
//           ))}

//           {loading && (
//             <div className="mb-10 flex justify-start">

//               <div
//                 className="
//                 flex
//                 items-center
//                 gap-4
//                 rounded-2xl
//                 border
//                 border-[var(--border)]
//                 bg-[var(--surface)]
//                 px-6
//                 py-5
//               "
//               >
//                 <div
//                   className="
//                   h-5
//                   w-5
//                   animate-spin
//                   rounded-full
//                   border-2
//                   border-lime-400
//                   border-t-transparent
//                 "
//                 />

//                 <span className="text-[var(--muted)]">
//                   Hiring AI is thinking...
//                 </span>

//               </div>

//             </div>
//           )}

//           <div ref={bottomRef} />

//         </div>
//       </div>

//       {/* Input */}

//       <div
//         className="
//         border-t
//         border-[var(--border)]
//         bg-[var(--surface)]
//         px-10
//         py-6
//       "
//       >
//         <div className="mx-auto max-w-6xl">

//           <ChatInput
//             onSend={sendMessage}
//           />

//         </div>
//       </div>

//     </div>
//   );
// }
"use client";

import { useEffect, useRef, useState } from "react";

import ChatInput from "./ChatInput";
import Message from "./Message";

type ChatMessage = {
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

export default function ChatBox() {
  const bottomRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "assistant",
      text:
        "👋 Welcome to Hiring AI.\n\nAsk anything about your recruitment data.\n\nExamples:\n• Count Open Jobs\n• Jobs by Department\n• List AI Jobs\n• Count Engineering Jobs",
    },
  ]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text: message,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: data.answer,
          metric: data.metric,
          chart: data.chart,
          table: data.table,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "assistant",
          text: "Something went wrong.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className="
      flex
      h-full
      flex-col
      bg-[var(--bg)]
    "
    >
      {/* Conversation */}

      <div
        className="
        flex-1
        overflow-y-auto
        px-10
        py-10
      "
      >
        <div
          className="
          mx-auto
          w-full
          max-w-6xl
        "
        >
          {messages.map((message, index) => (
            <Message
              key={index}
              sender={message.sender}
              text={message.text}
              metric={message.metric}
              chart={message.chart}
              table={message.table}
            />
          ))}

          {loading && (
            <div className="mb-10 flex justify-start">

              <div
                className="
                flex
                items-center
                gap-4
                rounded-[24px]
                border
                border-indigo-500/20
                bg-gradient-to-r
                from-[var(--surface)]
                to-[var(--surface-2)]
                px-6
                py-5
                shadow-xl
              "
              >
                <div
                  className="
                  h-5
                  w-5
                  animate-spin
                  rounded-full
                  border-2
                  border-indigo-400
                  border-t-transparent
                "
                />

                <span
                  className="
                  font-medium
                  text-[var(--muted)]
                "
                >
                  Hiring AI is analysing your hiring data...
                </span>

              </div>

            </div>
          )}

          <div ref={bottomRef} />

        </div>
      </div>

      {/* Input */}

      <div
        className="
        border-t
        border-[var(--border)]
        bg-gradient-to-r
        from-[var(--surface)]
        to-[var(--surface-2)]
        px-10
        py-6
        backdrop-blur-xl
      "
      >
        <div className="mx-auto max-w-6xl">

          <ChatInput
            onSend={sendMessage}
          />

        </div>

      </div>

    </div>
  );
}