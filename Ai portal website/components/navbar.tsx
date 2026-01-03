"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const router = useRouter();

	const submitSearch = (e: React.FormEvent) => {
		e.preventDefault();
		const q = query.trim();
		if (!q) return;
		setQuery('');
		setOpen(false);
		router.push(`/search?q=${encodeURIComponent(q)}`);
	};

	return (
		<header className="sticky top-0 z-50">
			<div className="backdrop-blur-sm bg-slate-900/60 border-b border-slate-800/60">
				<div className="container mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">
					<div className="flex items-center gap-3">
						<Link href="/" className="flex items-center gap-3">
							<div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyan-400 to-indigo-500 flex items-center justify-center text-slate-900 font-bold">NA</div>
							<span className="hidden sm:inline-block text-lg font-semibold text-cyan-400">Nexus AI</span>
						</Link>
					</div>

					<nav className="hidden md:flex items-center gap-6">
						<Link href="/" className="text-sm text-slate-200 hover:text-white">Home</Link>
						<Link href="/courses" className="text-sm text-slate-200 hover:text-white">Courses</Link>
						<Link href="/blog" className="text-sm text-slate-200 hover:text-white">Blog</Link>
						<Link href="#contact" className="text-sm text-slate-200 hover:text-white">Contact</Link>
					</nav>

					<div className="flex-1 hidden md:flex items-center justify-center">
						<form onSubmit={submitSearch} className="w-full max-w-md">
							<label htmlFor="nav-search" className="sr-only">Search</label>
							<div className="relative">
								<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									<circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								<input
									id="nav-search"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
									className="w-full rounded-full bg-slate-800/40 border border-slate-700 px-10 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
									placeholder="Search courses, guides..."
								/>
							</div>
						</form>
					</div>

					<div className="flex items-center gap-3">
						<Link href="/login" className="hidden md:inline-block rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 hover:bg-slate-800">Login</Link>
						<Link href="/signup" className="hidden md:inline-block rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-900">Sign Up</Link>

						<button aria-label="menu" onClick={() => setOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-200 hover:bg-slate-800/40">
							{open ? (
								<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							) : (
								<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
									<path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{/* Mobile panel */}
				{open && (
					<div className="md:hidden border-t border-slate-800/60 bg-slate-900/95 backdrop-blur-sm">
						<div className="px-4 py-4 space-y-3">
							<div className="flex flex-col gap-2">
								<Link href="/" onClick={() => setOpen(false)} className="text-slate-100 font-medium">Home</Link>
								<Link href="/courses" onClick={() => setOpen(false)} className="text-slate-100">Courses</Link>
								<Link href="/blog" onClick={() => setOpen(false)} className="text-slate-100">Blog</Link>
								<Link href="#contact" onClick={() => setOpen(false)} className="text-slate-100">Contact</Link>
							</div>

							<form onSubmit={submitSearch} className="mt-2">
								<label htmlFor="mobile-search" className="sr-only">Search</label>
								<div className="relative">
									<svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" aria-hidden>
										<path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
										<circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									<input
										id="mobile-search"
										value={query}
										onChange={(e) => setQuery(e.target.value)}
										className="w-full rounded-full bg-slate-800/40 border border-slate-700 px-10 py-2 text-sm text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-cyan-500"
										placeholder="Search courses, guides..."
									/>
								</div>
							</form>

							<div className="flex items-center gap-3 pt-2">
								<Link href="/login" onClick={() => setOpen(false)} className="flex-1 text-center rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200">Login</Link>
								<Link href="/signup" onClick={() => setOpen(false)} className="flex-1 text-center rounded-md bg-gradient-to-r from-cyan-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-slate-900">Sign Up</Link>
							</div>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
