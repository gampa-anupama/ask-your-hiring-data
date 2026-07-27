// export function sortRows(
//   rows: any[],
//   sortBy?: string,
//   sortOrder: "asc" | "desc" = "asc"
// ) {
//   if (!sortBy) {
//     return rows;
//   }

//   return [...rows].sort((a, b) => {
//     const first = a[sortBy];
//     const second = b[sortBy];

//     if (first < second) {
//       return sortOrder === "asc" ? -1 : 1;
//     }

//     if (first > second) {
//       return sortOrder === "asc" ? 1 : -1;
//     }

//     return 0;
//   });
// }
export function sortRows(
  rows: Record<string, any>[],
  sortBy?: string,
  sortOrder: "asc" | "desc" = "asc"
) {
  if (!sortBy || rows.length === 0) {
    return rows;
  }

  return [...rows].sort((a, b) => {
    const first = a[sortBy];
    const second = b[sortBy];

    if (first === second) {
      return 0;
    }

    if (first < second) {
      return sortOrder === "asc" ? -1 : 1;
    }

    return sortOrder === "asc" ? 1 : -1;
  });
}