"use client";

import { useState } from "react";
import { ArrowUp, Sparkles } from "lucide-react";

type Props = {
  onSend: (message: string) => void;
};

const suggestions = [
  "Count Open Jobs",
  "Show Jobs by Department",
  "List Engineering Jobs",
  "Count AI Jobs",
];

export default function ChatInput({
  onSend,
}: Props) {
  const [message, setMessage] = useState("");

  function sendMessage() {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  }

  return (
    <div className="w-full">

      {/* Suggestions */}

      <div className="mb-6 flex flex-wrap gap-3">

        {suggestions.map((item) => (

          <button
            key={item}
            onClick={() => setMessage(item)}
            className="
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--surface)]
            px-4
            py-2
            text-sm
            text-[var(--muted)]
            transition-all
            duration-300
            hover:border-indigo-500
            hover:bg-indigo-500/10
            hover:text-indigo-300
            hover:shadow-md
          "
          >
            {item}
          </button>

        ))}

      </div>

      {/* Input */}

      <div
        className="
        flex
        items-end
        gap-4
        rounded-[30px]
        border
        border-[var(--border)]
        bg-[var(--surface)]
        p-5
        shadow-2xl
        transition-all
        duration-300
        hover:border-indigo-500/30
      "
      >

        {/* Icon */}

        <div
          className="
          mb-2
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-blue-600
          text-white
          shadow-lg
        "
        >
          <Sparkles size={18} />
        </div>

        {/* Textarea */}

        <textarea
          rows={1}
          value={message}
          placeholder="Ask about your hiring data..."
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              !e.shiftKey
            ) {
              e.preventDefault();
              sendMessage();
            }
          }}
          className="
          max-h-40
          min-h-[30px]
          flex-1
          resize-none
          bg-transparent
          text-[15px]
          leading-7
          text-[var(--text)]
          placeholder:text-[var(--muted)]
          focus:outline-none
        "
        />

        {/* Send */}

        <button
          onClick={sendMessage}
          className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-gradient-to-r
          from-indigo-600
          via-violet-600
          to-blue-600
          text-white
          shadow-lg
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-indigo-500/40
          active:scale-95
        "
        >
          <ArrowUp size={20} />
        </button>

      </div>

      {/* Footer */}

      <div className="mt-4 text-center text-xs text-[var(--muted)]">

        Press <span className="font-semibold text-indigo-300">Enter</span> to send

        <span className="mx-2">•</span>

        <span className="font-semibold text-indigo-300">
          Shift + Enter
        </span>

        {" "}for a new line

      </div>

    </div>
  );
}