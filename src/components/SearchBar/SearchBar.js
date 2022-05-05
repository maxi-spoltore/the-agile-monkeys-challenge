import React from 'react';
import Icon from '../Icon';
import theme from '../../theme';

const SearchBar = () => {
	const { palette } = theme;
	return (
		<div className='w-full max-w-[603px] h-14 flex items-center bg-dark-charcoal rounded-lg px-4'>
			<input
				type='text'
				spellcheck='false'
				placeholder='Search'
				className='w-full bg-transparent text-quick-silver border-none outline-none'
			/>
			<button className='cursor-pointer'>
				<Icon name='search' color={theme.palette.quickSilver} />
			</button>
		</div>
	)
}

export default SearchBar