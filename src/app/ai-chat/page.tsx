"use client";

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import React, { useState } from "react";
import { DiAtom } from "react-icons/di";
import { IoSend } from "react-icons/io5";

interface ChatMessage {
  sender: "user" | "ai";
  text: string;
}

const ChemistryAIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendToGemini = async (question: string): Promise<string> => {
    const response = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input }), // must send 'question' key
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
      <div className="bg-gray-900 mb-4 h-full w-full rounded-lg p-4 text-graydark shadow-lg dark:text-white">
        <header className="border-gray-700 mb-4 border-b pb-2">
          <h2 className="text-xl font-semibold">🔬 Chemistry AI Chat</h2>
          <p className="text-gray-400 text-sm">
            Ask me anything about chemistry
          </p>
        </header>

        <div className="mb-4 max-h-[400px] space-y-3 overflow-y-auto pr-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] whitespace-pre-wrap break-words rounded-xl px-5 py-3 text-sm shadow-md
        ${
          msg.sender === "user"
            ? "rounded-br-none bg-blue-600 text-white"
            : "bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 rounded-bl-none"
        }`}
                {...(msg.sender === "ai"
                  ? { dangerouslySetInnerHTML: { __html: msg.text } }
                  : {})}
              >
                {msg.sender === "user" ? msg.text : null}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="mb-4 flex justify-start">
              <div className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 flex max-w-[80%] animate-pulse items-center gap-2 rounded-xl px-5 py-3 text-sm shadow-md">
                <DiAtom className="animate-spin text-xl" />
                <span>AI is thinking...</span>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            placeholder="Ask a chemistry question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="text-gray-900 placeholder:text-gray-500 ring-gray-300 dark:bg-gray-800 dark:placeholder:text-gray-400 dark:ring-gray-700 dark:bg-gray-800 flex-grow rounded-md bg-white px-4 py-2 shadow-sm outline-none ring-1 transition focus:ring-2 focus:ring-blue-500 dark:text-black"
          />

          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
          >
            <IoSend size={25} />
          </button>
        </form>
      </div>
    </DefaultLayout>
  );
};

export default ChemistryAIChat;
