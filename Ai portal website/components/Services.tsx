"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 12 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-slate-800/60 bg-gradient-to-b from-slate-900/40 to-slate-900 p-6">
    <h3 className="text-white font-semibold text-lg">{title}</h3>
    <p className="mt-3 text-slate-300 text-sm">{children}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-6 py-12">
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Services</h2>
        <p className="mt-2 text-slate-300">High-impact services to automate operations and amplify growth.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="AI Automation">Custom LLM integrations, autonomous agents, and workflow optimization to reduce manual work.</Card>
        <Card title="Ad Management">Data-driven ad campaigns with measurable ROAS and continuous optimization.</Card>
        <Card title="Content Strategy">Automated content pipelines, repurposing, and creative systems to scale audience growth.</Card>
      </div>
    </section>
  );
}
