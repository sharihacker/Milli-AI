"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function SocialProof() {
  return (
    <motion.section
      id="social"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t border-slate-800"
    >
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <div className="text-sm text-slate-300">Trusted by <span className="font-semibold text-white">500+ Entrepreneurs</span></div>

        <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-slate-400">Logo</div>
          <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-slate-400">Logo</div>
          <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-slate-400">Logo</div>
          <div className="h-8 w-24 bg-slate-800 rounded flex items-center justify-center text-slate-400">Logo</div>
        </div>
      </div>
    </motion.section>
  );
}
