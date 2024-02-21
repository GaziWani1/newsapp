'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { NewsCard } from '@/app/page';
import { fetchNews } from '@/lib/actions/actions';

interface LoadMoreProps {
	category: string;
}

let page = 2;

const LoadMore: React.FC<LoadMoreProps> = ({ category }) => {
	const { ref, inView } = useInView();
	const [data, setData] = useState<NewsCard[]>([]);
	const [loader, setLoader] = useState(false);
	const [msg, setMsg] = useState('');
	const [showGoToTop, setShowGoToTop] = useState(false);
	useEffect(() => {
		setLoader(!loader);
		if (inView) {
			fetchNews(page, category).then(res => {
				if (res) setData([...data, ...res]);
				else {
					setLoader(!loader);
					setMsg('Rate limit exceeded. Please try again later.');
				}
			});
			setLoader(!loader);
			page = page + 1;
		}
	}, [inView]);

	useEffect(() => {
		setData([]);
	}, [category]);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
			if (scrollTop > clientHeight) {
				setShowGoToTop(true);
			} else {
				setShowGoToTop(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<>
			<main className='w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center md:justify-between'>
				{data}
			</main>
			<section
				ref={ref}
				className=' w-full mt-7 flex justify-center'
			>
				<span className=' text-black opacity-65 font-semibold dark:text-gray-300'>
					{msg === '' ? 'loading...' : 'Rate limit exceeded. Please try again later.'}
				</span>
			</section>
			{showGoToTop && (
				<button
					className='fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-full shadow-lg'
					onClick={scrollToTop}
				>
					<Image
						src='assets/icons/arrow-top.svg'
						alt='top'
						width={17}
						height={17}
					/>
				</button>
			)}
		</>
	);
};

export default LoadMore;
