export function aggregate(
  metric: string,
  rows: any[]
) {
  switch (metric.toLowerCase()) {
    case "count":
      return rows.length;

    case "list":
      return rows;

    case "sum":
      return rows.reduce(
        (sum, row) => sum + (Number(row.value) || 0),
        0
      );

    case "average":
      if (rows.length === 0) return 0;

      return (
        rows.reduce(
          (sum, row) => sum + (Number(row.value) || 0),
          0
        ) / rows.length
      );

    case "min":
      return Math.min(
        ...rows.map((row) => Number(row.value) || 0)
      );

    case "max":
      return Math.max(
        ...rows.map((row) => Number(row.value) || 0)
      );

    default:
      return rows;
  }
}