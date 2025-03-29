import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Faraz Shah | Personal Portfolio',
	description:
		'Faraz UlHaq Shah is a full-stack developer with 2 years of experience.',
	// get from public/faraz-profile-pic.png
	image: 'public/faraz-profile-pic.png',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<link
				rel="icon"
				href="https://media.licdn.com/dms/image/D4D35AQH6UFwU_IjGdA/profile-framedphoto-shrink_400_400/0/1692546481662?e=1708891200&v=beta&t=oTFkizM_SWVvnKfiw8OjMzeCpkMJkCOqWhiESZfddew"
				type="image/png"
			/>
			<body
				className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
			>
				<div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#ebabd8]"></div>
				<div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#785696]"></div>

				<ThemeContextProvider>
					<ActiveSectionContextProvider>
						<Header />

						{children}
						<Analytics />
						<Footer />

						<Toaster position="top-right" />
						<ThemeSwitch />
					</ActiveSectionContextProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
