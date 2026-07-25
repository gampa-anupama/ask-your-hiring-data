export function generateMockIR(question: string) {
  const q = question.toLowerCase();

  const filters = [];
  let sortBy: string | undefined;
let sortOrder: "asc" | "desc" = "asc";

  if (q.includes("sorted by location")) {
  sortBy = "location";
}

if (q.includes("sorted by recruiter")) {
  sortBy = "recruiter";
}

if (q.includes("sorted by band")) {
  sortBy = "band";
}

if (q.includes("sorted by title")) {
  sortBy = "title";
}

if (q.includes("descending")) {
  sortOrder = "desc";
}
  // Department
  if (q.includes("engineering")) {
    filters.push({
      field: "department",
      operator: "=",
      value: "Engineering",
    });
  }

  if (q.includes("hr")) {
    filters.push({
      field: "department",
      operator: "=",
      value: "HR",
    });
  }

  if (q.includes("ai")) {
    filters.push({
      field: "department",
      operator: "=",
      value: "AI",
    });
  }

  // Status
  if (q.includes("open")) {
    filters.push({
      field: "status",
      operator: "=",
      value: "Open",
    });
  }

  if (q.includes("filled")) {
    filters.push({
      field: "status",
      operator: "=",
      value: "Filled",
    });
  }

  // Location
  if (q.includes("hyderabad")) {
    filters.push({
      field: "location",
      operator: "=",
      value: "Hyderabad",
    });
  }

  if (q.includes("bangalore")) {
    filters.push({
      field: "location",
      operator: "=",
      value: "Bangalore",
    });
  }

  if (q.includes("chennai")) {
    filters.push({
      field: "location",
      operator: "=",
      value: "Chennai",
    });
  }

  // Group By
  if (q.includes("by department")) {
    return {
      entity: "jobs",
      metric: "count",
      filters,
      groupBy: "department",
    };
  }

  // Count
  if (q.includes("count")) {
    return {
      entity: "jobs",
      metric: "count",
      filters,
    };
  }

  // List
  return {
    entity: "jobs",
    metric: "list",
    filters,
    sortBy,
    sortOrder
  };
}