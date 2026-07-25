import { NextResponse } from "next/server";
import { analyticsService } from "@/lib/services/analyticsService";

export async function POST(request: Request) {
  const body = await request.json();

  const result = await analyticsService(body.message);

  return NextResponse.json(result);
}