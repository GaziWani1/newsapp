import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MotionDiv } from './MotionDiv';

export interface NewsProp {
	url: string;
	id: string;
	title: string;
	urlToImage: string;
	author: string;
	description: string;
	publishedAt: string;
}

interface Prop {
	news: NewsProp;
	index: number;
}

const variants = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const NewsCard = ({ news, index }: Prop) => {
	return (
		<MotionDiv
			variants={variants}
			initial='hidden'
			animate='visible'
			transition={{
				delay: index * 0.25,
				ease: 'easeInOut',
				duration: 0.5,
			}}
			viewport={{ amount: 0 }}
			className='max-w-sm mx-auto md:mx-0 overflow-hidden bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
		>
			<Image
				className=' transition-all ease-linear rounded-t-lg h-60 hover:scale-105'
				src={news.urlToImage || '/assets/image-not-found.jpg'}
				alt='image not found'
				width={400}
				height={300}
			/>
			<div className='p-5'>
				<h5 className='mb-2 text-xl font-semibold tracking-tight text-gray-900 opacity-50 line-clamp-1 dark:text-white'>
					{news.title || ''}
				</h5>
				<p className='mb-3 opacity-70 font-normal text-black dark:text-gray-400 line-clamp-2'>
					{news.description || ''}
				</p>
				<div className='flex justify-between items-end'>
					<p className='mb-3 opacity-80 text-blue-800 dark:text-gray-400 font-semibold'>
						{news.author || ''}
					</p>
					<p className='mb-3 opacity-80 text-xs font-semibold text-blue-800 dark:text-gray-400'>
						{news.publishedAt?.split('T')[0] || ''}
					</p>
				</div>
				<Link
					href={news.url || '/'}
					target='_blank'
					className='inline-flex items-center px-4 py-2 gap-2 text-[15px] font-medium text-center text-white bg-gray-900 rounded-full
					 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
					 dark:focus:ring-blue-800'
				>
					Read more
					<Image
						src='/assets/icons/right-arrow.svg'
						alt='arrow'
						width={15}
						height={15}
					/>
				</Link>
			</div>
		</MotionDiv>
	);
};

export default NewsCard;
