import { NextResponse } from "next/server";
import { analyticsService } from "@/lib/services/analyticsService";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = await analyticsService(body.message);

    return NextResponse.json(result);
  } catch (error) {
    console.error("API ROUTE ERROR:", error);

    return NextResponse.json(
      {
        answer: "The AI service is temporarily unavailable. Please try again in a minute.",
      },
      { status: 500 }
    );
  }
}