import React from 'react';
import InfoCard from 'components/InfoCard';
import bannerData from './bannerData.json';

const MainBanner = () => {
	const { title, subtitle } = bannerData;

	return (
		<section id='main-banner'>
			<InfoCard
				imgUrl='images/banner-main.png'
				altText='Main Banner'
				title={title}
				subtitle={subtitle}
				btnText='Read more'
			/>
		</section>
	);

}

export default MainBanner