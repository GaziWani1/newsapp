'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
	const [theme, setTheme] = useState('light');

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
			document.body.classList.add('dark');
			document.body.classList.remove('light');
		} else {
			setTheme('light');
			document.body.classList.add('light');
			document.body.classList.remove('dark');
		}
	};

	return (
		<>
			<div className='max-w-full h-auto'>
				<nav className='flex justify-between  py-4 '>
					<h1 className='text-2xl font-semibold text-black dark:text-white dark:opacity-95 opacity-75'>
						<Link href='/'>
							News <span className='text-cyan-900 dark:text-yellow-200'>Rabbit</span>
						</Link>
					</h1>
					<button
						className='cursor-pointer'
						onClick={changeTheme}
					>
						{theme === 'light' ? (
							<Image
								src='/assets/icons/dark.svg'
								alt='theme'
								width={26}
								height={26}
							/>
						) : (
							<Image
								src='/assets/icons/light.svg'
								alt='theme'
								width={26}
								height={26}
							/>
						)}
					</button>
				</nav>
			</div>
			<div
				className='flex flex-wrap mt-6 w-full  py-4 
			    justify-center items-center md:justify-between space-y-6
				 md:space-y-0  h-auto '
			>
				<div className='w-full md:w-1/2'>
					<h1 className='text-black dark:text-white opacity-80 dark:opacity-95 text-center md:text-start text-6xl font-bold'>
						News <span className='text-cyan-900 dark:text-yellow-200'>Rabbit</span>
					</h1>
					<p className='text-black dark:text-white dark:opacity-100 opacity-70 p-2 text-center md:text-start font-semibold text-[15px] '>
						Stay ahead with real-time updates. Your personalized news experience awaits.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, totam!
					</p>
				</div>
				<div className='w-full md:w-1/2'>
					<Image
						src='/assets/hero-banner.png'
						alt='hero-image'
						width={700}
						height={700}
					/>
				</div>
			</div>
		</>
	);
};

export default Header;
