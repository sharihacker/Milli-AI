"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  price: number;
  category: 'AI' | 'Marketing';
  learnings: string[];
}

const courses: Course[] = [
  {
    id: '1',
    title: 'AI Implementation Mastery',
    price: 79,
    category: 'AI',
    learnings: [
      'Deploy custom LLM integrations into your workflows',
      'Build autonomous AI agents that work 24/7',
      'Optimize prompts for maximum output quality',
      'Integrate APIs and automate complex processes',
    ],
  },
  {
    id: '2',
    title: 'The 7-Figure Digital Marketer',
    price: 99,
    category: 'Marketing',
    learnings: [
      'Build high-ROAS ad campaigns from scratch',
      'Master audience segmentation and targeting',
      'Scale revenue to 7 figures with automation',
      'Create funnels that convert cold traffic',
    ],
  },
  {
    id: '3',
    title: 'Prompt Architecture',
    price: 49,
    category: 'AI',
    learnings: [
      'Design prompts that produce consistent results',
      'Chain prompts for advanced AI workflows',
      'Fine-tune outputs with advanced techniques',
      'Build reusable prompt templates for teams',
    ],
  },
];

const CourseCard = ({ course }: { course: Course }) => (
  <motion.div
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 16 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl border border-slate-800/60 bg-gradient-to-br from-slate-900/40 to-slate-900 p-6 flex flex-col h-full shadow-glow hover:shadow-lg transition-all duration-300"
  >
    <div className="mb-4">
      <span className="inline-block rounded-full bg-brand-cyan/20 px-3 py-1 text-xs font-semibold text-brand-cyan">
        {course.category}
      </span>
    </div>

    <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>

    <div className="text-3xl font-extrabold text-brand-cyan mb-4">${course.price}</div>

    <div className="mb-6 flex-grow">
      <h4 className="text-sm font-semibold text-slate-200 mb-3">What you will learn:</h4>
      <ul className="space-y-2">
        {course.learnings.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
            <span className="text-brand-cyan mt-0.5">✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <button className="w-full rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple px-4 py-3 font-semibold text-slate-900 hover:brightness-95 transition-all duration-200">
      Download PDF
    </button>
  </motion.div>
);

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCourses =
    activeFilter === 'All' ? courses : courses.filter((c) => c.category === activeFilter);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Premium Course Library</h1>
          <p className="mt-3 text-lg text-slate-300">
            Master AI automation and digital marketing with our expertly crafted PDF courses.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 flex items-center justify-center gap-4 flex-wrap"
        >
          {['All', 'AI', 'Marketing'].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-6 py-2 text-sm font-semibold transition-all duration-200 ${
                activeFilter === filter
                  ? 'bg-brand-cyan text-slate-900'
                  : 'border border-slate-700 text-slate-300 hover:border-slate-600'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => <CourseCard key={course.id} course={course} />)
          ) : (
            <div className="col-span-full text-center text-slate-400 py-12">
              <p>No courses found for this category.</p>
            </div>
          )}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl bg-gradient-to-br from-brand-cyan/10 to-brand-purple/10 border border-slate-800/60 p-8 text-center"
        >
          <h2 className="text-2xl font-bold text-white">Bundle All Courses & Save 30%</h2>
          <p className="mt-2 text-slate-300">Access all three premium courses with a single bundle purchase.</p>
          <button className="mt-6 rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple px-6 py-3 font-semibold text-slate-900 hover:brightness-95">
            Get Bundle ($199)
          </button>
        </motion.div>
      </div>
    </div>
  );
}
