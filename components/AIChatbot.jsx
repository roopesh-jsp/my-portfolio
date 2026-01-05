"use client";
import React, { useEffect, useRef, useState } from "react";
import ai from "@/assests/ai.png";
import Image from "next/image";

function AiChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiTimeoutId, setAiTimeoutId] = useState(null);
  const bottomRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("chat_messages"));
    if (stored) setMessages(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem("chat_messages", JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isAiLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
    };

    const aiPlaceholder = {
      id: Date.now() + 1,
      sender: "ai",
      text: "",
      isLoading: true,
    };

    setMessages((prev) => [...prev, userMessage, aiPlaceholder]);
    setInput("");
    setIsAiLoading(true);

    controllerRef.current = new AbortController();

    try {
      const res = await fetch("/api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: input,
        }),
        signal: controllerRef.current.signal,
      });

      // if (!res.ok) {
      //   throw new Error("Failed to fetch AI response");
      // }

      if (!res.ok) {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.isLoading
              ? {
                  ...msg,
                  text: "SORRY: failed to fetch AI response (maybe rate limit exceeded). please try again tomorrow.",
                  isLoading: false,
                }
              : msg
          )
        );
      }
      const data = await res.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.isLoading
            ? {
                ...msg,
                text: data.text || "SORRY: No response from AI.",
                isLoading: false,
              }
            : msg
        )
      );
    } catch (error) {
      if (error.name !== "AbortError") {
        setMessages((prev) =>
          prev.map((msg) =>
            msg.isLoading
              ? {
                  ...msg,
                  text: "SORRY: Something went wrong. Please try again.",
                  isLoading: false,
                }
              : msg
          )
        );
      }
    } finally {
      setIsAiLoading(false);
      controllerRef.current = null;
    }
  };

  const stopAiResponse = () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    setMessages((prev) => prev.filter((msg) => !msg.isLoading));
    setIsAiLoading(false);
  };

  const clearChat = () => {
    localStorage.removeItem("chat_messages");
    setMessages([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="flex flex-col md:flex-row gap-6">
        {/* INFO PANEL */}
        <div className="md:w-[35%] order-1 md:order-2">
          <div className="h-full  rounded-xl py-4 px-6 backdrop-blur-md bg-white/5 border border-white/10">
            <h2 className="flex mb-5 items-center gap-3 text-2xl font-semibold text-indigo-400">
              <Image
                src={ai}
                alt="AI icon"
                width={28}
                height={28}
                className="opacity-90  font-medium rounded-full  bg-indigo-500/20"
              />
              <span className="px-2 py-0.5 text-sm font-medium rounded-md bg-indigo-500/10 text-indigo-300">
                Ask My AI
              </span>
            </h2>

            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Ask anything about me, my projects, skills, or journey. The bot
              replies as if it’s <span className="text-white">me</span>.
            </p>

            <p className="mt-6 text-xs text-gray-400">
              ⚠️ Powered by free Gemini AI. Responses may be slow or
              unavailable.
            </p>
          </div>
        </div>

        {/* CHAT */}
        <div className="md:w-[65%] order-2 md:order-1">
          <div className="h-[75vh] flex flex-col rounded-xl backdrop-blur-md bg-white/5 border border-white/10">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-white/10">
              <h1 className="text-indigo-400 font-medium">Rupz</h1>
              <button
                onClick={clearChat}
                className="text-xs text-red-400 hover:text-red-500"
              >
                Clear Chat
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 chat-scroll">
              {messages.length === 0 && (
                <p className="text-center text-sm text-gray-400 mt-10">
                  Start the conversation 👋
                </p>
              )}

              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "ai" && msg.isLoading ? (
                    <div className="flex justify-start">
                      <div className="w-40 h-5 rounded-lg bg-white/10 animate-pulse" />
                    </div>
                  ) : (
                    <div
                      className={`max-w-[75%] px-4 py-2 rounded-xl text-sm ${
                        msg.sender === "user"
                          ? "bg-indigo-500/80 text-white rounded-br-none"
                          : msg.text?.startsWith("SORRY:")
                          ? "bg-red-500/10 text-red-300 border border-red-500/30 rounded-bl-none"
                          : "bg-white/10 text-gray-200 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="border-t border-white/10 px-4 py-3 flex gap-2">
              <input
                type="text"
                value={input}
                disabled={isAiLoading}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={
                  isAiLoading ? "AI is responding..." : "Type your message..."
                }
                className="flex-1 bg-transparent border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-indigo-400 disabled:opacity-50"
              />

              {!isAiLoading ? (
                <button
                  onClick={handleSend}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Send
                </button>
              ) : (
                <button
                  onClick={stopAiResponse}
                  className="bg-red-500/80 hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm"
                >
                  Stop
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scrollbar */}
      <style jsx>{`
        .chat-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scroll::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.6);
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
}

export default AiChatBot;
