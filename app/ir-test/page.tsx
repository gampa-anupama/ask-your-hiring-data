"use client";

import { validateIR } from "@/lib/query-ir/validator";

export default function IRTestPage() {
  const sample = {
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

  const result = validateIR(sample);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-5">
        Query IR Validation
      </h1>

      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}