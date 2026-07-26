import ChatBox from "@/components/chat/ChatBox";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <div
        className="
        rounded-[30px]
        bg-gradient-to-r
        from-indigo-600
        via-violet-600
        to-blue-600
        p-10
        text-white
      "
      >
        <h1 className="text-4xl font-bold">
          AI Hiring Analytics
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-white/80">
          Ask questions in natural language and receive
          charts, tables and AI generated insights instantly.
        </p>

      </div>

      {/* Existing Chat */}

      <div
        className="
        rounded-[30px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-6
      "
      >
        <ChatBox />
      </div>

    </div>
  );
}