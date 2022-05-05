import React from 'react';
import FilmCard from 'components/FilmCard';

const FilmList = ({ data = [] }) => {
	return (
		<div className='flex flex-wrap justify-center mx-auto gap-x-10 gap-y-16'>
			{data.map(item => (
				<FilmCard filmData={item} key={`film--${item.id}`} />
			))}
		</div>
	)
}

export default FilmList