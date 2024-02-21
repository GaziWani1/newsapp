import React from 'react';
import NewsCard, { NewsProp } from '@/components/NewsCard';
import axios from 'axios';
import axiosRateLimit from 'axios-rate-limit';

const axiosInstance = axiosRateLimit(axios.create(), {
	maxRequests: 10,
	perMilliseconds: 24 * 60 * 60 * 1000,
});

export const fetchNews = async (pageNumber: number, topic: string) => {
	try {
		let requestCount = parseInt(localStorage.getItem('requestCount') || '0', 10);
		let lastRequestTimestamp = parseInt(
			localStorage.getItem('lastRequestTimestamp') || '0',
			10,
		);
		const currentTimestamp = new Date().getTime();
		if (currentTimestamp - lastRequestTimestamp >= 24 * 60 * 60 * 1000) {
			requestCount = 0;
			lastRequestTimestamp = currentTimestamp;
			localStorage.setItem('requestCount', requestCount.toString());
			localStorage.setItem('lastRequestTimestamp', lastRequestTimestamp.toString());
		}

		// Fetch news data only if the request count is within the limit
		if (requestCount < 10) {
			// Fetch news data from the API using axiosInstance
			const response = await axiosInstance.get(
				`https://newsapi.org/v2/everything?q=${topic}&from=2024-02-15&sortBy=popularity&page=${pageNumber}&pageSize=6&apiKey=${process.env.NEXT_PUBLIC_API_KEY}`,
			);

			const data = response.data;

			requestCount++;
			localStorage.setItem('requestCount', requestCount.toString());

			return data.articles.map((news: NewsProp, index: number) => (
				<NewsCard
					key={news.url}
					news={news}
					index={index}
				/>
			));
		} else {
			console.log('Rate limit exceeded. Please try again later.');
			return null;
		}
	} catch (error: any) {
		console.log(error);
	}
};
