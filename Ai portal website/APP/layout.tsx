import React from "react";
import './global.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export const metadata = {
	title: 'Nexus AI & Marketing — AI Automation & Digital Marketing',
	description:
		'Helping businesses save 40+ hours a week through custom AI agents and data-driven marketing. PDF courses to scale your agency.',
	keywords: ['AI automation', 'digital marketing', 'PDF courses', 'LLM', 'agency'],
	openGraph: {
		title: 'Nexus AI & Marketing',
		description:
			'Save time and scale revenue with custom AI agents and data-driven marketing — PDF courses available.',
		url: 'https://nexus-ai-marketing.example',
		siteName: 'Nexus AI & Marketing',
		images: [],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Nexus AI & Marketing',
		description:
			'Helping businesses save 40+ hours a week through custom AI agents and data-driven marketing.',
	},
	robots: {
		index: true,
		follow: true,
	},
};

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} font-sans bg-slate-900 text-slate-100 antialiased`}> 
				<Navbar />
				<main className="min-h-screen">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
