"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight"
      >
        Dijital Güvenlikte Yeni Standart
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-600 max-w-2xl"
      >
        Apple, Google ve Tesla’ya taş çıkartan enterprise key platformu.
      </motion.p>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-8"
      >
        <button className="rounded-2xl px-8 py-6 text-lg bg-black text-white hover:bg-gray-800">
          Başla
        </button>
      </motion.div>
    </section>
  );
}
