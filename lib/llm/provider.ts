// // // import ai from "./gemini";

// // // export async function askLLM(prompt: string) {
// // //   const response = await ai.models.generateContent({
// // //     model: "gemini-2.5-flash",
// // //     contents: prompt,
// // //   });

// // //   return response.text ?? "";
// // // }
// // import OpenAI from "openai";

// // const client = new OpenAI({
// //   apiKey: process.env.OPENROUTER_API_KEY!,
// //   baseURL: "https://openrouter.ai/api/v1",
// // });

// // export async function askLLM(prompt: string) {
// //   const response = await client.chat.completions.create({
// //     model: "openrouter/free",
// //     messages: [
// //       {
// //         role: "user",
// //         content: prompt,
// //       },
// //     ],
// //   });

// //   return response.choices[0].message.content ?? "";
// // }
// import OpenAI from "openai";

// const client = new OpenAI({
//   apiKey: process.env.OPENROUTER_API_KEY!,
//   baseURL: "https://openrouter.ai/api/v1",
// });

// export async function askLLM(prompt: string) {
//   const response = await client.chat.completions.create({
//     model: "inclusionai/ling-3.0-flash:free",
//     messages: [
//       {
//         role: "system",
//         content:
//           "You are a JSON generator. Return ONLY valid JSON. Never explain. Never use markdown.",
//       },
//       {
//         role: "user",
//         content: prompt,
//       },
//     ],
//     temperature: 0,
//   });

//   const text = response.choices[0].message.content ?? "";

//   console.log("========== LLM RESPONSE ==========");
//   console.log(text);

//   return text;
// }
import { askGemini } from "./gemini";

export async function askLLM(prompt: string) {
  return await askGemini(prompt);
}