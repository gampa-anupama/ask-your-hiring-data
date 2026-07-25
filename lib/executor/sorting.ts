export function sortRows(
  rows: any[],
  field?: string,
  order: "asc" | "desc" = "asc"
) {
  if (!field) return rows;

  return [...rows].sort((a, b) => {
    if (order === "asc") {
      return String(a[field]).localeCompare(String(b[field]));
    }

    return String(b[field]).localeCompare(String(a[field]));
  });
}