import Image from 'next/image';
import React from 'react';

const CardSkelton = () => {
	return (
		<>
			<div
				role='status'
				className='max-w-sm mx-5 md:mx-0 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700'
			>
				<div className='flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700'>
					<Image
						src='/assets/icons/imageLoading.svg'
						alt='loading...'
						width={30}
						height={30}
					/>
				</div>
				<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
				<div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
				<div className='flex items-center mt-4'>
					<Image
						src='/assets/icons/user.svg'
						alt='loading...'
						width={30}
						height={30}
					/>
					<div>
						<div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2'></div>
						<div className='w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700'></div>
					</div>
				</div>
				<span className='sr-only'>Loading...</span>
			</div>
		</>
	);
};

export default CardSkelton;
