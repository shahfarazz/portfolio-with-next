'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const groupedSkills = {
	"Languages": [
		"Python", "Java", "JavaScript", "TypeScript", "C++", "C#", "Kotlin", "Dart", "Solidity", "SQL", "MATLAB", "LaTeX"
	],
	"Frameworks & Libraries": [
		"ReactJS", "AngularJS", "Flutter", "Express.js", "Node.js", "Spring Boot", "Django", "Flask", "Redux"
	],
	"Data & ML": [
		"NumPy", "Pandas", "SciPy", "Matplotlib", "Scikit-learn", "TensorFlow", "Jupyter", "DataIKU"
	],
	"Databases": [
		"MySQL", "PostgreSQL", "MongoDB", "Snowflake"
	],
	"Tools & DevOps": [
		"Git", "Docker", "Bash", "Postman", "Firebase", "Selenium", "Vercel", "Figma", "MetaMask"
	],
	"Cloud": [
		"AWS (Lambda, ECS, CloudFormation)", "Google Cloud Platform"
	]
};


export default function Skills() {
	const { ref } = useSectionInView('Skills');

	return (
		<section
			id="skills"
			ref={ref}
			className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
		>
			<SectionHeading>My Skills</SectionHeading>
			{Object.entries(groupedSkills).map(([category, skills]) => (
				<div key={category} className="mb-6">
					<h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-300">
						{category}
					</h3>
					<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
						{skills.map((skill, index) => (
							<motion.li
								key={index}
								variants={fadeInAnimationVariants}
								initial="initial"
								whileInView="animate"
								viewport={{ once: true }}
								custom={index}
								className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
							>
								{skill}
							</motion.li>
						))}
					</ul>
				</div>
			))}
		</section>
	);
}
