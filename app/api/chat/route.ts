// // import { NextResponse } from "next/server";
// // import { analyticsService } from "@/lib/services/analyticsService";

// // export async function POST(request: Request) {
// //   try {
// //     const body = await request.json();

// //     const result = await analyticsService(body.message);

// //     return NextResponse.json(result);
// //   } catch (error) {
// //     console.error("API ROUTE ERROR:", error);

// //     return NextResponse.json(
// //       {
// //         answer: "The AI service is temporarily unavailable. Please try again in a minute.",
// //       },
// //       { status: 500 }
// //     );
// //   }
// // }
// import { NextResponse } from "next/server";
// import { analyticsService } from "@/lib/services/analyticsService";
// import { auth } from "@/auth";

// export async function POST(request: Request) {
//   try {
//     const session = await auth();

//     if (!session?.user) {
//       return NextResponse.json(
//         {
//           answer: "Please login first.",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     const body = await request.json();

//     const result = await analyticsService(
//       body.message,
//       {
//         role: (session.user as any).role,
//         recruiter: session.user.name ?? "",
//       }
//     );

//     return NextResponse.json(result);

//   } catch (error) {

//     console.error("API ROUTE ERROR:", error);

//     return NextResponse.json(
//       {
//         answer:
//           "The AI service is temporarily unavailable. Please try again in a minute.",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { analyticsService } from "@/lib/services/analyticsService";
import { ChatRequestSchema } from "@/lib/schemas/chatRequest";
import { AnalyticsResponseSchema } from "@/lib/schemas/analyticsResponse";
import { auth } from "@/auth";
import type { UserRole } from "@/lib/auth/roles"; // adjust path if needed
export async function POST(request: Request) {
  try {
    const session = await auth();

    if (!session?.user) {
      return NextResponse.json(
        {
          success: false,
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const body = ChatRequestSchema.parse(await request.json());

    const result = await analyticsService(body.message, {
      role: (session.user as any).role as UserRole,
      recruiter: session.user.name ?? "",
    });
    console.log("========== RESULT ==========");
console.dir(result, { depth: null });
console.log("============================");

    AnalyticsResponseSchema.parse(result);

    return NextResponse.json(
      {
        success: true,
        data: result,
      },
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof ZodError) {
      console.log("========== ZOD ERROR ==========");
  console.dir(error.flatten(), { depth: null });
  console.log("===============================");
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request format",
          details: error.flatten(),
        },
        { status: 400 }
      );
    }

    console.error("API ROUTE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: "The AI service is temporarily unavailable. Please try again later.",
      },
      { status: 500 }
    );
  }
}