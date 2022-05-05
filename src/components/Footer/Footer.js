import React from 'react';
import Logo from 'components/Logo';
import FooterLinks from './components/FooterLinks';

const Footer = () => {
	return (
		<footer className='w-full'>
			<div className='flex flex-col items-center w-full max-w-desktop-lg mx-auto border-t border-quick-silver pt-16 pb-10'>
				<Logo variant='short'/>
				<FooterLinks />
			</div>
		</footer>
	)
}

export default Footer