// // import { GoogleGenAI } from "@google/genai";

// // const ai = new GoogleGenAI({
// //   apiKey: process.env.GEMINI_API_KEY!,
// // });

// // export async function askGemini(prompt: string) {
// //   const response = await ai.models.generateContent({
// //     model: "gemini-2.5-flash",
// //     contents: prompt,
// //   });

// //   return response.text ?? "";
// // }
// import { GoogleGenAI } from "@google/genai";

// const apiKey = process.env.GEMINI_API_KEY;
// const modelName = process.env.MODEL_NAME ?? "gemini-2.5-flash";

// if (!apiKey) {
//   throw new Error("GEMINI_API_KEY is missing.");
// }

// const ai = new GoogleGenAI({
//   apiKey,
// });

// export async function askGemini(prompt: string): Promise<string> {
//   try {
//     const response = await ai.models.generateContent({
//       model: modelName,
//       contents: prompt,
//     });

//     return response.text?.trim() || "";
//   } catch (error) {
//     console.error("Gemini Provider Error:", error);
//     throw new Error("Failed to generate AI response.");
//   }
// }
import { GoogleGenAI } from "@google/genai";

const modelName = process.env.MODEL_NAME ?? "gemini-2.5-flash";

export async function askGemini(
  prompt: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing.");
  }

  const ai = new GoogleGenAI({
    apiKey,
  });

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: prompt,
    });

    return response.text?.trim() ?? "";
  } catch (error) {
    console.error("Gemini Provider Error:", error);
    throw new Error("Failed to generate AI response.");
  }
}