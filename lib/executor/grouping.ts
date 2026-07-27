export type GroupResult = {
  label: string;
  value: number;
};

export function groupRows(
  rows: Record<string, any>[],
  field: string
): GroupResult[] {
  const groups: Record<string, number> = {};

  for (const row of rows) {
    const key = String(row[field] ?? "Unknown");

    groups[key] = (groups[key] ?? 0) + 1;
  }

  return Object.entries(groups).map(([label, value]) => ({
    label,
    value,
  }));
}