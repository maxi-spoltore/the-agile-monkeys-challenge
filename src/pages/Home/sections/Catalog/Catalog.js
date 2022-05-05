import React from 'react';
import catalogData from './catalog-data.json';
import MainBanner from '../MainBanner';
import SectionHeader from './components/SectionHeader';
import FilmList from './components/FilmList';

const Catalog = () => {
	const { heading, subtitle, filmsData, itemsPerSection } = catalogData;

	const pages = filmsData.reduce((totalPages, item, index) => {
		const pageIndex = Math.floor(index / itemsPerSection);

		if(!totalPages[pageIndex]) {
			totalPages[pageIndex] = []
		}

		totalPages[pageIndex].push(item);

		return totalPages
	}, []);

	const renderPages = () =>
		pages.map((page, idx, arr) => {
			const key = `catalog-page--${idx}`;
			const isLastPage = idx === arr.length - 1;

			return (
				<div key={key}>
					<FilmList data={page} />
					{!isLastPage && (
						<div className='my-[6.5rem]'>
							<MainBanner />
						</div>
					)}
				</div>
			)
		});

	return (
		<section className='mt-12'>
			<SectionHeader heading={heading} subtitle={subtitle} />
			<div className='mb-[8.375rem]'>
				{renderPages()}
			</div>
		</section>
	)
}

export default Catalog