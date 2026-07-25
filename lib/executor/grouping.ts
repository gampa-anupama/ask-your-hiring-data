export function groupRows(
  rows: any[],
  field?: string
) {
  if (!field) return rows;

  return rows.reduce((groups: any, row) => {
    const key = row[field];

    if (!groups[key]) {
      groups[key] = [];
    }

    groups[key].push(row);

    return groups;
  }, {});
}