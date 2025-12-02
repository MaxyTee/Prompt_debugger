import { GoogleGenAI } from "@google/genai";
import { z } from "zod";
import { zodToJsonSchema } from "zod-to-json-schema";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const debugSchema = z.object({
  original_prompt: z.string(),
  suggestions: z.array(z.string()),
  explanation: z.string(),
});

export const debug_prompt = async (prompt) => {
  try {
    if (!prompt) {
      throw Error("Prompt is required");
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseJsonSchema: zodToJsonSchema(debugSchema),
      },
    });

    const parsed = debugSchema.parse(JSON.parse(response.text));
    return parsed;
  } catch (error) {
    console.log("Error Message:", error.message);
    throw error;
  }
};
