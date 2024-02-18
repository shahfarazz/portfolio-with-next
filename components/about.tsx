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
					After earning my degree in{' '}
					<span className="font-medium">Computer Science</span>, I
					blend academic prowess with practical experience. 🚀 With a
					Bachelor of Sciences from Lahore, Pakistan, I've cultivated
					a strong foundation, excelling in courses such as Software
					Engineering, Databases, and Human Computer Interaction.
				</p>
				<p className="mb-3">
					My technical toolkit spans diverse languages like Python,
					Java, and JavaScript, along with proficiency in frameworks
					like ReactJS and AngularJS. In professional roles at
					Unilever Karachi and Clariba SEIDOR, I honed my skills in
					digital transformation and collaborative research, driving
					impactful projects like ROLL and a fraud detection pipeline
					for clients in Iraq.
				</p>
				<p className="mb-3">
					My commitment to excellence has earned me accolades like the
					Deans Honors List Award, reflecting my dedication to
					academic and professional success.
				</p>
			</>

			<p>
				<span className="italic">Away from the code editor</span>, I
				find joy in soccer matches, cinematic marvels 🎬, harmonious
				melodies 🎵, culinary explorations, and the simple joys of being
				a food enthusiast. The pursuit of knowledge is my guiding light,
				always propelling me towards new horizons. 🌱
			</p>
		</motion.section>
	);
}
