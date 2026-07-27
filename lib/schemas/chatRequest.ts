import { z } from "zod";

export const ChatRequestSchema = z.object({
  message: z.string().trim().min(1).max(500),
});

export type ChatRequest = z.infer<typeof ChatRequestSchema>;