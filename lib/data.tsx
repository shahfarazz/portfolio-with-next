import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
	{
		name: 'Home',
		hash: '#home',
	},
	{
		name: 'About',
		hash: '#about',
	},
	// {
	//   name: "Projects",
	//   hash: "#projects",
	// },
	{
		name: 'Skills',
		hash: '#skills',
	},
	{
		name: 'Experience',
		hash: '#experience',
	},
	{
		name: 'Contact',
		hash: '#contact',
	},
] as const;

type Experience = {
	title: string;
	company: string;
	description: React.ReactNode;
	icon: React.ReactNode;
	date: string;
	// add an optional type of link
	link?: string;
	//add an optional type of video which allows for a video to be displayed
	video?: string;
};

export const experiencesData: Experience[] = [
	{
		title: 'Mobile Developer',
		company: 'Rehnaa - Startup',
		description: (
			<ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
				<li className="mb-2">
					🚀 Contributed to developing a Flutter Mobile app and web
					portal with 4 verticals for Pakistani startup Rehnaa,
					streamlining property rental processes using Firebase and
					Flutter.
				</li>
				<li className="mb-2">
					🔄 Optimized user-centric solutions, leveraging Flutter, for
					Rehnaa's platform, connecting landlords and tenants
					seamlessly.
				</li>
			</ul>
		),
		icon: React.createElement(CgWorkAlt),
		date: 'May 2023 - Jul 2023',
		video: '/rehnaa-showcase.MP4',
	},

	{
		title: 'Digital Transformation Intern',
		company: 'Unilever Karachi, Pakistan',
		description: (
			<ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
				<li className="mb-2">
					🚀 Developed a coins and rewards feature for an end-to-end
					application called ROLL for maintaining users’ engagement.
				</li>
				<li className="mb-2">
					🔄 Improved user satisfaction and retention on the app’s
					shopping cart page through the implementation of
					user-centric strategies, resulting in a 20% increase in user
					satisfaction and a 15% increase in user retention during
					that phase.
				</li>
			</ul>
		),
		icon: <FaReact />,
		date: 'Jun 2022 - Aug 2022',
	},
	{
		title: 'Cloud Computing Project',
		company: 'Virginia Tech',
		description: (
			<ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
				<li className="mb-2">
					🚀 Deployed a full-stack web application on AWS, utilizing
					EC2 instances for application hosting and RDS for relational
					database management.
				</li>
				<li className="mb-2">
					🔧 Configured Amazon Linux 2023 with Tomcat for server
					management and integrated a MySQL database across AWS's
					public and private instances, ensuring secure and scalable
					operations.
				</li>
				<li className="mb-2">
					🛠 Showcased adeptness in AWS infrastructure configuration,
					including meticulous security group setups and EC2 instance
					deployment.
				</li>
				<li className="mb-2">
					🌐 Rolled out a React-based frontend application via Tomcat,
					demonstrating expertise in web application deployment.
				</li>
				<li className="mb-2">
					🏷 Demonstrated proficiency in custom domain integration with
					the AWS-hosted application through detailed DNS
					configurations.
				</li>
				<li className="mb-2">
					📈 Underlined proficiency in cloud-based architecture and
					deployment methodologies, ensuring a scalable and efficient
					web solution.
				</li>
			</ul>
		),
		icon: React.createElement(LuGraduationCap),
		date: 'Aug 2022 - Dec 2022',
		// link: 'http://faraznidhibookstore.me/FarazBookstoreReactTransact/',
	},
];

export const projectsData = [
	{
		title: 'CorpComment',
		description:
			'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
		tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
		imageUrl: corpcommentImg,
	},
	{
		title: 'rmtDev',
		description:
			'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
		tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
		imageUrl: rmtdevImg,
	},
	{
		title: 'Word Analytics',
		description:
			'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
		tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
		imageUrl: wordanalyticsImg,
	},
] as const;

export const skillsData = [
	'Python',
	'Java',
	'C++',
	'SQL',
	'JavaScript',
	'TypeScript',
	'HTML',
	'CSS',
	'MATLAB',
	'Kotlin',
	'Dart',
	'Solidity',
	'ReactJS',
	'AngularJS',
	'Express.js',
	'NumPy',
	'SciPy',
	'Pandas',
	'Matplotlib',
	'PyTorch',
	'MySQL',
	'PostgreSQL',
	'MongoDB',
	'Selenium',
	'Jupyter',
	'Flutter',
	'Git',
	'Bash',
	'Snowflake',
	'DataIKU',
	'Vercel',
	'Wordpress',
	'MetaMask',
	'Latex',
] as const;
