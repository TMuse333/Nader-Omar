"use client";

import React, { useState } from "react";
import Dashboard from "@/backendComponents/dashboard/dashboard";
import Image from "next/image";
import { motion } from "framer-motion";
import agent from "../../public/nader.jpg";

const DashboardPage = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState("");

  const checkPassword = () => {
    if (password === "getMoreLeads#93") {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  };

  if (!authenticated) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-[#0f0f0f] p-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          {/* Glowing ring around photo */}
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-600 blur-xl opacity-30 animate-pulse" />
            <div className="relative h-32 w-32 md:h-40 md:w-40 rounded-full overflow-hidden border-2 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
              <Image
                src={agent}
                alt="Nader Omar"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Welcome, Nader
          </h2>
          <p className="text-gray-500 text-sm mb-8">
            Enter your password to access the dashboard
          </p>

          <div className="w-full max-w-xs space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyPress}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#2a2a2a] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent placeholder-gray-500"
              placeholder="Enter password"
            />
            <button
              onClick={checkPassword}
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-lg shadow-cyan-500/20"
            >
              Access Dashboard
            </button>
          </div>

          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 mt-4 text-sm"
            >
              {error}
            </motion.p>
          )}

          <p className="text-gray-600 text-xs mt-8">
            Powered by FocusFlow Software
          </p>
        </motion.div>
      </motion.main>
    );
  }

  return (
    <main className="bg-[#0f0f0f] text-white min-h-screen">
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
