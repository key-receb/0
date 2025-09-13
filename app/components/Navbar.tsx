"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }} 
      animate={{ y: 0, opacity: 1 }} 
      transition={{ duration: 0.6 }}
      className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">KeyReceb</h1>
        <div className="space-x-6 text-sm font-medium">
          <a href="#">Home</a>
          <a href="#">Docs</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </div>
      </div>
    </motion.nav>
  );
}
