import React from 'react';
import links from './footer-links.json';

const FooterLinks = () => {
	const renderLinks = () => {
		return links.map((link, idx) => {
			const { text = '', href = '' } = link;
			const key = `footer-link--${idx}`;
			return (
				<li className='leading-4' key={key}>
					<a className='underline underline-offset-1' href={href}>{text}</a>
				</li>
			)
		})
	};

	return (
		<div className='mt-[53px]'>
			<ul className='flex gap-x-10'>
				{renderLinks()}
			</ul>
		</div>
	)
}

export default FooterLinks