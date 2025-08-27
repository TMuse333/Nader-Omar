"use client";

import React, { useState } from "react";
import Dashboard from "@/backendComponents/dashboard/dashboard";
import Image from "next/image";
import { motion } from "framer-motion";
import agent from "../../public/nader.jpg"; // adjust path if needed

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

  if (!authenticated) {
    return (
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 p-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="h-32 w-32 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-blue-300 shadow-lg mb-6">
            <Image
              src={agent}
              alt="Nader Omar"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-900 via-blue-700 to-blue-400 bg-clip-text text-transparent mb-4">
            Welcome, Nader
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            Please enter your password to access your dashboard.
          </p>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 w-64 border border-black text-black rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            placeholder="Enter password"
          />
          <button
            onClick={checkPassword}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Enter
          </button>

          {error && <p className="text-red-600 mt-4">{error}</p>}
        </motion.div>
      </motion.main>
    );
  }

  // ✅ Show dashboard once password is correct
  return (
    <main className="bg-blue-100 text-black min-h-screen">
      <Dashboard />
    </main>
  );
};

export default DashboardPage;
