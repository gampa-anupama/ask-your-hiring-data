import { QueryIR } from "../query-ir/types";

export function generateMockIR(question: string): QueryIR {
  const q = question.toLowerCase();

  if (q.includes("engineering")) {
    return {
      entity: "jobs",
      metric: "count",
      filters: [
        {
          field: "department",
          operator: "=",
          value: "Engineering",
        },
      ],
    };
  }

  if (q.includes("ai")) {
    return {
      entity: "jobs",
      metric: "count",
      filters: [
        {
          field: "department",
          operator: "=",
          value: "AI",
        },
      ],
    };
  }

  if (q.includes("hr")) {
    return {
      entity: "jobs",
      metric: "count",
      filters: [
        {
          field: "department",
          operator: "=",
          value: "HR",
        },
      ],
    };
  }

  if (q.includes("open")) {
    return {
      entity: "jobs",
      metric: q.includes("list") ? "list" : "count",
      filters: [
        {
          field: "status",
          operator: "=",
          value: "Open",
        },
      ],
    };
  }

  if (q.includes("filled")) {
    return {
      entity: "jobs",
      metric: "count",
      filters: [
        {
          field: "status",
          operator: "=",
          value: "Filled",
        },
      ],
    };
  }

  return {
    entity: "jobs",
    metric: "list",
    filters: [],
  };
}