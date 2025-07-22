// /pages/api/ai-chat.ts or /app/api/ai-chat/route.ts
import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("DEBUG: GEMINI_API_KEY is MISSING at init!"); // Added debug log
  throw new Error("GEMINI_API_KEY is missing in your .env.local file");
}

const genAI = new GoogleGenerativeAI(apiKey);

export async function POST(request: Request) {
  try {
    console.log("DEBUG: Received request to /api/ai-chat"); // Added debug log
    const { question } = await request.json();
    console.log("DEBUG: Question received:", question); // Added debug log

    if (!question || typeof question !== "string") {
      console.error("DEBUG: Invalid question:", question); // Added debug log
      return NextResponse.json(
        { message: "Invalid question." },
        { status: 400 },
      );
    }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    //     const prompt = `
    // You are a helpful assistant specialized in chemistry. Only answer chemistry-related questions.
    // If the question is not chemistry-related, politely decline.

    // User: ${question}
    // Assistant:
    //     `.trim();

    const prompt = `
You are a helpful assistant specialized in chemistry. Only answer chemistry-related questions.
If the question is not chemistry-related, politely decline.

Please format your answer with appropriate HTML tags for emphasis and structure:
use <strong>, <em>, <sub>, <sup>, <ul>, <li>, <p> tags where appropriate.

User: ${question}
Assistant:
`.trim();

    console.log("DEBUG: Sending prompt to Gemini:", prompt); // Added debug log
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log("DEBUG: Gemini response received:", text); // Added debug log

    return NextResponse.json({ reply: text });
  } catch (error: any) {
    console.error("Gemini API error (CATCH BLOCK):", error?.message || error); // Modified log
    return NextResponse.json(
      { message: "Failed to generate response." },
      { status: 500 },
    );
  }
}
