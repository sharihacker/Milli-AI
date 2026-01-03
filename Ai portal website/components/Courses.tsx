"use client";

import React from 'react';
import { motion } from 'framer-motion';

const CourseCard = ({ title, price, desc }: { title: string; price: string; desc: string }) => (
  <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/40 to-slate-900 p-6">
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-white font-bold">{title}</h3>
        <p className="mt-2 text-slate-300 text-sm">{desc}</p>
      </div>

      <div className="text-right">
        <div className="text-2xl font-extrabold text-white">{price}</div>
        <a href="#contact" className="mt-3 inline-block rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-900">Buy Now</a>
      </div>
    </div>
  </motion.div>
);

export default function Courses() {
  return (
    <section id="courses" className="container mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Courses</h2>
        <p className="mt-2 text-slate-300">Premium PDF guides designed for agency owners and marketers.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <CourseCard title="The AI Agency Blueprint" price="$49" desc="A step-by-step playbook to launch and scale an AI agency." />
        <CourseCard title="Prompt Engineering for Marketers" price="$29" desc="Craft high-value prompts that convert and automate workflows." />
        <CourseCard title="Automated Content Machine" price="$39" desc="Build content systems that publish and scale with AI." />
      </div>
    </section>
  );
}
