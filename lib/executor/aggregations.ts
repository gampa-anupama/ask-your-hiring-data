export function aggregate(
  metric: string,
  rows: any[]
) {
  switch (metric) {
    case "count":
      return rows.length;

    case "list":
      return rows;

    default:
      return rows;
  }
}