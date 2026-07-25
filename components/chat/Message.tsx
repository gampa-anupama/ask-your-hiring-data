import AnalyticsChart from "./Analytics";
import DataTable from "./DataTable";
import MetricCard from "./MetricCard";
type MessageProps = {
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

export default function Message({
  sender,
  text,
    metric,

  chart,
  table
}: MessageProps) {
  return (
    <div
      className={`my-3 flex ${
        sender === "user" ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-3xl rounded-lg px-4 py-2 ${
          sender === "user"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-black"
        }`}
      >
        <pre className="whitespace-pre-wrap font-sans">
          {text}
        </pre>
        {metric && (
  <MetricCard
    value={metric.value}
    title={metric.title}
  />
)}

        {chart && chart.length > 0 && (
          <AnalyticsChart data={chart} />
        )}
        {table && table.length > 0 && (
    <DataTable rows={table} />
)}
      </div>
    </div>
  );
}