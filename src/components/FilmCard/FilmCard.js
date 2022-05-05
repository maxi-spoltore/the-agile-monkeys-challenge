import React from 'react';
import Image from 'components/Image';
import Icon from 'components/Icon';
import palette from 'theme/palette';

const FilmCard = ({ filmData = {} }) => {
	const { title, releaseDate, rating, imgUrl, href } = filmData;
	const imgContainerStyles = ['rounded-lg']
	return (
		<div className='flex flex-col'>
			<a href={href}>
				<Image imgUrl={imgUrl} containerStyles={imgContainerStyles} />
			</a>
			<div>
				<div className='mt-4'>
					<div className='flex items-center text-corn font-bold'>
						<div className='flex items-center mr-1.5 mb-0.5'><Icon name='star' color={palette.corn} /></div>
						<div>{rating.toFixed(1)}</div>
					</div>
					<h3 className='text-xl leading-8 font-bold my-0.5 ml-1'>{title}</h3>
					<p className='text-quick-silver ml-1'>{releaseDate}</p>
				</div>
			</div>
		</div>
	)
}

export default FilmCard