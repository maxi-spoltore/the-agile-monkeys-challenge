import React from 'react';
import catalogData from './catalog-data.json';
import MainBanner from '../MainBanner';
import SectionHeader from './components/SectionHeader';

const Catalog = () => {
	const { heading, subtitle, filmsData, itemsPerSection } = catalogData;
	const pages = filmsData.reduce((totalPages, item, index) => {
		const pageIndex = Math.floor(index / itemsPerSection);

		if(!totalPages[index]) {
			totalPages[pageIndex] = []
		}

		totalPages[pageIndex].push(item);

		return totalPages

	}, []);

	return (
		<section className='mt-12'>
			<SectionHeader heading={heading} subtitle={subtitle} />
			<MainBanner />
		</section>
	)
}

export default Catalog