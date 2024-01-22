"use client";

import { useState } from "react";
// This code snippet is a React functional component called GPT. It sets up a form with a textarea input and a button. When the form is submitted, it sends a POST request to the /api/OpenAI/openaiv4 endpoint with the value of the textarea as the request payload. If the response from the server is successful, it displays the response in a separate section below the form. The component manages the state of the prompt (input value), response (server response), and isLoading (whether the request is in progress) using the useState hook.
export default function GPT() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/OpenAI/openaiv4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      if (res.ok) {
        const data = await res.json();
        setResponse(data.response);
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setResponse("Failed to fetch response.");
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto mt-16 h-screen rounded-xl p-4 text-black dark:bg-slate-800 dark:text-white">
      <span className=" p-2 pb-4 text-2xl font-bold">GPT-4</span>
      <form onSubmit={handleSubmit} className="mt-1 flex flex-col gap-3">
        <textarea
          className="rounded border border-gray-300 p-2 text-gray-700 dark:text-gray-900"
          placeholder="Enter your prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="rounded bg-blue-500 p-2 text-white hover:bg-blue-600"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send Prompt"}
        </button>
      </form>
      {response && (
        <div className="mt-4 rounded border border-gray-300 p-4">
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
