import React from 'react';
import Controls from '../Controls';

const SectionHeader = ({ heading, subtitle }) => {
	return (
		<div className='flex justify-between mb-10'>
		<div className='flex-1'>
			<h1 className='text-2xl font-bold mb-2'>{heading}</h1>
			<div className='w-full max-w-[784px]'>{subtitle}</div>
		</div>
		<Controls />
	</div>
	)
}

export default SectionHeader