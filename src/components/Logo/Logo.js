import React from 'react';
import MainLogo from './svg/logo-main.svg';
import ShortLogo from './svg/logo-short.svg';

const Logo = ({ variant = 'main', href = '/' }) => {
	const getSvg = () => {
		switch (variant) {
			case 'main':
				return MainLogo;
			case 'short':
				return ShortLogo;
			default:
				return ''
		}
	}
	return (
		<a className='cursor-pointer' href={href}>
			<img src={getSvg()} alt={`Logo ${variant}`} />
		</a>
	)
}

export default Logo