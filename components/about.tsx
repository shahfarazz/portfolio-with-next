'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
	const { ref } = useSectionInView('About');

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			id="about"
		>
			<SectionHeading>About me 🤙</SectionHeading>
			<>
				<p className="mb-3">
					I'm currently pursuing my <span className="font-medium">Master’s in Computer Science</span> at Virginia Tech, with expected graduation in <span className="font-medium">May 2025</span>. 📚 With a strong academic foundation built during my undergraduate studies in Lahore, Pakistan, I've focused on areas like Software Engineering, Databases, and Human-Computer Interaction.
				</p>
				<p className="mb-3">
					My technical toolkit includes Python, Java, JavaScript, and TypeScript, along with hands-on experience using frameworks like ReactJS and Flutter. Professionally, I’ve contributed to impactful projects in full-stack development, data analysis, and cloud infrastructure through roles at Reliance Aviation Tech, Rehnaa, and Virginia Tech’s Innovation Campus.
				</p>
				<p className="mb-3">
					I’ve been fortunate to receive recognition like the Dean’s Honor List Award, but what truly drives me is creating practical, scalable solutions that make a difference.
				</p>
			</>
	
			<p>
				<span className="italic">Outside the world of tech</span>, I enjoy long drives with a good playlist 🎶, catching a soccer match ⚽, diving into film and food 🍜, and exploring new places. I'm always eager to learn and grow, both as an engineer and as a human. 🌱
			</p>
		</motion.section>
	);
	
}
