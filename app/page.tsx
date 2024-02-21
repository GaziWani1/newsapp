'use client';
import { useState, useEffect } from 'react';
import Catagories from '@/components/Catagory';
import LoadMore from '@/components/LoadMore';
import { fetchNews } from '@/lib/actions/actions';
import NewsCard from '@/components/NewsCard';
import CardSkelton from '@/components/CardSkelton';

export type NewsCard = JSX.Element;

export default function Home() {
	const [category, setCategory] = useState('technology');
	const [data, setData] = useState<NewsCard[]>([]);
	const [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		async function fetchData() {
			const newData = await fetchNews(1, category);
			setData(newData);
			setLoader(false);
		}
		fetchData();
	}, [category]);

	return (
		<>
			<Catagories setCategory={setCategory} />
			{loader ? (
				<main className='w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center md:justify-between'>
					<CardSkelton />
					<CardSkelton />
					<CardSkelton />
				</main>
			) : (
				<main className='w-full mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center md:justify-between'>
					{data}
				</main>
			)}

			<LoadMore category={category} />
		</>
	);
}
