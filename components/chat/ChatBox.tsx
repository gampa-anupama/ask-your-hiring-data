"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

type ChatMessage = {
  sender: "user" | "assistant";
  text: string;

  metric?: {
    value: number;
    title: string;
  };

  chart?: {
    label: string;
    value: number;
  }[];

  table?: any[];
};

export default function ChatBox() {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "assistant",
      text: "Hello! Ask me anything about your hiring data.",
    },
  ]);

  async function sendMessage(text: string) {
    // Add user message
    setMessages((prev) => [
      ...prev,
      {
        sender: "user",
        text,
      },
    ]);

    // Call backend
    setLoading(true);
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: text,
      }),
    });
    const data = await response.json();

if (!response.ok) {
  setMessages((prev) => [
    ...prev,
    {
      sender: "assistant",
      text: data.answer || "Something went wrong.",
    },
  ]);

  return;
}
    // Add backend response
    setMessages((prev) => [
  ...prev,
  {
    sender: "assistant",
    text:
      typeof data.answer === "string"
        ? data.answer
        : JSON.stringify(data.answer, null, 2),
    metric: data.metric,

    chart: data.chart,

    table: data.table,
  },
]);
setLoading(false);
  }

  return (
    <div className="mx-auto mt-10 flex h-[80vh] max-w-4xl flex-col rounded-lg border bg-white shadow">

      <div className="border-b p-4 text-center text-2xl font-bold">
        Ask Your Hiring Data
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {loading && (
  <div className="flex justify-start my-3">
    <div className="rounded-lg bg-gray-200 px-4 py-3">
      <div className="h-6 w-6 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  </div>
)}
        {messages.map((message, index) => (
          <Message
    sender={message.sender}
    text={message.text}
      metric={message.metric}

    chart={message.chart}
    table={message.table}
/>
        ))}
      </div>

      <ChatInput onSend={sendMessage} />

    </div>
  );
}