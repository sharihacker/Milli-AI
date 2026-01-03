"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'AI Automation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: integrate with email service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: 'AI Automation', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">Contact Our AI Team</h1>
          <p className="mt-3 text-lg text-slate-300">
            Get in touch with us for AI automation, marketing strategies, or course inquiries.
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              {/* Office Details */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Get in Touch</h2>
                <p className="text-slate-300 mb-6">
                  Have questions about our AI automation services or digital marketing courses? Reach out and our team will respond within 24 hours.
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-brand-cyan">Email</p>
                    <a href="mailto:hello@nexusai.com" className="text-slate-200 hover:text-white">
                      hello@nexusai.com
                    </a>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brand-cyan">Business Hours</p>
                    <p className="text-slate-300">Monday – Friday, 9 AM – 6 PM EST</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-brand-cyan">Response Time</p>
                    <p className="text-slate-300">We typically respond within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm font-semibold text-white mb-4">Follow Us</p>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="p-3 rounded-full bg-slate-800/40 hover:bg-brand-cyan/20 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M22 4.01c-.7.31-1.45.52-2.24.61a3.92 3.92 0 0 0 1.72-2.17 7.86 7.86 0 0 1-2.5.95A3.9 3.9 0 0 0 12.1 6c0 .31.03.61.1.9A11.08 11.08 0 0 1 3.1 4.6a3.9 3.9 0 0 0 1.21 5.21c-.57-.02-1.12-.17-1.6-.43v.04c0 1.9 1.35 3.49 3.15 3.85-.33.09-.67.14-1.02.14-.25 0-.5-.02-.74-.07.5 1.56 1.94 2.7 3.65 2.73A7.84 7.84 0 0 1 2 19.54a11.07 11.07 0 0 0 6 1.77c7.2 0 11.15-6 11.15-11.2v-.51A7.94 7.94 0 0 0 22 4.01z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    className="p-3 rounded-full bg-slate-800/40 hover:bg-brand-cyan/20 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M4.98 3.5a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6v7.35H19v-6.5c0-1.55-.03-3.55-2.2-3.55-2.2 0-2.54 1.73-2.54 3.45V21H9z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    aria-label="GitHub"
                    className="p-3 rounded-full bg-slate-800/40 hover:bg-brand-cyan/20 transition-all duration-200"
                  >
                    <svg className="w-5 h-5 text-brand-cyan" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.16-1.45 3.11-1.15 3.11-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.52.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .3.2.65.77.54C20.05 20.89 23.25 16.7 23.25 11.75 23.25 5.48 18.27.5 12 .5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="glassmorphism p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="inline-block p-3 rounded-full bg-brand-cyan/20 mb-4">
                  <svg className="w-8 h-8 text-brand-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Message Sent!</h3>
                <p className="mt-2 text-slate-300">Thanks for reaching out. We'll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-200 mb-2">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-200 mb-2">
                    Business Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                    placeholder="john@company.com"
                  />
                </div>

                {/* Subject Dropdown */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-slate-200 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                  >
                    <option value="AI Automation">AI Automation</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Course Support">Course Support</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full rounded-lg bg-slate-800/40 border border-slate-700 px-4 py-2 text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent resize-none"
                    placeholder="Tell us more about your project..."
                  />
                </div>

                {/* Send Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-brand-cyan to-brand-purple px-6 py-3 font-semibold text-slate-900 shadow-glow hover:brightness-95 transition-all duration-200"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
