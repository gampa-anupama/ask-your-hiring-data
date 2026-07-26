import { NextResponse } from "next/server";
import { auth } from "@/auth";

import { initializeDataset, getDataset } from "@/lib/data/dataset";
import { applyRoleScope } from "@/lib/auth/scope";
import { getDashboardMetrics } from "@/lib/analytics/metrics";

export async function GET() {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    await initializeDataset();

    const dataset = getDataset();

    const jobs = applyRoleScope(
      dataset.jobs,
      {
        role: (session.user as any).role,
        recruiter: session.user.name ?? "",
      }
    );
    console.log("===== SESSION =====");
console.log(session.user);

console.log("===== TOTAL JOBS =====");
console.log(dataset.jobs.length);

console.log("===== FILTERED JOBS =====");
console.log(jobs.length);

console.log("===== FIRST JOB =====");
console.log(dataset.jobs[0]);
    const metrics = getDashboardMetrics(jobs);

    return NextResponse.json({
      metrics,
      jobs,
    });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to load dashboard",
      },
      {
        status: 500,
      }
    );

  }
}