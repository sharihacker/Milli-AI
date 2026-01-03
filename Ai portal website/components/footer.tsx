"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
	const [email, setEmail] = useState('');

	const subscribe = (e: React.FormEvent) => {
		e.preventDefault();
		if (!email) return;
		// placeholder: integrate with newsletter provider
		console.log('subscribe:', email);
		setEmail('');
		alert('Thanks — you are subscribed (demo)');
	};

	return (
		<footer className="border-t border-slate-800/60 bg-slate-900">
			<div className="container mx-auto px-6 py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					<div>
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 rounded bg-cyan-500 flex items-center justify-center text-slate-900 font-bold">NA</div>
							<div>
								<div className="text-white font-semibold">Nexus AI & Marketing</div>
								<div className="text-slate-400 text-sm">AI Automation & Digital Marketing</div>
							</div>
						</div>
						<ul className="space-y-2 text-slate-300">
							<li><Link href="/" className="hover:text-white">Home</Link></li>
							<li><Link href="/courses" className="hover:text-white">Courses</Link></li>
							<li><Link href="#contact" className="hover:text-white">Contact</Link></li>
							<li><Link href="/blog" className="hover:text-white">Blog</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-white mb-3">Learn</h4>
						<ul className="space-y-2 text-slate-300 text-sm">
							<li><Link href="/learn/ai-fundamentals" className="hover:text-white">AI Fundamentals</Link></li>
							<li><Link href="/learn/prompt-engineering" className="hover:text-white">Prompt Engineering Mastery</Link></li>
							<li><Link href="/learn/automation-workflows" className="hover:text-white">Automation Workflows</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-white mb-3">Legal</h4>
						<ul className="space-y-2 text-slate-300 text-sm">
							<li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
							<li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-white mb-3">Follow & Newsletter</h4>
						<div className="flex items-center gap-3 mb-4">
							<a href="#" aria-label="Twitter" className="p-2 rounded-full bg-slate-800/40 hover:bg-slate-800">
								<svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M22 4.01c-.7.31-1.45.52-2.24.61a3.92 3.92 0 0 0 1.72-2.17 7.86 7.86 0 0 1-2.5.95A3.9 3.9 0 0 0 12.1 6c0 .31.03.61.1.9A11.08 11.08 0 0 1 3.1 4.6a3.9 3.9 0 0 0 1.21 5.21c-.57-.02-1.12-.17-1.6-.43v.04c0 1.9 1.35 3.49 3.15 3.85-.33.09-.67.14-1.02.14-.25 0-.5-.02-.74-.07.5 1.56 1.94 2.7 3.65 2.73A7.84 7.84 0 0 1 2 19.54a11.07 11.07 0 0 0 6 1.77c7.2 0 11.15-6 11.15-11.2v-.51A7.94 7.94 0 0 0 22 4.01z"/>
								</svg>
							</a>
							<a href="#" aria-label="LinkedIn" className="p-2 rounded-full bg-slate-800/40 hover:bg-slate-800">
								<svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M4.98 3.5a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.95 1.8-1.95 3.7-1.95 4 0 4.7 2.6 4.7 6v7.35H19v-6.5c0-1.55-.03-3.55-2.2-3.55-2.2 0-2.54 1.73-2.54 3.45V21H9z"/>
								</svg>
							</a>
							<a href="#" aria-label="GitHub" className="p-2 rounded-full bg-slate-800/40 hover:bg-slate-800">
								<svg className="w-5 h-5 text-slate-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
									<path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.95 3.2 9.14 7.64 10.62.56.1.76-.24.76-.54 0-.27-.01-1-.02-1.96-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.24-1.65-1.24-1.65-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.24.92.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.4.11-2.92 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96 0 1.93.13 2.84.38 2.16-1.45 3.11-1.15 3.11-1.15.61 1.52.23 2.64.11 2.92.72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.52.4.34.76 1.02.76 2.06 0 1.49-.01 2.69-.01 3.06 0 .3.2.65.77.54C20.05 20.89 23.25 16.7 23.25 11.75 23.25 5.48 18.27.5 12 .5z"/>
								</svg>
							</a>
						</div>

						<form onSubmit={subscribe} className="flex items-center gap-2">
							<label htmlFor="newsletter" className="sr-only">Newsletter email</label>
							<input id="newsletter" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email" className="flex-1 rounded-full bg-slate-800/40 border border-slate-700 px-3 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500" />
							<button type="submit" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900">Subscribe</button>
						</form>
					</div>
				</div>

				<div className="mt-8 text-center text-slate-500 text-sm">© {new Date().getFullYear()} Nexus AI & Marketing. All rights reserved.</div>
			</div>
		</footer>
	);
}
