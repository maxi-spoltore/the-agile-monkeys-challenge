import React from 'react';
import TopHeader from './components/TopHeader';
import MainHeader from './components/MainHeader';

const Header = () => {
	return (
		<header id='header'>
			<TopHeader />
			<MainHeader />
		</header>
	)
}

export default Header