// import { NextResponse } from "next/server";
// import { analyticsService } from "@/lib/services/analyticsService";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();

//     const result = await analyticsService(body.message);

//     return NextResponse.json(result);
//   } catch (error) {
//     console.error("API ROUTE ERROR:", error);

//     return NextResponse.json(
//       {
//         answer: "The AI service is temporarily unavailable. Please try again in a minute.",
//       },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { analyticsService } from "@/lib/services/analyticsService";
import { auth } from "@/auth";

export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        {
          answer: "Please login first.",
        },
        {
          status: 401,
        }
      );
    }

    const body = await request.json();

    const result = await analyticsService(
      body.message,
      {
        role: (session.user as any).role,
        recruiter: session.user.name ?? "",
      }
    );

    return NextResponse.json(result);

  } catch (error) {

    console.error("API ROUTE ERROR:", error);

    return NextResponse.json(
      {
        answer:
          "The AI service is temporarily unavailable. Please try again in a minute.",
      },
      {
        status: 500,
      }
    );
  }
}