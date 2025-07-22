"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";

// Message interface
interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const ChemistryAIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendToGemini = async (question: string): Promise<string> => {
    // Example Gemini API call — replace with actual implementation
    const prompt = `
You are a helpful assistant specialized in chemistry. Only answer chemistry-related questions. 
If the user asks about something unrelated, politely tell them you only assist with chemistry.

User: ${question}
Assistant:`;

    // Replace this fetch with real Gemini API call
    const response = await fetch("/api/gemini-chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });

    const data = await response.json();
    return data.reply || "Sorry, something went wrong.";
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: ChatMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const aiText = await sendToGemini(input);
      const aiMessage: ChatMessage = { sender: "ai", text: aiText };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Error connecting to Gemini API." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultLayout>
      <div className="bg-gray-900  mb-4 h-full w-full rounded-lg p-4 text-graydark shadow-lg dark:text-white">
        <header className="border-gray-700 mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold">🔬 Chemistry AI Chat</h2>
          <p className="text-gray-400 text-sm">
            Ask me anything about chemistry
          </p>
        </header>

        <div
          id="chat-messages"
          className="mb-4 max-h-[400px] space-y-3 overflow-y-auto pr-2"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="text-gray-400 animate-pulse text-sm">
              AI is typing...
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            placeholder="Ask a chemistry question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-gray-900 placeholder:text-gray-500 ring-gray-300 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:ring-gray-700 flex-grow rounded-md bg-white px-4 py-2 shadow-sm outline-none ring-1 transition focus:ring-2 focus:ring-blue-500 dark:text-white"
          />

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default ChemistryAIChat;
