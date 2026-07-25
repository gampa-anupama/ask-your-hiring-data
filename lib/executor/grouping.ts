export function groupRows(rows: any[], field: string) {
  const groups: Record<string, number> = {};

  rows.forEach((row) => {
    const key = row[field] ?? "Unknown";

    groups[key] = (groups[key] || 0) + 1;
  });

  return Object.entries(groups).map(([label, value]) => ({
    label,
    value,
  }));
}