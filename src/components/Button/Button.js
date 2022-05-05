import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';
import palette from 'theme/palette';

const Button = ({
	text,
	color = 'black',
	borderColor = 'black',
	variant = 'contained',
	rounded,
	iconName,
	iconColor,
	onClick = () => {},
	styles = []
}) => {
	const backgroundTheme = variant === 'contained'
		? [`bg-${color}`]
		: ['bg-transparent'];

	const borderTheme = variant === 'contained'
		? ['border', 'border-none']
		: ['border', `border-${borderColor}`];

	const colorTheme = variant === 'contained'
		? ['text-white']
		: [`text-${color}`];

	const btnClasses = classNames([
		'flex',
		'justify-center',
		'items-center',
		'px-4',
		'py-1.5',
		...borderTheme,
		...backgroundTheme,
		...colorTheme,
		...(rounded ? ['rounded-lg'] : []),
		...styles
	]);

	return (
			<button
				className={btnClasses}
				onClick={onClick}
			>
				{iconName && (
					<div className='mr-2'>
						<Icon name={iconName} color={palette[iconColor] || palette.black} />
					</div>
				)}
				{text || ''}
			</button>
	)
}

export default Button