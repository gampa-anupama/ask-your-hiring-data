import { Job } from "@/types/job";

export function getDashboardMetrics(jobs: Job[]) {
  const totalJobs = jobs.length;

  const openJobs = jobs.filter(
    (job) => job.status?.toLowerCase() === "open"
  ).length;

  const departments = new Set(
    jobs.map((job) => job.department)
  ).size;

  const aiJobs = jobs.filter((job) =>
    job.title?.toLowerCase().includes("ai")
  ).length;

  return {
    totalJobs,
    openJobs,
    departments,
    aiJobs,
  };
}