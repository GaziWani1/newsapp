'use client';
'use client';
import { NewsCategory } from '@/types/types';
import Image from 'next/image';
import { useState } from 'react';

interface CatagoriesProps {
	setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Catagories: React.FC<CatagoriesProps> = ({ setCategory }) => {
	const [newsCategories, setNewsCategories] = useState<NewsCategory[]>([
		{
			id: 1,
			label: 'Top Headlines',
			value: 'top-headlines',
			icon: '/assets/icons/topHeadlines.svg',
			isActive: false,
		},
		{
			id: 2,
			label: 'Technology',
			value: 'technology',
			icon: '/assets/icons/tech.svg',
			isActive: true,
		},
		{
			id: 3,
			label: 'Business',
			value: 'business',
			icon: '/assets/icons/business.svg',
			isActive: false,
		},
		{
			id: 4,
			label: 'Entertainment',
			value: 'entertainment',
			icon: '/assets/icons/entertainment.svg',
			isActive: false,
		},
		{
			id: 5,
			label: 'Science',
			value: 'science',
			icon: '/assets/icons/science.svg',
			isActive: false,
		},
		{
			id: 6,
			label: 'Health',
			value: 'health',
			icon: '/assets/icons/health.svg',
			isActive: false,
		},
		{
			id: 7,
			label: 'Sports',
			value: 'sports',
			icon: '/assets/icons/sports.svg',
			isActive: false,
		},
	]);

	const handleCategory = (cateId: number, value: string) => {
		setCategory(value);
		setNewsCategories(prevCategories =>
			prevCategories.map((cate: any) => {
				return cate.id === cateId
					? { ...cate, isActive: true }
					: { ...cate, isActive: false };
			}),
		);
	};

	return (
		<section className='h-auto md:mt-11'>
			<h1 className='text-black opacity-70 dark:opacity-100 font-semibold text-2xl dark:text-white'>
				Categories
			</h1>
			<div className='mt-2'>
				<ul className='flex justify-between flex-wrap'>
					{newsCategories.map(cate => (
						<li
							className={`${
								cate.isActive ? 'bg-teal-400 dark:bg-blue-400 ' : 'bg-teal-600 dark:bg-blue-600'
							}  py-2 px-3 rounded-full m-1 cursor-pointer flex gap-2`}
							key={cate.id}
							onClick={() => handleCategory(cate.id, cate.value)}
						>
							<span className=' dark:opacity-90 text-[14px] text-white dark:text-white font-semibold '>
								{cate.label}
							</span>
							<Image
								src={cate.icon}
								alt={cate.label}
								width={20}
								height={20}
							/>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Catagories;
