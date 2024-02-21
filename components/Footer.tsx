import Link from 'next/link';
import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-white mt-10   dark:bg-gray-800'>
			<div className='w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between'>
				<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2024 . All Rights Reserved ro Rabbit News
				</span>
				<ul className='flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0'>
					<li>
						<Link
							href='/'
							className='hover:underline'
						>
							Rabbit News
						</Link>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
