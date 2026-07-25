"use client";

import { useEffect, useState } from "react";
import { loadCSV } from "@/data/loader";
import { Job } from "@/types";

export default function DataTestPage() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    async function load() {
      const data = await loadCSV<Job>("/data/jobs.csv");
      setJobs(data);
    }

    load();
  }, []);

  return (
    <div className="p-10">
      <h1 className="mb-5 text-3xl font-bold">Jobs Dataset</h1>

      <pre>{JSON.stringify(jobs, null, 2)}</pre>
    </div>
  );
}