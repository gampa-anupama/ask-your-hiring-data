"use client";

import { useState } from "react";

type ChatInputProps = {
  onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="flex gap-2 border-t p-4">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about your hiring data..."
        className="flex-1 rounded-md border px-4 py-2 outline-none"
      />

      <button
        onClick={handleSend}
        className="rounded-md bg-blue-600 px-4 py-2 text-white"
      >
        Send
      </button>
    </div>
  );
}