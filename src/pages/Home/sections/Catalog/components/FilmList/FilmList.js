import React from 'react';
import FilmCard from 'components/FilmCard';

const FilmList = ({ data = [] }) => {
	return (
		<div className='w-full max-w-desktop mx-auto grid grid-cols-5 gap-x-10 gap-y-16'>
			{data.map(item => (
				<FilmCard filmData={item} key={`film--${item.id}`} />
			))}
		</div>
	)
}

export default FilmList