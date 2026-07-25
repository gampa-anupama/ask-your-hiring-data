export function buildChartData(rows: any[]) {
  const counts: Record<string, number> = {};

  rows.forEach((row) => {
    const department = row.department ?? "Unknown";

    counts[department] = (counts[department] || 0) + 1;
  });

  return Object.entries(counts).map(([name, value]) => ({
    name,
    value,
  }));
}