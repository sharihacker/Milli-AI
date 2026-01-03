import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Courses from '../components/Courses';
import CTA from '../components/CTA';

export default function Page() {
	return (
		<>
			<Hero />
			<Services />
			<Courses />
			<CTA />
		</>
	);
}
