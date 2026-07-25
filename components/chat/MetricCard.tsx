type Props = {
  value: number;
  title: string;
};

export default function MetricCard({
  value,
  title,
}: Props) {
  return (
<div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-center text-white shadow-xl">      <div className="text-5xl font-bold text-blue-600">
        {value}
      </div>

      <div className="mt-2 text-lg font-medium text-blue-100">
        {title}
      </div>
    </div>
  );
}