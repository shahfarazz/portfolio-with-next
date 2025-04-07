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
			<SectionHeading>About Me</SectionHeading>
			<>
				<p className="mb-3">
					I'm a Master’s student in Computer Science at Virginia Tech, graduating <span className="font-medium">May 2025</span>. Before that, I studied in Lahore, Pakistan, building a foundation in software engineering, databases, and human-computer interaction.
				</p>
				<p className="mb-3">
					From full-stack mobile apps to scalable cloud projects, I’ve worked across teams at Reliance Aviation Tech, Rehnaa, and Virginia Tech’s Innovation Campus. My toolkit includes Python, Java, JavaScript, TypeScript, and frameworks like React and Flutter.
				</p>
				<p className="mb-3">
					What keeps me hooked? Solving real-world problems with clean, thoughtful code. Bonus if it helps someone else do something faster, smarter, or just plain better.
				</p>
			</>
	
			<p>
				<span className="italic">When I’m not coding</span>, I’m probably on a long drive with a loud playlist, catching a soccer match, chasing good food, or watching a film that makes me question my life choices. Always learning—on and off the screen.
			</p>
		</motion.section>
	);
	
	
}
