import { Job } from "@/types/job";
import { getDashboardMetrics } from "./metrics";

export class AnalyticsEngine {

  constructor(
    private jobs: Job[]
  ) {}

  metrics() {
    return getDashboardMetrics(this.jobs);
  }

  countOpenJobs() {
    return this.jobs.filter(
      job => job.status?.toLowerCase() === "open"
    ).length;
  }

  countJobsByDepartment(
    department: string
  ) {
    return this.jobs.filter(
      job =>
        job.department
          ?.toLowerCase()
          === department.toLowerCase()
    ).length;
  }

  countAIJobs() {
    return this.jobs.filter(
      job =>
        job.title
          ?.toLowerCase()
          .includes("ai")
    ).length;
  }

}