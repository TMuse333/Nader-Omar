'use client';

import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { X } from 'lucide-react'; // Optional close icon

const ChatWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState<
  { role: 'user' | 'assistant'; content: string }[]
>([
  {
    role: 'assistant',
    content: `👋 Hi there! I’m Nader Omar’s virtual assistant.

I can help you:
• Learn about Nader's experience and services  
• Understand how he works with buyers and sellers  
• Get in touch or leave a message for him  

What would you like to know?`,
  },
]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false); // 👈 controls open/close

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [conversation, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user' as const, content: input };
    setConversation((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);
    setError('');

    try {
      const res = await axios.post('/api/chat', { prompt: input });
      const data = res.data;

      if (data.error) {
        setError(data.error);
      } else {
        const assistantMessage = { role: 'assistant' as const, content: data.reply };
        setConversation((prev) => [...prev, assistantMessage]);
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.log(err);
    }

    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Icon */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-0 md:bottom-24 right-6 z-50 w-[90vw] max-w-md bg-white rounded-xl shadow-2xl border border-gray-200 flex flex-col
        ">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-blue-600 text-white rounded-t-xl">
            <h4 className="font-semibold text-lg">Ask Nader’s AI Assistant</h4>
            <button onClick={() => setOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto px-4 pt-4 space-y-3">
            {conversation.map((msg, index) => (
              <div
                key={index}
                className={`px-4 py-3 rounded-2xl max-w-[80%] text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white shadow-sm'
                    : 'mr-auto bg-gray-100 text-gray-800 border border-gray-200 shadow'
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <p className="text-sm text-gray-500 italic">Typing...</p>}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t text-black">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              placeholder="Type your question here..."
              className="w-full resize-none p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="mt-2 w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-all disabled:opacity-50"
            >
              Send
            </button>
            {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
