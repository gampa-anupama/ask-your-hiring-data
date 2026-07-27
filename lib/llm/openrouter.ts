import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export async function askOpenRouter(
  prompt: string
): Promise<string> {
  const response = await client.chat.completions.create({
    model:
      process.env.MODEL_NAME ??
      "inclusionai/ling-3.0-flash:free",

    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],

    temperature: 0,
  });

  return (
    response.choices[0].message.content ?? ""
  );
}