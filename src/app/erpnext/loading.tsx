"use client";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <motion.div
        className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
      <p className="ml-3 text-lg font-semibold text-gray-600">Loading...</p>
    </div>
  );
}

