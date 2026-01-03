"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-6 py-28"
    >
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">Scaling with AI</h1>
        <p className="mt-6 text-lg text-slate-300">Scale revenue and save 40+ hours weekly with custom AI agents, automation workflows, and data-driven marketing strategies.</p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#courses" className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg">Explore Courses</a>
          <a href="#contact" className="inline-flex items-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 hover:bg-slate-800/40">Get Started</a>
        </div>
      </div>
    </motion.section>
  );
}
