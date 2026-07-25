type MessageProps = {
  sender: "user" | "assistant";
  text: string;
};

export default function Message({ sender, text }: MessageProps) {
  return (
    <div
      className={`my-3 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-md rounded-lg px-4 py-2 ${
          sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
}