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
					🚀 Contributed to developing a Flutter mobile app and web portal for Rehnaa, a Pakistani proptech startup, streamlining rental processes across 4 verticals using Firebase and MongoDB.
				</li>
				<li className="mb-2">
					⚙️ Integrated Kafka and Elasticsearch for real-time search functionality and improved platform responsiveness.
				</li>
				<li className="mb-2">
					☁️ Deployed backend services to the cloud ensuring scalable, fault-tolerant infrastructure.
				</li>
			</ul>
		),
		icon: React.createElement(CgWorkAlt),
		date: 'May 2023 - Jul 2023',
		video: '/rehnaa-showcase.MP4',
	},

	{
		title: 'Software Engineer',
		company: 'Reliance Aviation - Aviation Solutions',
		description: (
			<ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
				<li className="mb-2">
					🛫 Built a real-time aircraft fleet tracking dashboard using React and Firebase to improve operational monitoring and situational awareness.
				</li>
				<li className="mb-2">
					🌦 Integrated weather APIs and live flight data to dynamically suggest optimal flight paths and improve safety compliance.
				</li>
				<li className="mb-2">
					📊 Collaborated with aviation experts to align system design with industry standards, resulting in a more intuitive and domain-aligned user interface.
				</li>
			</ul>
		),
		icon: React.createElement(FaReact),
		date: 'Feb 2022 - Jul 2023',
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
	{
		title: 'Generative AI-Agents for Minecraft',
		company: 'Virginia Tech',
		description: (
			<ul className="list-disc mt-1 font-normal text-gray-700 dark:text-white/75">
				<li className="mb-2">
					🧠 Architected an AI-powered Minecraft assistant using AWS Bedrock, Lambda, and Mineflayer to interpret in-game chat commands and automate creative tasks like terrain generation and minigame setup.
				</li>
				<li className="mb-2">
					🌍 Integrated real-time data pipelines and ML models to enhance responsiveness and simulate intelligent gameplay assistance.
				</li>
				<li className="mb-2">
					☁️ Provisioned scalable cloud infrastructure with AWS ECS, CloudFormation, and CloudFront for x86 and GPU-accelerated environments.
				</li>
				<li className="mb-2">
					🚀 Reduced server setup time by 30%, enabling non-technical players to launch multiplayer games and build without writing code.
				</li>
			</ul>
		),
		icon: React.createElement(LuGraduationCap),
		date: 'Feb 2025 - Mar 2025',
		video: '/Minecraft-short-demo.mp4',
	}
	
];



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
