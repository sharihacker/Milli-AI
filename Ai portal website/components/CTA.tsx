"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <motion.section id="contact" className="container mx-auto px-6 py-16" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="rounded-xl bg-slate-800/40 p-8 text-center">
        <h2 className="text-2xl font-bold text-white">Ready to Evolve?</h2>
        <p className="mt-3 text-slate-300">Let's build custom AI agents and growth systems that save time and scale revenue.</p>
        <div className="mt-6">
          <a href="mailto:hello@nexusai.example" className="inline-flex items-center rounded-md bg-cyan-500 px-6 py-3 font-medium text-slate-900 hover:brightness-95">Contact Us</a>
        </div>
      </div>
    </motion.section>
  );
}
