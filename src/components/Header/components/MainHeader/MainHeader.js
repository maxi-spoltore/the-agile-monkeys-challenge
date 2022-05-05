import React from 'react';
import Logo from 'components/Logo';
import SearchBar from 'components/SearchBar';

const MainHeader = () => {
	return (
		<nav className='pt-12 pb-2'>
			<div className='w-full max-w-desktop mx-auto flex justify-between'>
				<Logo />
				<SearchBar />
			</div>
		</nav>
	)
}

export default MainHeader
/*1568*/