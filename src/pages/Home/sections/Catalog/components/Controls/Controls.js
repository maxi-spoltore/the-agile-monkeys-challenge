import React from 'react';
import Button from 'components/Button';

const Controls = () => {
	const baseProps = {
		color: 'white',
		borderColor: 'quick-silver',
		variant: 'outlined',
		styles: ['rounded-2xl', 'leading-5']
	}
	return (
		<div className='flex items-end gap-x-4'>
			<Button
				{...baseProps}
				text='Filters'
				iconName='filter'
				iconColor='corn'
			/>
			<Button
				{...baseProps}
				text='Order by'
				iconName='order'
				iconColor='corn'
			/>
		</div>
	)
}

export default Controls