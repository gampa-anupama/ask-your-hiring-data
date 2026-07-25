"use client";

import { useState } from "react";
import ChatInput from "./ChatInput";
import Message from "./Message";

type ChatMessage = {
  sender: "user" | "assistant";
  text: string;

  chart?: {
    label: string;
    value: number;
  }[];

  table?: any[];
};

export default function ChatBox() {
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
    chart: data.chart,

    table: data.table,
  },
]);
  }

  return (
    <div className="mx-auto mt-10 flex h-[80vh] max-w-4xl flex-col rounded-lg border bg-white shadow">

      <div className="border-b p-4 text-center text-2xl font-bold">
        Ask Your Hiring Data
      </div>

      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <Message
    sender={message.sender}
    text={message.text}
    chart={message.chart}
    table={message.table}
/>
        ))}
      </div>

      <ChatInput onSend={sendMessage} />

    </div>
  );
}